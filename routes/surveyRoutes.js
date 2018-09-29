const _ = require('lodash');
const { URL } = require('url');
const Path = require('path-parser').default;
const moongose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplate/surveyTemplate');
const Survey = moongose.model('surveys');

module.exports = app => {
    app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
        const { title, subject, body, recipients } = req.body;
        const survey = new Survey({
            title,
            subject,
            body, 
            recipients: recipients.split(',').map(email => {
                return { email: email.trim() }
            }),
            _user: req.user.id,
            sendDate: Date.now()
        })

        const mailer = new Mailer(survey, surveyTemplate(survey));

        try{
            await mailer.send();
            await survey.save();
            req.user.credits -= 1;
            const user = await req.user.save();
            
            res.send(user);
        }catch(e) {
            res.send(422).send(e);
        }
    });

    app.post('/api/surveys/webhooks', (req, res) => {
        console.log('webhook')
        _.chain(req.body)
            .map(event => {
                const pathname = new URL(event.url).pathname;
                const p = new Path('/surveys/:surveyId/:choice');
                const match = p.test(pathname);
                if (match) {
                    return {
                        email: event.email,
                        surveyId: match.surveyId,
                        choice: match.choice
                    };
                }
            })
            .compact()
            .uniqBy('email', 'surveyId')
            .each(({ surveyId, email, choice }) => {
                //this is async, but we can leave that way cause sendgrid does
                // not expect some response
                Survey.updateOne({
                    _id: surveyId,
                    recipients: {
                        $elemMatch: { email: email, responded: false },
                    }
                }, {
                    $inc: { [choice]: 1 },
                    $set: { 'recipients.$.responded': true },
                    lastResponded: new Date()
                }).exec();
            })
            .value();

        res.send({})
    });
}
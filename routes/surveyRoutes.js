const moongose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplate/surveyTemplate');
const Survey = moongose.model('surveys');

module.exports = app => {
    app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {
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
        mailer.send();
    })
}
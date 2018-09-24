const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipienSchema = require('./Recipient');

const SurveySchema = new Schema({
    title: String,
    body: String,
    subject: String,
    recipients: [RecipienSchema],
    yes: { type: Number, default: 0 },
    no: { type: Number, default: 0 },
    // relationship field to user
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
    dateSend: Date,
    lastResponded: Date
});

mongoose.model('surveys', SurveySchema);
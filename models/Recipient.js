const mongoose = require('mongoose');
const { Schema } = mongoose;

const RecipienSchema = new Schema({
    email: String,
    responded: { type: Boolean, default: false }
});

module.exports = RecipienSchema;
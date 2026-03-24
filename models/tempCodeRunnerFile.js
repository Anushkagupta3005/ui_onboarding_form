const mongoose = require('mongoose');

const fieldSchema = new mongoose.Schema({
    name: String,
    type: String,
    label: String,
    required: Boolean
});

const formSchema = new mongoose.Schema({
    formId: String,
    fields: [fieldSchema]
});

module.exports = mongoose.model('Form', formSchema);
const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true    
    },
    email:{
        type: String,
        required: true,
        trim: true  
    },
    message:{
        type: String,
        required: true,
        trim: true  
    }
});

const ContactUs = mongoose.model('contact', contactSchema);

module.exports = ContactUs;
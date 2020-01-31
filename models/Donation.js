const mongoose = require('mongoose');

const donationSchema = mongoose.Schema({
    donorname: {
        type: String,
        required: true,
        trim: true    
    },
    contactnumber:{
        type: String,
        required: true,
        trim: true  
    },
    pickupaddress:{
        type: String,
        required: true,
        trim: true  
    },
    pickuptime: {
        type: String,
        required: true,
        trim: true
    },
    noofcloth: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        trim: true
    }
});


const Donate = mongoose.model('donation', donationSchema);

module.exports = Donate;
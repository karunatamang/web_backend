const Contact = require('../models/Contact')

exports.addContact = (req, res) => {
    var contact = new Contact(req.body)
    contact.save().then(function () {
        res.send("contact added")
    }).catch(function (e) {
        res.send(e)
    })
}
exports.viewContact = (req, res) => {
    Contact.find().then(function (contact) {
        res.send(contact);
    }).catch(function (er) {
        res.send(er);
    });
}
exports.viewContactById = (req, res) => {
    Contact.findOne({ _id: req.params.id }).then(function (contact) {
        res.send(contact);
    }).catch(function (er) {
        res.send(er);
    });
}

exports.updateContact = async (req, res) => {
    Contact.findByIdAndUpdate(req.params.id, req.body)
        .then(function () {
            res.send('Update Successfull')
        }).catch(function (e) {
            res.send(e)
        })
}

exports.deleteContact = async (req, res) => {
    Contact.findByIdAndDelete(req.params.id)
        .then(function () {
            res.send('Delete Successfull')
        }).catch(function (e) {
            res.send(e)
        })
}



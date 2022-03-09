"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteContact = exports.updateContact = exports.getContactWithId = exports.getContact = exports.addNewContact = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const crmModels_1 = require("../models/crmModels");
const Contact = mongoose_1.default.model("Contact", crmModels_1.ContactSchema);
// Add a contact
const addNewContact = (req, res) => {
    let newContact = new Contact(req.body);
    newContact.save((err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};
exports.addNewContact = addNewContact;
// Get all contact
const getContact = (req, res) => {
    Contact.find({}, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};
exports.getContact = getContact;
// Get contact by ID
const getContactWithId = (req, res) => {
    Contact.findById(req.params.contactID, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};
exports.getContactWithId = getContactWithId;
// Update contact by ID
const updateContact = (req, res) => {
    Contact.findOneAndUpdate({ _id: req.params.contactID }, req.body, { new: true, useFindAndModify: false }, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
};
exports.updateContact = updateContact;
// Delete contact by ID
const deleteContact = (req, res) => {
    Contact.remove({ _id: req.params.contactID }, (err) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: "successfully deleted contact" });
    });
};
exports.deleteContact = deleteContact;
// module.exports = {
//   addNewContact,
//   getContact,
//   getContactWithId,
//   updateContact,
//   deleteContact,
// };
//# sourceMappingURL=crmControllers.js.map
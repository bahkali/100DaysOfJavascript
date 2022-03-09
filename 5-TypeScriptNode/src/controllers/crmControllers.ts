import mongoose from "mongoose";
import { ContactSchema } from "../models/crmModels";

const Contact = mongoose.model("Contact", ContactSchema);

// Add a contact
export const addNewContact = (req: any, res: any) => {
  let newContact = new Contact(req.body);
  newContact.save((err: any, contact: any) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};

// Get all contact
export const getContact = (req: any, res: any) => {
  Contact.find({}, (err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};

// Get contact by ID
export const getContactWithId = (req: any, res: any) => {
  Contact.findById(req.params.contactID, (err: any, contact: any) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};

// Update contact by ID
export const updateContact = (req: any, res: any) => {
  Contact.findOneAndUpdate(
    { _id: req.params.contactID },
    req.body,
    { new: true, useFindAndModify: false },
    (err, contact) => {
      if (err) {
        res.send(err);
      }
      res.json(contact);
    }
  );
};

// Delete contact by ID
export const deleteContact = (req: any, res: any) => {
  Contact.remove({ _id: req.params.contactID }, (err) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "successfully deleted contact" });
  });
};

// module.exports = {
//   addNewContact,
//   getContact,
//   getContactWithId,
//   updateContact,
//   deleteContact,
// };

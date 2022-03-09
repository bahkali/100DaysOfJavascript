import {
  addNewContact,
  getContact,
  getContactWithId,
  updateContact,
  deleteContact,
} from "../controllers/crmControllers";

export const routes = (app: any) => {
  app
    .route("/")
    .get((req: any, res: any, next: any) => {
      // ADDED middleware to get endpoint
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    }, getContact)
    .post(addNewContact);

  app
    .route("/:contactID")
    .get(getContactWithId)
    .put(updateContact)
    .delete(deleteContact);
};

// module.exports = routes;

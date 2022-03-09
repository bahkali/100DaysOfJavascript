"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const crmControllers_1 = require("../controllers/crmControllers");
const routes = (app) => {
    app
        .route("/")
        .get((req, res, next) => {
        // ADDED middleware to get endpoint
        console.log(`Request from: ${req.originalUrl}`);
        console.log(`Request type: ${req.method}`);
        next();
    }, crmControllers_1.getContact)
        .post(crmControllers_1.addNewContact);
    app
        .route("/:contactID")
        .get(crmControllers_1.getContactWithId)
        .put(crmControllers_1.updateContact)
        .delete(crmControllers_1.deleteContact);
};
exports.routes = routes;
// module.exports = routes;
//# sourceMappingURL=crmRoutes.js.map
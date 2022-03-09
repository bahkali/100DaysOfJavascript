"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const crmRoutes_1 = require("./src/routes/crmRoutes");
require("dotenv").config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
const DB_URI = process.env.DB_URI || " ";
// mongoose connection
mongoose_1.default.connect(DB_URI).then((result) => {
    console.log("DB connected..");
});
// bodyparser setup
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
(0, crmRoutes_1.routes)(app);
app.use(express_1.default.static("public"));
app.get("/", (req, res) => {
    res.send(`Node and express server is running on ports ${PORT}`);
});
app.listen(PORT, () => {
    console.log(`Node and express server is running on ports ${PORT}`);
});
//# sourceMappingURL=index.js.map
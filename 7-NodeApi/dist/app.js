"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const feed_1 = __importDefault(require("./routes/feed"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
// MIDDELWARE
// BODYPARSER
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
// SET CORS HEADER
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});
// ROUTES
app.use("/feed", feed_1.default);
// ERROR HANDLER
// Listen
app.listen(PORT, () => {
    console.log(`---> Server is listening on port ${PORT}...`);
});

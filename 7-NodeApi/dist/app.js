"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const connect_1 = require("./db/connect");
const feed_1 = __importDefault(require("./routes/feed"));
require("dotenv").config();
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
const url = process.env.DB_URI || "";
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, connect_1.connectDB)(url);
        app.listen(PORT, () => {
            console.log(`---> Server is listening on port ${PORT}...`);
        });
    }
    catch (error) {
        console.log({ msg: error });
    }
});
start();

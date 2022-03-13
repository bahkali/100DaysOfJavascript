"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenVerification = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const tokenVerification = (req, res, next) => {
    const token = req.get("Authorization").split(" ")[1];
    let decodedToken;
    try {
        decodedToken = jsonwebtoken_1.default.verify(token, "supersecret");
    }
    catch (error) {
        throw error;
    }
    // invalid token handeler
    if (!decodedToken) {
        const err = new Error("Not authenticated.");
        throw err;
    }
    // Valid token
    req.userId = decodedToken.userId;
    next();
};
exports.tokenVerification = tokenVerification;

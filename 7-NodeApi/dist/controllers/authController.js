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
exports.signup = void 0;
const userModels_1 = __importDefault(require("../models/userModels"));
const express_validator_1 = require("express-validator");
const bcrypt_1 = __importDefault(require("bcrypt"));
const signup = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            const error = new Error("Validation failed");
            throw error;
        }
        const { email, name, password } = req.body;
        // Check if user already exist
        userModels_1.default.findOne({ email: email }).then((userDoc) => {
            if (userDoc) {
                const error = new Error("Email address already exists!");
                throw error;
            }
        });
        // Encrypt
        const salt = yield bcrypt_1.default.genSaltSync(10);
        const hashPassword = yield bcrypt_1.default.hashSync(password, salt);
        // save
        const result = yield userModels_1.default.create({
            email: email,
            password: hashPassword,
            name: name,
        });
        res.status(200).json({ msg: "User created!", user: result });
    }
    catch (err) {
        next(err);
    }
});
exports.signup = signup;

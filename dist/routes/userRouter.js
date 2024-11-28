"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route = (0, express_1.Router)();
route.get("/fetchData", (req, res) => { res.send("kuch nahi hai db mein"); });
exports.default = route;

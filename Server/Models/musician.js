"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let musicianSchema = new mongoose_1.Schema({
    id: Number,
    quote: String,
    author: String
});
let Quotes = (0, mongoose_1.model)('Quotes', musicianSchema);
exports.default = Quotes;
//# sourceMappingURL=musician.js.map
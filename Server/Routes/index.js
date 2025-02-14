"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const musician_1 = require("../Controllers/musician");
router.get('/', (req, res, next) => { (0, musician_1.DisplayMusicianList)(req, res, next); });
router.get('/:id', (req, res, next) => { (0, musician_1.DisplayMusicianById)(req, res, next); });
exports.default = router;
//# sourceMappingURL=index.js.map
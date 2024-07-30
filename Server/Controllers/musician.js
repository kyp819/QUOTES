"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayMusicianById = exports.DisplayMusicianList = void 0;
const musician_1 = __importDefault(require("../Models/musician"));
const musician_2 = __importDefault(require("../Models/musician"));
function DisplayMusicianList(req, res, next) {
    musician_2.default.find({})
        .then((data) => {
        res.status(200).json({ success: true, msg: "Musician List Retrieved and Displayed", data: data });
    })
        .catch((err) => {
        console.error(err);
    });
}
exports.DisplayMusicianList = DisplayMusicianList;
function DisplayMusicianById(req, res, next) {
    let id = req.params.id;
    if (id.length != 24) {
        res.status(400).json({ success: false, msg: "A valid ID is required to retrive a musician", data: "" });
    }
    else {
        musician_1.default.findById({ _id: id })
            .then((data) => {
            if (data) {
                res.status(200).json({ success: true, msg: "One Musician Retrived and Displayed", data: data });
            }
            else {
                res.status(404).json({ success: false, msg: "Musician not found", data: "" });
            }
        })
            .catch((err) => {
            console.error(err);
        });
    }
}
exports.DisplayMusicianById = DisplayMusicianById;
//# sourceMappingURL=musician.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.ActivitySchema = new mongoose_1.Schema({
    title: String,
    year: Number,
    genre: [String],
    duration: Number,
});
exports.ActivitySchema.methods.getTitleAndYear = function () {
    return this.title + ' ' + this.duration;
};
exports.Activity = mongoose_1.model('movies', exports.ActivitySchema);
//# sourceMappingURL=ActivityModel.js.map
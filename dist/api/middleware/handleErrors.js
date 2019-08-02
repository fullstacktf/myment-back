"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (req, res, next) => {
    if (Object.keys(req.body).length <= 0) {
        return res.status(400).send('Empty body?');
    }
    next();
};
//# sourceMappingURL=handleErrors.js.map
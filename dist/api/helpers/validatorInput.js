"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//TODO : Validator for empty input
class ValidatorInput {
    static BodyIsEmpty(req, res) {
        if (Object.keys(req.body).length <= 0)
            return res.status(400).send('Empty body?');
    }
}
exports.ValidatorInput = ValidatorInput;
//# sourceMappingURL=validatorInput.js.map
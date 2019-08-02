"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tagsController_1 = require("../controllers/tagsController");
const router = express_1.Router();
router.get('/dice/:n', (req, res) => {
    const number = tagsController_1.dice(req.params.n);
    res.json({ result: number });
});
exports.TagsRouter = router;
//# sourceMappingURL=tagsRouter.js.map
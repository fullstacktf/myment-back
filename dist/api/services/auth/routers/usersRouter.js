"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.post('/login', (req, res, next) => {
});
// router.post('/register', (req, res) => {
//     const userId = req.params.id;
//     const user = users.find(user => user.id == userId);
//     console.log(user);
//     res.json(user);
// });
// router.post('/', (req, res) => {
//     if (Object.keys(req.body).length <= 0) {
//         res.status(400).send('Empty body?');
//     } else {
//         const newUser = req.body;
//         users.push(newUser);
//         res.json(newUser);
//     }
// });
exports.usersRouter = router;
//# sourceMappingURL=usersRouter.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ActivitiesController_1 = require("../controllers/ActivitiesController");
const ActivitiesRepository_1 = require("../repositories/ActivitiesRepository");
const router = express_1.Router();
const controller = new ActivitiesController_1.ActivitiesController(new ActivitiesRepository_1.ActivitiesMongoRepository());
router.post('/', (req, res) => {
    controller.handleAddRequest(req.body)
        .then(data => res.json(data))
        .catch();
});
router.get('/get-movies', (req, res) => {
    controller.handleRequest(req.body)
        .then(data => res.json(data))
        .catch();
});
router.get('/:id', (req, res) => {
    controller.handleRequests(req.body, 'id')
        .then(data => res.json(data))
        .catch();
});
router.put('/:id', (req, res) => {
    controller.handleUpdateRequest(req.body)
        .then(data => res.json(data))
        .catch();
});
router.delete('/:id', (req, res) => {
    controller.handleDeleteRequest(req.body)
        .then(data => res.json(data))
        .catch();
});
router.put('/like/:title', (req, res) => {
    controller.handleLikeRequest(req.body)
        .then(data => res.json(data))
        .catch();
});
exports.ActivitiesRouter = router;
//# sourceMappingURL=ActivitiesRouter.js.map
import { Router } from 'express';
import { LocationsController } from '../controllers/LocationsController';
import { LocationsRepository } from '../repositories/LocationsRepository';

const router: Router = Router();

const controller = new LocationsController(new LocationsRepository());

router.post('/all', (req, res) => {
    controller.handleAddRequest(req.body)
    .then( data => res.json(data) )
    .catch() 
});

router.post('/location', (req, res) => {
    controller.handleLocationRequests(req.body,'id')
    .then( data => res.json(data) )
    .catch()
});
router.post('/city', (req, res) => {
    controller.handleCategoryRequests(req.body,'id')
    .then( data => res.json(data) )
    .catch()
});
router.put('/city', (req, res) => { 
    controller.handleUpdateRequest(req.body)
    .then( data => res.json(data) )
    .catch()
});

router.put('/zone', (req, res) => { 
    controller.handleUpdateRequest(req.body)
    .then( data => res.json(data) )
    .catch()
});

router.delete('/zone', (req, res) => {
    controller.handleDeleteRequest(req.body)
    .then( data => res.json(data) )
    .catch()
});

export const ActivitiesRouter: Router = router;
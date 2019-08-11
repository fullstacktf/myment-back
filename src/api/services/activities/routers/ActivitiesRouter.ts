import { Router } from 'express';
import { ActivitiesController } from '../controllers/ActivitiesController';
import { ActivitiesMongoRepository } from '../repositories/ActivitiesRepository';

const router: Router = Router();

const controller = new ActivitiesController(new ActivitiesMongoRepository());

router.post('/all', (req, res) => {
    console.log("post",req.body)
    controller.handleRequest(req.body)
    .then( data => res.json(data) )
    .catch() 
});

router.post('/category', (req, res) => {
    controller.handleCategoryRequests(req.body)
    .then( data => res.json(data) )
    .catch()
});
router.post('/ideas', (req, res) => {
    console.log("post",req.body)
    controller.handleIdeasRequests(req.body)
    .then( data => res.json(data) )
    .catch()
});


router.put('/:category:ideas', (req, res) => { 
    controller.handleUpdateRequest(req.body)
    .then( data => res.json(data) )
    .catch()
});

router.delete('/:idea', (req, res) => {
    controller.handleDeleteRequest(req.body)
    .then( data => res.json(data) )
    .catch()
});

export const ActivitiesRouter: Router = router;

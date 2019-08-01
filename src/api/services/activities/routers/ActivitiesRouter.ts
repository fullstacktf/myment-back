import { Router } from 'express';
import { ActivitiesController } from '../controllers/ActivitiesController';
import { ActivitiesMongoRepository } from '../repositories/ActivitiesRepository';

const router: Router = Router();

const controller = new ActivitiesController(new ActivitiesMongoRepository());

router.post('/', (req, res) => {
    controller.handleAddRequest(req.body)
    .then( data => res.json(data) )
    .catch() 
});

router.get('/get-movies',(req,res) => {
    controller.handleRequest(req.body)
    .then( data => res.json(data) )
    .catch()
})

router.get('/:id', (req, res) => {
    controller.handleRequests(req.body,'id')
    .then( data => res.json(data) )
    .catch()
});

router.put('/:id', (req, res) => { 
    controller.handleUpdateRequest(req.body)
    .then( data => res.json(data) )
    .catch()
});

router.delete('/:id', (req, res) => {
    controller.handleDeleteRequest(req.body)
    .then( data => res.json(data) )
    .catch()
});

router.put('/like/:title', (req, res) => {
    controller.handleLikeRequest(req.body)
    .then( data => res.json(data) )
    .catch()
});

export const ActivitiesRouter: Router = router;

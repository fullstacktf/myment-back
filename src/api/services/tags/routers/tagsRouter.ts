import { Router } from 'express';
import {TagsController} from '../controllers/tagsController'
import { TagsMongoRepository as TagsRepository } from '../repositories/tagsRepository';
const router: Router = Router();

const controller = new TagsController(new TagsRepository)

// Set the home page route
router.get('/', (req, res) => {
  // Ejs render automatically looks in the views folder
  res.render('index');
});

// Get a list of tags from de db
router.post('/all', (req, res) => {
    controller.handleRequest(req.body)
    .then(tags => res.json(tags))
    .catch( err => res.json({"error":"No data available"}))
});

// Add a new tag to the db
// router.post('/tags', (req, res, next) => {
//   controller.handleSearchRequest(req.body)
//     .then(tag => res.send(tag))
//     .catch(next);
// });
router.post('/category', (req, res, next) => {
  controller.handleCategoryRequest(req.body)
    .then(tag => res.send(tag))
    .catch(next);
});

// We use Query to search the Database and send the Json Response as result
// router.get('/search', function(req, res, next) {
//     controller.handleSearchRequest(req.body)

// });

export const TagsRouter: Router = router;

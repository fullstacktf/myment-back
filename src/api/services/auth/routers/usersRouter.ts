import { Router } from 'express';
import { usersController } from '../controllers/usersController';
const router: Router = Router();


router.post('/login', (req, res, next) => {
    res.send('Hello');
});

router.post('/register', (req, res) => {
    const userId = req.params.id;
    const users = req.body
    res.json(users);
});

// router.post('/', (req, res) => {
//     if (Object.keys(req.body).length <= 0) {
//         res.status(400).send('Empty body?');
//     } else {
//         const newUser = req.body;
//         users.push(newUser);
//         res.json(newUser);
//     }
// });

export const usersRouter: Router = router;
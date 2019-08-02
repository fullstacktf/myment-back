import express from 'express';
import bodyParser from 'body-parser';


const app: express.Application = express();

import { usersRouter } from './api/services/auth/routers/usersRouter';
import { ActivitiesRouter } from './api/services/activities/routers/ActivitiesRouter';
import { TagsRouter } from './api/services/tags/routers/tagsRouter';
import handleErrors from './api/middleware/handleErrors';
import allCORS from './api/middleware/allCORS'

//Add Middlewares
//app.use(allCORS);
app.use(bodyParser.json())
//app.use(handleErrors)

//Add Routes
app.use('/users', usersRouter);
//app.use('/activities', ActivitiesRouter);
//app.use('/tags', TagsRouter);

/*
he web process must listen for HTTP traffic on $PORT,
which is set by Heroku. EXPOSE in Dockerfile is not respected,
but can be used for local testing. Only HTTP requests are
supported.*/
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Express listening on port ${port}`));

export const server = app;
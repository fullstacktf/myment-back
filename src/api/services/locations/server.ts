import express from 'express';
import bodyParser from 'body-parser';


const app: express.Application = express();

import { LocationRouter } from './routers/LocationsRouter'
import allCORS from './middleware/allCORS'

//Add Middlewares
app.use(allCORS);
app.use(bodyParser.json())
//app.use(handleErrors)

//Add Routes
app.use('/locations',LocationRouter)

/*
he web process must listen for HTTP traffic on $PORT,
which is set by Heroku. EXPOSE in Dockerfile is not respected,
but can be used for local testing. Only HTTP requests are
supported.*/
const port = process.env.PORT || 4001;
app.listen(port, () => console.log(`Express listening on port ${port}`));

export const server = app;
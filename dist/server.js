"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const usersRouter_1 = require("./api/services/auth/routers/usersRouter");
const ActivitiesRouter_1 = require("./api/services/activities/routers/ActivitiesRouter");
const tagsRouter_1 = require("./api/services/tags/routers/tagsRouter");
const handleErrors_1 = __importDefault(require("./api/middleware/handleErrors"));
const allCORS_1 = __importDefault(require("./api/middleware/allCORS"));
//Add Middlewares
app.use(allCORS_1.default);
app.use(handleErrors_1.default);
//Add Routes
app.use('/users', usersRouter_1.usersRouter);
app.use('/activities', ActivitiesRouter_1.ActivitiesRouter);
app.use('/tags', tagsRouter_1.TagsRouter);
/*
he web process must listen for HTTP traffic on $PORT,
which is set by Heroku. EXPOSE in Dockerfile is not respected,
but can be used for local testing. Only HTTP requests are
supported.*/
const port = process.env.PORT;
app.listen(port, () => console.log(`Express listening on port ${port}`));
exports.server = app;
//# sourceMappingURL=server.js.map
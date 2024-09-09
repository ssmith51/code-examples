const Koa = require('koa');
const Router = require('koa-router');
const moviesRouter = require('./routes/movies');

const app = new Koa();
const router = new Router();

router.use('/movies', moviesRouter.routes());

app.use(router.routes()).use(router.allowedMethods());

module.exports = app;
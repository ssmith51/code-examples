const Router = require('koa-router');
const movies = require('../data/movies.json');

const router = new Router();

router.get('/:name', (ctx) => {
  const movieName = ctx.params.name.toLowerCase();
  const movie = movies.find(m => m.name.toLowerCase() === movieName);
  if (movie) {
    ctx.body = movie;
  } else {
    ctx.status = 404;
    ctx.body = { error: 'Movie not found' };
  }
});

module.exports = router;
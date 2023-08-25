const Koa = require('koa');
const app = new Koa();
const templates = require('./mock.js');
// response
app.use(ctx => {
  ctx.body = templates();
});

app.listen(9000);
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')

const app = new Koa()

app.use(async ctx => {
  ctx.body = JSON.stringify({ 'name': 'test' })
})

module.exports = app.callback()
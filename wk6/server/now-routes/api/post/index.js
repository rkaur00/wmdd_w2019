const Koa = require('koa')
const bodyParser = require('koa-bodyparser')

const app = new Koa()
app.use(bodyParser())

app.use(async ctx => {
  const data = await ctx.request.body
  ctx.body = data.name
})

module.exports = app.callback()
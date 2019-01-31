const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const cors = require('@koa/cors');
const pool = require('./DB/dbconfig')

const app = new Koa()
app.use(bodyParser())
app.use(cors())

app.use(async ctx => {
  const data = await ctx.request.body
  const item = await createPost(data.date, data.title, data.post)
  ctx.body = `new post created, blogID ${item.insertId}`
})

async function createPost(date, title, post) {
  try {
    const itemData = await pool.query(`
      INSERT INTO blogPosts (blogDate, blogTitle, blogPost) 
      VALUES ("${date}", "${title}", "${post}");
    `)
    return itemData
  } catch (error) {
    console.log(error)
  }
}

module.exports = app.callback()
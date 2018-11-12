const Koa = require('koa')
const topicsRoutes = require('./routes/topics')
const app = new Koa()

// mount routes
topicsRoutes(app)

// start server
app.listen(8999, () => {
  console.log('server is running at port 8999')
})

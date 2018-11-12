const Router = require('koa-router')
const { fetchPage } = require('../utils')
const router = new Router()

const fetchDetail = async url => {
  const time = Date.now()
  const $ = await fetchPage(url)
  const signature = $('.signature').html()
  const board = $('.floor').html()
  const content = $('.topic_content').html().trim()
  return { time, article: { content, board, signature } }
}

const fetchHomePage = async url => {
  let topics = []
  const time = Date.now()
  const $ = await fetchPage(url)

  $('.cell').each((index, wrapper) => {
    const isPin = Boolean($(wrapper).find('.put_top').text())
    const isGood = Boolean($(wrapper).find('.put_good').text())
    const link = $(wrapper).find('.topic_title').attr('href')
    const title = $(wrapper).find('.topic_title').text().trim()
    const visits = $(wrapper).find('.count_of_visits').text().trim()
    const replies = $(wrapper).find('.count_of_replies').text().trim()
    const activeTime = $(wrapper).find('.last_active_time').text()
    const author = $(wrapper).find('img').attr('title').trim()
    const avatar = $(wrapper).find('img').attr('src').trim()
    topics.push({
      link: `${url}/${link}`,
      title,
      visits,
      replies,
      activeTime,
      author,
      avatar,
      pin: isPin,
      good: isGood,
      id: /\/topic\/(\w+)/.exec(link)[1]
    })
  })

  return { time, topics }
}

router.prefix('/topics')
router.get('/', async ctx => {
  const url = 'https://cnodejs.org'
  const data = await fetchHomePage(url)
  ctx.status = 200
  ctx.type = "json"
  ctx.body = { ...data }
})

router.get('/:id', async ctx => {
  const { id } = ctx.params
  const url = `https://cnodejs.org/topic/${id}`
  const data = await fetchDetail(url)
  ctx.type = 'json'
  ctx.body = { ...data }
})

router.get('/tab/:type', async ctx => {
  const { type } = ctx.params
  const { page } = ctx.query
  const url = `https://cnodejs.org/?tab=${type}&page=${page}`
  const data = await fetchHomePage(url)
  ctx.type = 'json'
  ctx.body = { ...data }
})

module.exports = function (app) {
  app
  .use(router.routes())
  .use(router.allowedMethods())
}
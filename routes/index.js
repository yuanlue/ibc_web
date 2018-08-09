const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    pagename:"home"
  })
})

router.get('/about', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    pagename:"about"
  })
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router

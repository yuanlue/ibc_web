const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    pagename:"home"
  })
})

router.get('/review', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    pagename:"review"
  })
})

router.get('/about', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    pagename:"about"
  })
})
router.get('/service/hotel', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    pagename:"service/hotel"
  })
})
router.get('/about/modal', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    pagename:"about/modal"
  })
})
router.get('/about/best', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    pagename:"about/best"
  })
})
router.get('/service/cruise', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    pagename:"service/cruise"
  })
})
router.get('/service/stays', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    pagename:"service/stay"
  })
})
router.get('/service/group', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    pagename:"service/group"
  })
})
router.get('/service/mice', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    pagename:"service/mice"
  })
})
router.get('/review', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    pagename:"review"
  })
})
router.get('/service', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    pagename:"service"
  })
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router

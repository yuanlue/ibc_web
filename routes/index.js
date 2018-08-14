const router = require('koa-router')()
const auth = async (ctx,next)=>{
  let deviceAgent = ctx.header['user-agent'].toLowerCase()
  let agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/);
  ctx.pagename = 'index'
  if(agentID){
    ctx.pagename = 'index_mobile' 
  }
  await next()
}
router.get('/', auth,async (ctx, next) => {
    await ctx.render(  ctx.pagename, {
        title: 'Hello Koa 2!',
        pagename:"home"
    })
    

})

router.get('/contact',auth, async (ctx, next) => {
  await ctx.render(ctx.pagename, {
    title: 'Hello Koa 2!',
    pagename:"contact"
  })
})

router.get('/service',auth, async (ctx, next) => {
  await ctx.render(ctx.pagename, {
    title: 'Hello Koa 2!',
    pagename:"service"
  })
})

router.get('/review', auth,async (ctx, next) => {
  await ctx.render(ctx.pagename, {
    title: 'Hello Koa 2!',
    pagename:"review"
  })
})

router.get('/about', async (ctx, next) => {
  await ctx.render(ctx.pagename, {
    title: 'Hello Koa 2!',
    pagename:"about"
  })
})
router.get('/service/hotel',async (ctx, next) => {
  await ctx.render(ctx.pagename, {
    title: 'Hello Koa 2!',
    pagename:"service/hotel"
  })
})
router.get('/about/modal', async (ctx, next) => {
  await ctx.render(ctx.pagename, {
    title: 'Hello Koa 2!',
    pagename:"about/modal"
  })
})
router.get('/about/history', async (ctx, next) => {
  await ctx.render(ctx.pagename, {
    title: 'Hello Koa 2!',
    pagename:"about/history"
  })
})
router.get('/about/best', async (ctx, next) => {
  await ctx.render(ctx.pagename, {
    title: 'Hello Koa 2!',
    pagename:"about/best"
  })
})
router.get('/service/cruise', async (ctx, next) => {
  await ctx.render(ctx.pagename, {
    title: 'Hello Koa 2!',
    pagename:"service/cruise"
  })
})
router.get('/service/stays', async (ctx, next) => {
  await ctx.render(ctx.pagename, {
    title: 'Hello Koa 2!',
    pagename:"service/stay"
  })
})
router.get('/service/group',async (ctx, next) => {
  await ctx.render(ctx.pagename, {
    title: 'Hello Koa 2!',
    pagename:"service/group"
  })
})

router.get('/service/mice', async (ctx, next) => {
  await ctx.render(ctx.pagename, {
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

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router

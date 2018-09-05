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
router.get('/',async (ctx, next) => {
    await ctx.render('index', {
        title: 'Hello Koa 2!',
        pagename:"home",
        name:"home"
    })
    

})

router.get('/contact', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    pagename:"contact",
    name:"contact"
  })
})

router.get('/service', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    pagename:"service",
    name:"service"
  })
})

router.get('/review',async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    pagename:"review",
    name:"review"
  })
})

router.get('/about', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    pagename:"about",
    name:"about"
  })
})
router.get('/service/hotel',async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    pagename:"service/hotel",
    name:"service"

  })
})
router.get('/about/modal', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    pagename:"about/modal",
    name:"about"

  })
})
router.get('/about/history', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    pagename:"about/history",
    name:"about"

  })
})
router.get('/about/best', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    pagename:"about/best",
    name:"about"

  })
})
router.get('/about/ibc', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    pagename:"about/ibc",
    name:"about"

  })
})
router.get('/service/cruise', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    pagename:"service/cruise",
    name:"service"

  })
})
router.get('/service/stays', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    pagename:"service/stay",
    name:"service"

  })
})
router.get('/service/group',async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    pagename:"service/group",
    name:"service"

  })
})

router.get('/service/mice', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    pagename:"service/mice",
    name:"service"

  })
})
router.get('/review', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    pagename:"review",
    name:"review"

  })
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router

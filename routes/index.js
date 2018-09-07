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

.get('/contact', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    pagename:"contact",
    name:"contact"
  })
})

.get('/service', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    pagename:"service",
    name:"service"
  })
})

.get('/review',async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    pagename:"review",
    name:"review"
  })
})

.get('/about', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    pagename:"about",
    name:"about"
  })
})
.get('/service/hotel',async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    pagename:"service/hotel",
    name:"service"

  })
})
.get('/about/modal', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    pagename:"about/modal",
    name:"about"

  })
})
.get('/about/history', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    pagename:"about/history",
    name:"about"

  })
})
.get('/about/best', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    pagename:"about/best",
    name:"about"

  })
})
.get('/about/ibc', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    pagename:"about/ibc",
    name:"about"

  })
})
.get('/service/cruise', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    pagename:"service/cruise",
    name:"service"

  })
})
.get('/service/stays', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    pagename:"service/stay",
    name:"service"

  })
})
.get('/service/group',async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    pagename:"service/group",
    name:"service"

  })
})

.get('/service/mice', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    pagename:"service/mice",
    name:"service"

  })
})
.get('/service/tail', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    pagename:"service/tail",
    name:"service"

  })
})
.get('/review', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    pagename:"review",
    name:"review"

  })
})

.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router

const router = require('koa-router')()
const crypto = require('crypto')

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/auth', function (ctx, next) {
  console.log(ctx.query.id)
  let token = '131420'
  let signature = ctx.query.signature 
  let timestamp = ctx.query.timestamp
  let nonce = ctx.query.nonce
  let arr = [token,timestamp,nonce].sort()
  const sha1 = crypto.createHash('sha1')
  sha1.update(arr.join(''))
  const result = sha1.digest('hex')
  if(result == signature){
    ctx.body = ctx.query.echostr
  }
  else{
    ctx.body = { code: -1, msg: "fail"}
  }
  //ctx.body = 'this is a users/bar response'
})

module.exports = router

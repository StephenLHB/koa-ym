const router = require('koa-router')();
const db = require('../db')

router.post('/getMouInfo',async (ctx, next)=>{
    let sql = 'SELECT * FROM t_user'
    let value = {}
    let userInfo = await db.query(sql, value)
    ctx.body = {
        code:200,
        data:userInfo,
        msg:'请求成功！'
    }
})

module.exports = router;


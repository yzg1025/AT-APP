const passport = require('koa-passport')
const localStrategy = require('passport-local')
const UserModel = require('../../dbs/models/users')

passport.use(new localStrategy(async function(username,password,done){
    let where = {
        username
    };
    let result = await UserModel.findOne(where)
    if(result !=null){
       if(result.password === possword){
           return done(null,result)
       } else {
           return done(null, false,'密码错误')
       }
    } else {
        return done(null,false,'用户不存在')
    }
}))

passport.serializeUser(function(user,done){ //序列化
    done(null,user)
})
passport.deserializeUser(function(user,done){ //反序列化
    return done(null,user)
})

module.exports = passport
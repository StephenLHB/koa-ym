const Koa = require("koa");
const json = require("koa-json");
const app = new Koa();
const PORT = 3030;
const routers = require('./router/index');
const bodyParser = require('koa-bodyparser')
const cors = require('koa-cors')

app.use(json());
app.use(bodyParser());
app.use(cors({
    methods:['POST','GET','DELETE','PATCH']
}))

routers(app);
app.listen(PORT,()=> console.log("Server start!"));



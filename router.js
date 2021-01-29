// const Router = require("koa-router");
// let router = new Router();
// router.get("/index",ctx=>{
//     ctx.body = "主页";
// });
// app.use(router.routes());
const newsRouter = require("./routers/newsRouter")
const adminRouter = require("./routers/adminRouter")
module.exports = function (app) {
    app.use(newsRouter.routes());
    app.use(adminRouter.routes());
}
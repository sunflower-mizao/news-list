"use strict";

// const Router = require("koa-router");
// let router = new Router();
// router.get("/index",ctx=>{
//     ctx.body = "主页";
// });
// app.use(router.routes());
var newsRouter = require("./routers/newsRouter");

var adminRouter = require("./routers/adminRouter");

module.exports = function (app) {
  app.use(newsRouter.routes());
  app.use(adminRouter.routes());
};
//# sourceMappingURL=router.dev.js.map

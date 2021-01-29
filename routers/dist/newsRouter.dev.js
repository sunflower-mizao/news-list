"use strict";

var Router = require("koa-router");

var newsController = require("../controller/news");

var router = new Router({
  prefix: "/news"
});
router.get("/", function (ctx) {
  ctx.redirect("/news/index");
});
router.get("/index", newsController.index);
router.get("/detail", newsController.detail);
module.exports = router;
//# sourceMappingURL=newsRouter.dev.js.map

"use strict";

var Router = require("koa-router");

var adminController = require("../controller/admin");

var router = new Router({
  prefix: "/admin"
});
router.get("/", function (ctx) {
  ctx.redirect("/index");
});
router.get("/index", adminController.index);
router.post("/addData", adminController.addData);
router.get("/deleteData", adminController.deleteData);
module.exports = router;
//# sourceMappingURL=adminRouter.dev.js.map

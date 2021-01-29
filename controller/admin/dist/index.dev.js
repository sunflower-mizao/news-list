"use strict";

var adminModel = require("../../service/admin");

module.exports = {
  index: function index(ctx) {
    var p, perPage, newsData, totalCount, pCount;
    return regeneratorRuntime.async(function index$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // ctx.body = "admin的主页";
            p = parseInt(ctx.query.p) || 1;
            perPage = 5;
            _context.next = 4;
            return regeneratorRuntime.awrap(adminModel.getData(p, perPage));

          case 4:
            newsData = _context.sent;
            _context.next = 7;
            return regeneratorRuntime.awrap(adminModel.getTotal());

          case 7:
            totalCount = _context.sent;
            pCount = Math.ceil(totalCount / perPage);
            _context.next = 11;
            return regeneratorRuntime.awrap(ctx.render("./admin/admin.pug", {
              newsData: newsData,
              pCount: pCount,
              p: p
            }));

          case 11:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  addData: function addData(ctx) {
    var res, info;
    return regeneratorRuntime.async(function addData$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(adminModel.addData(ctx.request));

          case 2:
            res = _context2.sent;

            if (res.affectedRows > 0) {
              info = {
                info: "操作成功",
                status: 1
              };
            } else {
              info = {
                info: "操作失败",
                status: 0
              };
            }

            ctx.body = info; // await ctx.render("./admin/admin.pug");

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    });
  },
  deleteData: function deleteData(ctx) {
    var id, rows, resData;
    return regeneratorRuntime.async(function deleteData$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = parseInt(ctx.query.id) || 1;
            _context3.next = 3;
            return regeneratorRuntime.awrap(adminModel.deleteData(id));

          case 3:
            rows = _context3.sent;

            if (rows.affectedRows > 0) {
              resData = {
                info: "删除成功",
                status: 1
              };
            } else {
              info = {
                info: "删除失败",
                status: 0
              };
            }

            ctx.body = resData;

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    });
  }
};
//# sourceMappingURL=index.dev.js.map

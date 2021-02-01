"use strict";

var newsModel = require("../../service/news");

module.exports = {
  index: function index(ctx) {
    var p, perPage, newsData, totalCount, pCount;
    return regeneratorRuntime.async(function index$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // console.log(ctx.query)
            p = parseInt(ctx.query.p) || 1;
            perPage = 5; // let pageCount = Math.ceil(JSON.parse(JSON.stringify(data)).length / perPage);
            // ctx.body = "新闻的主页";

            _context.next = 4;
            return regeneratorRuntime.awrap(newsModel.getData(p, perPage));

          case 4:
            newsData = _context.sent;
            _context.next = 7;
            return regeneratorRuntime.awrap(newsModel.getTotal());

          case 7:
            totalCount = _context.sent;
            pCount = Math.ceil(totalCount / perPage);
            _context.next = 11;
            return regeneratorRuntime.awrap(ctx.render("./news/index.pug", {
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
  detail: function detail(ctx) {
    var id, totalData, detailData;
    return regeneratorRuntime.async(function detail$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // ctx.body = "新闻的详细页";
            id = parseInt(ctx.query.id) || 1;
            _context2.next = 3;
            return regeneratorRuntime.awrap(newsModel.getTotalData());

          case 3:
            totalData = _context2.sent;
            detailData = totalData.filter(function (v) {
              return v.id == id;
            })[0];
            _context2.next = 7;
            return regeneratorRuntime.awrap(ctx.render("./news/detail.pug", {
              detailData: detailData
            }));

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    });
  },
  getMassage: function getMassage(ctx) {
    var data;
    return regeneratorRuntime.async(function getMassage$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return regeneratorRuntime.awrap(newsModel.massageData());

          case 2:
            data = _context3.sent;
            //  console.log(rows);
            ctx.body = data;

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    });
  }
};
//# sourceMappingURL=index.dev.js.map

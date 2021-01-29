"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var mysql2 = require("mysql2");

var connection = mysql2.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'js04'
});
module.exports = {
  getData: function getData(p, perPage) {
    var _ref, _ref2, rows;

    return regeneratorRuntime.async(function getData$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(connection.promise().query("SELECT * FROM news LIMIT ".concat((p - 1) * perPage, ",").concat(perPage)));

          case 2:
            _ref = _context.sent;
            _ref2 = _slicedToArray(_ref, 1);
            rows = _ref2[0];
            return _context.abrupt("return", rows);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  getTotal: function getTotal() {
    var _ref3, _ref4, rows;

    return regeneratorRuntime.async(function getTotal$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(connection.promise().query("SELECT * FROM news"));

          case 2:
            _ref3 = _context2.sent;
            _ref4 = _slicedToArray(_ref3, 1);
            rows = _ref4[0];
            return _context2.abrupt("return", rows.length);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    });
  },
  getTotalData: function getTotalData() {
    var _ref5, _ref6, rows;

    return regeneratorRuntime.async(function getTotalData$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return regeneratorRuntime.awrap(connection.promise().query("SELECT * FROM news"));

          case 2:
            _ref5 = _context3.sent;
            _ref6 = _slicedToArray(_ref5, 1);
            rows = _ref6[0];
            return _context3.abrupt("return", rows);

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    });
  }
};
//# sourceMappingURL=index.dev.js.map

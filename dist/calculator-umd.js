!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t(require("lodash-es")))
    : "function" == typeof define && define.amd
    ? define(["lodash-es"], t)
    : "object" == typeof exports
    ? (exports.calculator = t(require("lodash-es")))
    : (e.calculator = t(e["lodash-es"]));
})(self, function (e) {
  return (() => {
    "use strict";
    var t = {
        330: (e, t, o) => {
          o.r(t),
            o.d(t, {
              division: () => i,
              multiply: () => u,
              subtract: () => c,
              sum: () => n,
            });
          var r = o(970);
          const n = function (e, t) {
            return "".concat((0, r.capitalize)("sum"), " = ").concat(e + t);
          };
          var u = function (e, t) {
              return "multiply = ".concat(e * t);
            },
            i = function (e, t) {
              return "Division is = ".concat(e / t);
            },
            c = function (e, t) {
              return e - t;
            };
        },
        970: (t) => {
          t.exports = e;
        },
      },
      o = {};
    function r(e) {
      if (o[e]) return o[e].exports;
      var n = (o[e] = { exports: {} });
      return t[e](n, n.exports, r), n.exports;
    }
    return (
      (r.d = (e, t) => {
        for (var o in t)
          r.o(t, o) &&
            !r.o(e, o) &&
            Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
      }),
      (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (r.r = (e) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      r(330)
    );
  })();
});

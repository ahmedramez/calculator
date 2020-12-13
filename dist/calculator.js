exports.calculator = (() => {
  "use strict";
  var e = {
      144: (e, r, t) => {
        t.r(r),
          t.d(r, {
            division: () => n,
            multiply: () => l,
            subtract: () => s,
            sum: () => i,
          });
        const o = require("lodash-es"),
          i = (e, r) => `${(0, o.capitalize)("sum")} = ${e + r}`,
          l = (e, r) => "multiply = " + e * r,
          n = (e, r) => "Division is = " + e / r,
          s = (e, r) => e - r;
      },
    },
    r = {};
  function t(o) {
    if (r[o]) return r[o].exports;
    var i = (r[o] = { exports: {} });
    return e[o](i, i.exports, t), i.exports;
  }
  return (
    (t.d = (e, r) => {
      for (var o in r)
        t.o(r, o) &&
          !t.o(e, o) &&
          Object.defineProperty(e, o, { enumerable: !0, get: r[o] });
    }),
    (t.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
    (t.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    t(144)
  );
})();

exports.calculator = (() => {
  "use strict";
  var e = {
      135: (e, r, t) => {
        t.r(r), t.d(r, { multiply: () => u, sum: () => l });
        const o = require("lodash-es"),
          l = (e, r) => `${(0, o.capitalize)("sum")} = ${e + r}`,
          u = (e, r) => "multiply = " + e * r;
      },
    },
    r = {};
  function t(o) {
    if (r[o]) return r[o].exports;
    var l = (r[o] = { exports: {} });
    return e[o](l, l.exports, t), l.exports;
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
    t(135)
  );
})();

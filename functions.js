"use strict";
exports.__esModule = true;
exports.printFormat = exports.format = exports.strigsConcat = void 0;
//syntax name(params with types): return type
function add(a, b) {
    return a + b;
}
exports["default"] = add;
// to default a parameter we can use var :type = default
var strigsConcat = function (str1, str2) {
    return str1 + " " + str2;
};
exports.strigsConcat = strigsConcat;
// functions with multiple accepting types
var format = function (title, param) {
    return title + " " + param;
};
exports.format = format;
var printFormat = function (title, param) {
    console.log(exports.format(title, param));
};
exports.printFormat = printFormat;
// spread operator use
function greeting(introduction) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return introduction + " " + names.join(" ");
}

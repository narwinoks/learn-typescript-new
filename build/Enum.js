"use strict";
console.log("enum data type: ");
// enum 
var Month;
(function (Month) {
    Month[Month["JAN"] = 0] = "JAN";
    Month[Month["FEB"] = 1] = "FEB";
    Month[Month["MARCH"] = 2] = "MARCH";
    Month[Month["APR"] = 3] = "APR";
})(Month || (Month = {}));
// console.log(Month);
// string enum
var Month2;
(function (Month2) {
    Month2["JAN"] = "JAN";
    Month2["FEB"] = "FEB";
    Month2["MARCH"] = "MARCH";
    Month2["MEI"] = "MEI";
    Month2["JUNE"] = "JUNE";
    Month2["JULY"] = "JULY";
})(Month2 || (Month2 = {}));
console.log(Month2);

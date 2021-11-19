"use strict";
exports.__esModule = true;
var ArrayManipulate = /** @class */ (function () {
    function ArrayManipulate() {
    }
    ArrayManipulate.prototype.arrayFindMultiples = function (myArray) {
        var i = 0;
        var arr1 = [];
        myArray.filter(function (num) {
            if (typeof (num) == 'number') {
                num % 5 == 0;
                number[i] = num;
                i++;
            }
        });
        return arr1;
    };
    ArrayManipulate.prototype.arraySeparate = function (myArray) {
        return myArray.filter(function (num) { return isNaN(num); });
    };
    ArrayManipulate.prototype.arraySplit = function (str) {
        var primeNum = [];
        var j = 0;
        str.filter(function (num) {
            var count = 0;
            if (typeof (num) == 'number') {
                for (var i = 2; i < num / 2; i++) {
                    if (num % i == 0) {
                        count++;
                    }
                }
                if (count == 0) {
                    primeNum[j] = num;
                    j++;
                }
            }
        });
        return primeNum;
    };
    ArrayManipulate.prototype.arraySort = function (strArray) {
        strArray.sort();
        strArray.reverse();
        return strArray;
    };
    ArrayManipulate.prototype.arrayReplace = function (myArray) {
        return myArray.map(function (num) { return num % 3 == 0 ? 5 : num; });
    };
    return ArrayManipulate;
}());
var myArray = [12, 90, "hello", "10", "world", 3, 85, 7, 20, 100,];
var strArray = ["a", "aa", "aaa", "aaaaaaaa", "aaa"];
var array = new ArrayManipulate();
console.log(array.arrayFindMultiples(myArray));
console.log(array.arraySeparate(myArray));
console.log(array.arraySplit(myArray));
console.log(array.arraySort(strArray));
console.log(array.arrayReplace(myArray));
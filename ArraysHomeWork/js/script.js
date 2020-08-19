"use strict";

(function () {
    var initialArray = [9, -15, 0, 5, 10, 12, 3, 7, 21];
    console.log(initialArray);

    var sortedToFloorArray = sortToDescending(initialArray);
    console.log(sortedToFloorArray);

    var subArrayFirst = getFirstFiveElements(initialArray);
    console.log(subArrayFirst);

    var subArraySecond = getLastFiveElements(initialArray);
    console.log(subArraySecond);

    var evenNumbersSum = getEvenNumbersSum(initialArray);
    console.log(evenNumbersSum);

    var numbersArray = [];

    for (var i = 1; i <= 100; ++i) {
        numbersArray.push(i);
    }
    console.log(numbersArray);

    var squaresNumbersArray = getSquaresOfNumbers(numbersArray);
    console.log(squaresNumbersArray);

    function sortToDescending(array) {
        return array.sort(function (number1, number2) {
            return number2 - number1;
        });
    }

    function getFirstFiveElements(array) {
        return array.slice(0, 5);
    }

    function getLastFiveElements(array) {
        return array.slice(array.length - 5);
    }

    function getEvenNumbersSum(array) {
        return array.reduce(function (sum, currentValue) {
            var evenNumbersSum = sum;

            if (currentValue % 2 === 0) {
                evenNumbersSum += currentValue;
            }

            return evenNumbersSum;
        }, 0);
    }

    function getSquaresOfNumbers(array) {
        return array.map(function (number) {
            return number * number;
        }).filter(function (number) {
            return number % 2 === 0;
        });
    }
})();
"use strict";

(function () {
    var initialArray = [9, -15, 0, 5, 10, 12, 3, 7, 21];
    console.log(initialArray);

    var sortedToFloorArray = sortToRound(initialArray);
    console.log(sortedToFloorArray);

    var subArrayFirst = getFirstFiveElements(initialArray);
    console.log(subArrayFirst);

    var subArraySecond = getSecondFiveElements(initialArray);
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

    function sortToRound(array) {
        return array.sort(function (number1, number2) {
            return number2 - number1;
        });
    }

    function getFirstFiveElements(array) {
        return array.slice(0, 5);
    }

    function getSecondFiveElements(array) {
        return array.slice(array.length - 5);
    }

    function getEvenNumbersSum(array) {
        return array.reduce(function (sum, currentValue) {
            if (currentValue % 2 === 0) {
                sum += currentValue;
            }

            return sum;
        }, 0);
    }

    function getSquaresOfNumbers(array) {
        var squaresArray = [];
        array.filter(function (number) {
            if (number % 2 === 0) {
                squaresArray.push(number * number);
            }
        }, 0);

        return squaresArray;
    }
})();
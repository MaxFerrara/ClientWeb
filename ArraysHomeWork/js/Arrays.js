(function () {
    console.log("изначальный массив:");
    var array = [9, -15, 0, 5, 10, 12, 3, 7, 21];
    console.log(array);

    array.sort(function (number1, number2) {
        return number2 - number1;
    });

    console.log("массив отсортированный по убыванию:");
    console.log(array);

    var subArrayFirst = array.slice(0, 5);
    console.log("подмассив из первых 5и элементов:");
    console.log(subArrayFirst);

    var subArraySecond = array.slice(array.length - 5);
    console.log("подмассив из последних 5и элементов:");
    console.log(subArraySecond);

    var numbersSum = array.reduce((sum, currentValue) => {
        if (currentValue % 2 === 0) {
            sum += currentValue;
        }

        return sum;
    }, 0);

    console.log("Сумма четных чисел:");
    console.log(numbersSum);
})();

(function () {
    var array1 = [];

    for (var j = 0; j < 100; ++j) {
        array1[j] = j + 1;
    }

    console.log("Массив из 100 чисел:");
    console.log(array1);

    var array2 = array1.map(number => number * number);

    console.log("Массив из квадратов чисел:");
    console.log(array2)
})();
"use strict";

(function () {
    var usa = {
        name: "USA",
        cities: [
            {name: "New York", population: 8405837},
            {name: "Los-Angeles", population: 3990456},
            {name: "Las-Vegas", population: 596424},
            {name: "Miami", population: 463347}
        ]
    };

    var greatBritain = {
        name: "Great Britain",
        cities: [
            {name: "London", population: 8908081},
            {name: "Manchester", population: 545500},
            {name: "Liverpool", population: 513441}
        ]
    };

    var germany = {
        name: "Germany",
        cities: [
            {name: "Berlin", population: 3644826},
            {name: "Hamburg", population: 1841179}
        ]
    };

    var hungary = {
        name: "Hungary",
        cities: [{name: "Budapest", population: 1752286}]
    };

    var countries = [usa, greatBritain, germany, hungary];

    console.log("исходный массив");
    console.log(countries);

    var maxCitiesQuantity = 0;

    for (var i = 0; i < countries.length; ++i) {
        if (maxCitiesQuantity < countries[i].cities.length) {
            maxCitiesQuantity = countries[i].cities.length;
        }
    }

    var maxCitiesQuantityArray = countries.filter(function (element) {
        return element.cities.length === maxCitiesQuantity;
    });

    console.log("массив стран с максимальным количеством городов");
    console.log(maxCitiesQuantityArray);

    var newKeyValueArray = countries.map(function (country) {
        return {
            name: country.name,
            amount: country.cities.reduce(function (total, cities) {
                return total + cities.population;
            }, 0)
        };
    })

    console.log("массив где ключ название страны, а значение - средняя численность населения по объявленым городам");
    console.log(newKeyValueArray);
})();
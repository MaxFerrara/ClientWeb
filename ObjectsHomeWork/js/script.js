"use strict";

(function () {
    var countries = [{
        name: "USA",
        cities: [
            {
                name: "New York",
                population: 8405837
            },
            {
                name: "Los-Angeles",
                population: 3990456
            },
            {
                name: "Las-Vegas",
                population: 596424
            },
            {
                name: "Miami",
                population: 463347
            }
        ]
    }, {
        name: "Great Britain",
        cities: [
            {
                name: "London",
                population: 8908081
            },
            {
                name: "Manchester",
                population: 545500
            },
            {
                name: "Liverpool",
                population: 513441
            }
        ]
    }, {
        name: "Germany",
        cities: [
            {
                name: "Berlin",
                population: 3644826
            },
            {
                name: "Hamburg",
                population: 1841179
            }
        ]
    }, {
        name: "Hungary",
        cities: [{
            name: "Budapest",
            population: 1752286
        }]
    }];

    console.log("исходный массив");
    console.log(countries);

    var maxCitiesQuantityArray = getCountriesWithMaxCitiesQuantity(countries);

    console.log("массив стран с максимальным количеством городов");
    console.log(maxCitiesQuantityArray);

    var newKeyValueArray = getCountryNameKeyPopulationSumValueObject(countries);

    console.log("массив где ключ название страны, а значение - средняя численность населения по объявленым городам");
    console.log(newKeyValueArray);

    function getCountriesWithMaxCitiesQuantity(countries) {
        var maxCitiesQuantity = 0;

        countries.forEach(function (country) {
            if (country.cities.length > maxCitiesQuantity) {
                maxCitiesQuantity = country.cities.length;
            }
        });

        return countries.filter(function (element) {
            return element.cities.length === maxCitiesQuantity;
        });
    }

    function getCountryNameKeyPopulationSumValueObject(countries) {
        var newObject = {};

        countries.forEach(function (country) {
            newObject[country.name] = country.cities.reduce(function (total, current) {
                return total + current.population;
            }, 0)
        });

        return newObject;
    }
})();
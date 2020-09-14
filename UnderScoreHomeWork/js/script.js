"use strict";

(function () {
    var personsList = [{name: "Willy", lastName: "Wonka", age: 35},
        {name: "Peter", lastName: "Parker", age: 26},
        {name: "Anthony", lastName: "Stark", age: 42},
        {name: "Bruce", lastName: "Benner", age: 38},
        {name: "Lara", lastName: "Croft", age: 30},
        {name: "James", lastName: "Howlett", age: 150},
        {name: "Sarah", lastName: "Connor", age: 45},
        {name: "Natasha", lastName: "Romanoff", age: 28},
        {name: "Hermione", lastName: "Granger", age: 21},
        {name: "Jack", lastName: "Sparrow", age: 45}];

    //task 1

    console.log(getAveragePeopleAge(personsList));

    //task 2

    console.log(getPersonsWithAgeBetween20And30(personsList))

    //task 3

    console.log(addFullNameField(personsList))

    function getAveragePeopleAge(list) {
        return _.reduce(list, function (totalAge, personAge) {
            return totalAge + personAge.age;
        }, 0) / list.length;
    }

    function getPersonsWithAgeBetween20And30(list) {
        return _.chain(list)
            .filter(function (person) {
                return person.age >= 20 && person.age <= 30;
            })
            .sortBy('age')
            .value();
    }

    function addFullNameField(list) {
        return _.each(list, function (person) {
            person.fullName = person.name + " " + person.lastName;
        });
    }
})();
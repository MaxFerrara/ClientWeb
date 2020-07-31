"use strict";

$(function () {
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
    var averageAge = getAveragePeopleAge(personsList);
    console.log(averageAge);

    //task 2
    var middleAgePersons = getPersonsWithAgeBetween20And30(personsList);
    console.log(middleAgePersons);

    //task 3
    var personsListWithFullNameField = getPersonsListWithFullNameField(personsList);
    console.log(personsListWithFullNameField);

    function getAveragePeopleAge(list) {
        return _.reduce(list, function (totalAge, currentAge) {
            return totalAge + currentAge.age;
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

    function getPersonsListWithFullNameField(list) {
        return _.map(list, function (person) {
            return {
                name: person.name,
                lastName: person.lastName,
                age: person.age,
                fullName: person.name + " " + person.lastName
            }
        });
    }
});
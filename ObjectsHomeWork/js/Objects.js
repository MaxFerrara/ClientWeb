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
    console.log(countries);

    var countries1 = countries.filter(function (a, b) {
        if (a.cities.length > b.cities.length) {
            return 1;
        }

        if (a.cities.length < b.cities.length) {
            return -1;
        }

        return 0;
    });

    console.log(countries1);

})();
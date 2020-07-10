"use strict";

document.addEventListener("DOMContentLoaded", function () {
    var addConvertButton = document.getElementById("convert_button");
    var addResetButton = document.getElementById("reset_button");

    var temperatureInput = document.getElementById("temperature_input");
    var fahrenheitOutput = document.getElementById("fahrenheit_result");
    var kalvinOutput = document.getElementById("kalvin_result");

    addConvertButton.addEventListener("click", function () {
        var celsiusTemperature = temperatureInput.value;
        var inputNumber = Number(celsiusTemperature);

        if (isNaN(inputNumber) || celsiusTemperature === "") {
            alert("value is not entered or not a number! " + celsiusTemperature);
            temperatureInput.value = "";
        } else {
            fahrenheitOutput.innerText = getFahrenheitFromCelsius(inputNumber);
            kalvinOutput.innerText = getKalvinFromCelsius(inputNumber);
        }
    });

    addResetButton.addEventListener("click", function () {
        temperatureInput.value = "";
        fahrenheitOutput.value = "";
        kalvinOutput.value = "";
    });

    function getFahrenheitFromCelsius(celsiusTemperature) {
        return celsiusTemperature * 1.8 + 32;
    }

    function getKalvinFromCelsius(celsiusTemperature) {
        return celsiusTemperature + 273.15;
    }
});
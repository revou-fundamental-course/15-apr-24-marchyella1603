function convertTemperature() {
    var celsius = document.getElementById("celsiusInput").value;
    var fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("fahrenheitInput").value = fahrenheit;
    // document.getElementById("result").innerHTML = celsius + " Celsius = " + fahrenheit + " Fahrenheit";
    document.getElementById("explanation").innerHTML = celsius + " &#8451; * (9/5) + 32 = " + fahrenheit + " &#8457;";
}

function resetTemperature() {
    document.getElementById("celsiusInput").value = null
    document.getElementById("fahrenheitInput").value = null
}

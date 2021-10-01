function convert(celsius){

    return {
        celsius,
        fahrenheit:celsius * 1.8 + 32,
        kelvin:celsius + 273.15
    }
}
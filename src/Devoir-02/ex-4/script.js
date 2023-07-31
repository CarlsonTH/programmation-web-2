function celsiusEnFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

function moyenneTempAuDessusDuPointDeCongelationEnFahrenheit(...temperaturesCelsius) {
  const temperaturesFahrenheit = temperaturesCelsius
    .filter(temp => temp > 0) // Filtrer les températures au-dessus du point de congélation
    .map(celsiusEnFahrenheit); // Convertir les températures en Fahrenheit

  if (temperaturesFahrenheit.length === 0) {
    return 0; // Retourner 0 si aucune température n'est au-dessus du point de congélation
  }

  const sommeFahrenheit = temperaturesFahrenheit.reduce((acc, temp) => acc + temp, 0);
  const moyenneFahrenheit = sommeFahrenheit / temperaturesFahrenheit.length;
  return moyenneFahrenheit;
}

const moyenne = moyenneTempAuDessusDuPointDeCongelationEnFahrenheit(10, 20, -5, 15, 8);
console.log("Moyenne des températures au-dessus du point de congélation en Fahrenheit :", moyenne);

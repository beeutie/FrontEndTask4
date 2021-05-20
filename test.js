//convertFahrToCelsius (Q1)
function convertFahrToCelsius(fahrenheit) {
  if (fahrenheit === "") {
    console.log(`"" is not a valid number`);
    return;
  }
  if (typeof fahrenheit !== "number" && typeof fahrenheit !== "string") {
    if (Array.isArray(fahrenheit)) {
      console.log(`[${fahrenheit}] is not a valid number but an  array`);
    } else {
      console.log(
        `${JSON.stringify(
          fahrenheit
        )} is not a valid number but a/an  ${typeof fahrenheit}`
      );
    }

    return;
  }

  var fToCel = ((fahrenheit - 32) * 5) / 9;

  console.log(fToCel.toFixed(4));
}

convertFahrToCelsius("");

convertFahrToCelsius("1");
convertFahrToCelsius([1, 2, 3]);
convertFahrToCelsius(false);
convertFahrToCelsius({ temp: 0 });

//Q2
function checkYuGiOh(n) {
  if (isNaN(n)) {
    console.log(`Invalid Parameter: ${n}`);
    return;
  }
  if (n === "") {
    console.log("Invalid Parameter: '' ");
    return;
  }
  for (let i = 1; i <= n; i++) {
    i % 30 == 0
      ? console.log('"' + "Yu-Gi-Oh" + '"')
      : i % 15 == 0
      ? console.log('"' + "Gi-Oh" + '"')
      : i % 10 == 0
      ? console.log('"' + "Yu-Oh" + '"')
      : i % 6 == 0
      ? console.log('"' + "Yu-Gi" + '"')
      : i % 5 == 0
      ? console.log('"' + "Oh" + '"')
      : i % 3 == 0
      ? console.log('"' + "Gi" + '"')
      : i % 2 == 0
      ? console.log('"' + "Yu" + '"')
      : console.log(i);
  }
  return;
}

checkYuGiOh(30);
checkYuGiOh("fizzbuzz is meh");
checkYuGiOh(10);

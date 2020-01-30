//EVEN OR ODD CHALLENGE
/* Challenge Number Odd or Even Day 8 Wed. 1.29.2020 */
/*app.js*/


console.log()

function evenOrOdd(event) {
    event.preventDefault();

    let form = event.target;

    let number = parseFloat(form.inputNumber.value);
    console.log(`number is ${number}`);
    //check to see if input is valid
    let isNumberInteger = true;

    let output = undefined;

    if (number !== Math.floor(number)) {
        isNumberInteger = false;
        output = `The number you entered ${number} is not a valid integer.`
    }
    else {
        if (number % 2 === 0) {
            output = `The number you entered ${number} is EVEN.`
        }
        else {
            output = `The number you entered ${number} is ODD.`
        }
    }

    document.getElementById("output-result").value = output;

}

//let output = evenOrOdd(4.7);
//console.log(output);
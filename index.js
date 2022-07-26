
var input = Number(prompt('Enter the number'));
var output = '';



function romanSymbol(symbol) {
    switch (parseInt(symbol)) {
        case 1:
            return 'I';
        case 4:
            return 'IV';
        case 5:
            return 'V';
        case 9:
            return 'IX';
        case 10:
            return 'X';
        case 40:
            return 'XL';
        case 50:
            return 'L';
        case 90:
            return 'XC';
        case 100:
            return 'C';
        case 400:
            return 'CD';
        case 500:
            return 'D';
        case 900:
            return 'CM';
        case 1000:
            return 'M';
        default:
            return '';
    }
}

function breakNum(input) {

    while (input > 0) {
        while (input >= 1000) {
            console.log(output);
            output += romanSymbol(1000);
            input -= 1000;
        }

        while (input >= 900) {
            console.log(output);
            output += romanSymbol(900);
            input -= 900;
        }

        while (input >= 500) {
            console.log(output);
            output += romanSymbol(500);
            input -= 500;
        }

        while (input >= 400) {
            console.log(output);
            output += romanSymbol(400);
            input -= 400;
        }

        while (input >= 100) {
            console.log(output);
            output += romanSymbol(100);
            input -= 100;
        }

        while (input >= 90) {
            console.log(output);
            output += romanSymbol(90);
            input -= 90;
        }


        while (input >= 50) {
            console.log(output);
            output += romanSymbol(50);
            input -= 50;
        }


        while (input >= 40) {
            console.log(output);
            output += romanSymbol(40);
            input -= 40;
        }

        while (input >= 10) {
            console.log(output);
            output += romanSymbol(10);
            input -= 10;
        }

        while (input >= 9) {
            console.log(output);
            output += romanSymbol(9);
            input -= 9;
        }

        while (input >= 5) {
            console.log(output);
            output += romanSymbol(5);
            input -= 5;
        }

        while (input >= 4) {
            console.log(output);
            output += romanSymbol(4);
            input -= 4;
        }

        while (input >= 1) {
            console.log(output);
            output += romanSymbol(1);
            input -= 1;
        }
    }
}
// debugger;
breakNum(input);
console.log(output);

document.querySelector(".ans").innerHTML = output;
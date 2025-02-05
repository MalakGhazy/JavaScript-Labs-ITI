/*function Reverse ()
{
    var numberOfValues = prompt("How Many Values Do You Want To Enter?");

    while(isNaN(numberOfValues) || numberOfValues <= 0)
    {
        alert("Invalid input. Please enter a positive integer.");
        numberOfValues = prompt("How many values do you want to add?");
    }
    numberOfValues = Number(numberOfValues);

    var myArr=[];

    for (var i = 1; i <= numberOfValues; i++) {
        var value = prompt(`Enter value ${i} of ${numberOfValues}:`);

        while (isNaN(value)) {
            alert("Invalid input. Please enter a number.");
            value = prompt(`Enter value ${i} of ${numberOfValues}:`);
        }
        value=Number(value);
        myArr.push(value);
    }
    return myArr.reverse();
}
var result = Reverse();
alert(`Reversed Array : ${result}`)
*/

function Reverse1() {
    const reversed = [];

    for (var i = arguments.length - 1; i >= 0; i--) {
        reversed.push(arguments[i]);
    }
    return reversed;
}
function Reverse2() {
    const argsArray = Array.from(arguments);
    const reversed = argsArray.reverse();
    return reversed;
}

const Result1 = Reverse1(1,2,3,4,5,6,7);
const Result2 = Reverse2('a','r','r','a','y');


alert(`Reversed values: ${Result1.join(", ")}`);
alert(`Reversed values: ${Result2.join(", ")}`);
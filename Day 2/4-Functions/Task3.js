function Addition ()
{
    var sum=0;

    for (var i = 0; i < arguments.length; i++) {

        sum += Number(arguments[i]);
    }
    alert(`The total sum is: ${sum}`);
}
function checkNumber(promptMessage) {
    var number;
    do {
        number = prompt(promptMessage);
        if (isNaN(number) || Number(number) <= 0) {
            alert("Invalid input. Please enter a positive number.");
        }
    } while (isNaN(number) || Number(number) <= 0);

    return Number(number);
}
num1 = checkNumber("Please, enter the first number:");
num2 = checkNumber("Please, enter the second number:");
num3 = checkNumber("Please, enter the third number:");

Addition(num1,num2,num3);
/*var num1= prompt("Please,Enter The First Number");
while(isNaN(num1) || num1 <= 0)
{
    alert("Invalid input. Please enter a positive integer.");
    var num1= prompt("Please,Enter The First Number");
}

var num2= prompt("Please,Enter The Second Number");
while(isNaN(num2) || num2 <= 0)
{
    alert("Invalid input. Please enter a positive integer.");
    var num2= prompt("Please,Enter The Second Number");
}

var num3= prompt("Please,Enter The Third Number");
while(isNaN(num3) || num3 <= 0)
{
    alert("Invalid input. Please enter a positive integer.");
    var num3= prompt("Please,Enter The Third Number");
}

num1=Number(num1);
num2=Number(num2);
num3=Number(num3);
*/

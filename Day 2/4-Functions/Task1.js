function sum ()
{
    if(arguments.length !==2)
    {
        throw("Number Of Parameter Should Be 2");
    }
    return arguments[0]+arguments[1];
}
var num1= prompt("Please,Enter The First Number");
var num2= prompt("Please,Enter The Second Number");
var num3= prompt("Please,Enter The Third Number");


num1=Number(num1);
num2=Number(num2);
num3=Number(num3);


var result = sum(num1,num2);
alert(`The Sum = ${result}`);
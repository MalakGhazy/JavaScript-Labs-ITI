do{
    var num = prompt("Please,Enter The Value: ");
}while(isNaN(num) || num<=0);
num = Number(num);
var sqr = Math.sqrt(num)
alert(`The Square Root Of The Number = ${sqr.toFixed(2)}`);
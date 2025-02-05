do{
    var radius = prompt("Please,Enter The Value of The Radius : ");
}while(isNaN(radius) || radius<=0);
radius = Number(radius);
var area = Math.PI * Math.pow(radius,2);
alert(`The Area Of The Circle = ${area.toFixed(2)}`);
var myArr=[];
do
{
    var value = prompt("Please,Enter The Value: ")
    if(isNaN(value))
    {
        alert("Please,Enter A Valid Number");
    }
    else
    {
        value = Number(value);
        myArr.push(value);
    }
}while(myArr.length < 3)
var sum = myArr[0] + myArr[1] + myArr[2];
// .join()
var multiplication = myArr[0] * myArr[1] * myArr[2];
var division = myArr[0] / myArr[1] / myArr[2];

document.write(`
    <p> Sum Of The 3 Values : ${myArr[0]} + ${myArr[1]} + ${myArr[2]} = ${sum} </p>
    <p> Multiplication Of The 3 Values : ${myArr[0]} * ${myArr[1]} * ${myArr[2]} = ${multiplication} </p>
    <p> Division Of The 3 Values : ${myArr[0]} / ${myArr[1]} / ${myArr[2]} = ${division} </p>
    `);
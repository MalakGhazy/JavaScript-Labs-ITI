let sum=0;
do{
    let num = prompt("Please Enter The Number: ")
    if(isNaN(num))
    {
        alert("Please Enter A Valid Number: ");
    }
    num=Number(num);
    sum+=num;
    if(sum>100)
    {
        alert("Sum has exceeded 100. Stopping input.");
        break;
    }
}while(sum<=100);
alert(`The total sum of the entered values is: ${sum}`);
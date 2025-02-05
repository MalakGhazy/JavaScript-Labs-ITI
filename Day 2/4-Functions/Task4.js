function getDayByName(dateString)
{
    var date = new Date(dateString);
    if(isNaN(date.getTime()))
    {
        alert("Invalid Date String");
    }
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const dayIndex = date.getDay();

    return days[dayIndex];
}
var input = prompt("Please Enter The Date")
var result = getDayByName(input);
alert(`The Day is : ${result}`);
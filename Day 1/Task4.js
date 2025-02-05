var age;
var Name;
var BirthYear;
do{
    Name = prompt("Please Enter Your Name:");
}while(isFinite(Name) || typeof Name !== "string");
//typeof Name !==String
do{
    BirthYear = prompt("Please Enter Your Birth Year: ");
    BirthYear = Number(BirthYear);
}while(isNaN(BirthYear) || BirthYear>=2010);

const currentYear = new Date().getFullYear();
age = currentYear-BirthYear;

document.write(`
    <p> Name : ${Name}</p>
    <p> Birth Year : ${BirthYear} </p>
    <p> Age : ${age} </p>
    `);
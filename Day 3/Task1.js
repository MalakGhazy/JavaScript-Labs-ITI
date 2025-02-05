var numberOfPersons
do{
    numberOfPersons = prompt("Please,Enter The Number Of Persons");
    if (isNaN(numberOfPersons) || numberOfPersons <= 0) {
        alert("Invalid input. Please enter a positive number.");
    }
}while(isNaN(numberOfPersons) || numberOfPersons <= 0);
numberOfPersons = Number(numberOfPersons);

var users=[];

for(var i=1;i<=numberOfPersons ; i++)
{
    var Name,age;
    var nameRegex = /^[A-Za-z]{4,9}$/; // Name must be 4-9 alphabetic characters
    do{
        Name = prompt(`Enter The Name Of User ${i} : `);
        if (!nameRegex.test(Name)) {
            alert("Invalid name. Please enter letters only.");
        }
    }while(!nameRegex.test(Name));

    var ageRegex  = /^(1[1-9]|[2-5][0-9])$/; // Age must be between 11 and 59
    do{
        age = prompt(`Enter The Age Of User ${i} : `);
                if (!ageRegex.test(age)) {
                    alert("Invalid age. Age must be between 11 and 59.");
                }
    }while (!ageRegex.test(age));
age = Number(age);
users.push({ Name: Name, age: age });
}

// Generate HTML table
var tableHTML = "<table>" +
"<thead>" +
    "<tr>" +
        "<th>Name</th>" +
        "<th>Age</th>" +
    "</tr>" +
"</thead>" +
"<tbody>";

// Add rows for each user
for (var j = 0; j < users.length; j++) {
tableHTML += "<tr>" +
    "<td>" + users[j].Name + "</td>" +
    "<td>" + users[j].age + "</td>" +
"</tr>";
}

tableHTML += "</tbody></table>";

// Display the table in the container
document.getElementById("tableContainer").innerHTML = tableHTML;


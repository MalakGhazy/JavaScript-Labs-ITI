const inputString = prompt("Enter a string to check if it is a palindrome:");
const considerCase = confirm("Do you want to consider the case of the string? (OK for Yes, Cancel for No)");

var normalizedString;
if (considerCase) {
    normalizedString = inputString; // Case-sensitive
} else {
    normalizedString = inputString.toLowerCase(); // Case-insensitive
}
const reversedString = normalizedString.split("").reverse().join("");

if (normalizedString === reversedString) {
    alert(`"${inputString}" is a palindrome!`);
} else {
    alert(`"${inputString}" is NOT a palindrome.`);
}
function EnterNumber(value) {
    const answerField = document.getElementById("Answer");
    answerField.value += value; // Append the clicked number to the input field
}

function EnterOperator(value) {
    const answerField = document.getElementById("Answer");
    answerField.value += value; // Append the clicked operator to the input field
}

function EnterClear() {
    const answerField = document.getElementById("Answer");
    answerField.value = "";
}

function EnterEqual() {
    const answerField = document.getElementById("Answer");
    try {
        // Evaluate the expression in the input field
        const result = eval(answerField.value);
        answerField.value = result;
    } catch (error) {
        answerField.value = "Error";
    }
}
function calculateBMI() {
    var height = parseFloat(document.getElementById("height").value);
    var weight = parseFloat(document.getElementById("weight").value);
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        alert("Please enter valid height and weight.");
        return;
    }
    var bmi = weight / ((height / 100) * (height / 100));
    bmi = bmi.toFixed(2);
    displayResult(bmi);
}
function displayResult(bmi) {
    var resultContainer = document.getElementById("result-container");
    var bmiResult = document.getElementById("bmi-result");
    var bmiCategory = document.getElementById("bmi-category");
    bmiResult.textContent = bmi;
    if (bmi < 18.5) {
        bmiCategory.textContent = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiCategory.textContent = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        bmiCategory.textContent = "Overweight";
    } else {
        bmiCategory.textContent = "Obese";
    }

    resultContainer.style.display = "block";
}
function logout() 
{
    alert("Logged out!");
    window.location.href = 'index.html';
}

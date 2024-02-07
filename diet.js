function calculateBMI() {
    var height = parseFloat(document.getElementById("height").value);
    var weight = parseFloat(document.getElementById("weight").value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        alert("Please enter valid height and weight.");
        return;
    }

    var bmi = weight / ((height / 100) * (height / 100));
    bmi = bmi.toFixed(2);

    // Display calculated BMI
    alert("Your BMI: " + bmi);

    // Set daily calorie goal based on BMI category (arbitrary values for demonstration)
    var calories = 0;

    if (bmi < 18.5) {
        calories = 2000; // Sample value for underweight
    } else if (bmi >= 18.5 && bmi < 24.9) {
        calories = 2500; // Sample value for normal weight
    } else if (bmi >= 25 && bmi < 29.9) {
        calories = 2200; // Sample value for overweight
    } else {
        calories = 1800; // Sample value for obese
    }

    document.getElementById("calories").value = calories;

    // Enable the "Generate Diet Plan" button
    document.getElementById("generateBtn").disabled = false;
}

function generateDietPlan() {
    // Fetch values from the form
    var calories = parseFloat(document.getElementById("calories").value);

    if (isNaN(calories) || calories <= 0) {
        alert("Please enter a valid daily calorie goal.");
        return;
    }

    var dietList = document.getElementById("diet-list");
    dietList.innerHTML = ""; // Clear previous results

    // Sample diet plan based on daily calorie goal (arbitrary values)
    var proteinSources = ["Chicken Breast", "Salmon", "Greek Yogurt", "Tofu", "Eggs", "Cottage Cheese", "Turkey"];
    var carbSources = ["Quinoa", "Sweet Potato", "Brown Rice", "Oats", "Legumes", "Whole Wheat Bread", "Barley"];
    var fatSources = ["Avocado", "Nuts (Almonds, Walnuts)", "Olive Oil", "Chia Seeds", "Fatty Fish", "Flaxseeds", "Coconut Oil"];

    // Calculate portions based on percentage distribution
    var proteinPortion = (calories * 0.3 / 4).toFixed(2); // 30% of calories from protein
    var carbPortion = (calories * 0.5 / 4).toFixed(2);    // 50% of calories from carbohydrates
    var fatPortion = (calories * 0.2 / 9).toFixed(2);     // 20% of calories from fats

    // Display the sample diet plan
    dietList.innerHTML += "<li>Protein: " + proteinPortion + " grams. Sources: " + getRandomItems(proteinSources, 2).join(", ") + "</li>";
    dietList.innerHTML += "<li>Carbohydrates: " + carbPortion + " grams. Sources: " + getRandomItems(carbSources, 2).join(", ") + "</li>";
    dietList.innerHTML += "<li>Fats: " + fatPortion + " grams. Sources: " + getRandomItems(fatSources, 2).join(", ") + "</li>";

    // Display the result container
    document.getElementById("diet-result").style.display = "block";
}

// Helper function to get random items from an array
function getRandomItems(array, count) {
    var shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function logout() {
    // Add your logout logic here
    alert("Logged out!"); // Placeholder alert, replace with actual logout code
    // For example, you might want to redirect the user to the login page
    window.location.href = 'index.html';
}
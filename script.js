document.getElementById('bmiForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get height and weight values from form
    let height = parseFloat(document.getElementById('height').value);
    let weight = parseFloat(document.getElementById('weight').value);
    
    // Calculate BMI
    let bmi = calculateBMI(height, weight);
    
    // Display result
    displayResult(bmi);
  });
  
  function calculateBMI(height, weight) {
    // BMI formula: weight (kg) / (height (m) * height (m))
    let heightMeters = height / 100; // convert height from cm to meters
    return (weight / (heightMeters * heightMeters)).toFixed(1);
  }
  
  function displayResult(bmi) {
    let resultElement = document.getElementById('result');
    resultElement.innerHTML = `Your BMI is: <span>${bmi}</span>`;
  }
  
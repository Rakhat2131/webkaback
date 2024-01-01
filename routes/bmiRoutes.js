// bmiRoutes.js

const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
  const indexPath = path.join(__dirname, '../views/index.html');
  res.sendFile(indexPath);
});

router.post('/bmicalculator', (req, res) => {
  let height = parseFloat(req.body.height);
  let weight = parseFloat(req.body.weight);
  const age = parseInt(req.body.age);
  const gender = req.body.gender;
  const unit = req.body.unit;

  if (unit === 'imperial') {
    // Convert height from feet to meters
    height = height * 0.3048;
    // Convert weight from pounds to kilograms
    weight = weight * 0.453592;
  }

  // BMI calculation logic
  const bmi = weight / Math.pow(height, 2);

  // Interpretation
  const interpretation = getBmiInterpretation(bmi);

  // Send the result.html page with the BMI result
  res.sendFile(path.join(__dirname, '../views/result.html'));
});

function getBmiInterpretation(bmi) {
  // Customize this function based on your criteria for BMI interpretation
  if (bmi < 18.5) {
    return 'Underweight';
  } else if (bmi < 25) {
    return 'Normal weight';
  } else if (bmi < 30) {
    return 'Overweight';
  } else {
    return 'Obese';
  }
}

module.exports = router;

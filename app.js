// app.js

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const bmiRoutes = require('./routes/bmiRoutes');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', bmiRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


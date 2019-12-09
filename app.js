const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 5000;

// Define paths for express/handlebars config
const publicDirectoryPath = path.join(__dirname, './public');
const layoutsPath = path.join(__dirname, '/views/layouts/');
const partialsPath = path.join(__dirname, '/views/partials/');

// Define routes
const indexRoutes = require("./routes/index");

// Setup handlebars engine and views location, use .hbs extension name
app.engine('.hbs', hbs({extname: '.hbs', defaultLayout: 'layout', layoutsDir: layoutsPath, partialsDir: partialsPath }));
app.set('view engine', 'hbs');

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', indexRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
  console.log('go here --> http://localhost:5000/');
});
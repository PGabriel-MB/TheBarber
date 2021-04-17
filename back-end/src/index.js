const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000, () => {
    console.log("Running on 3000!");
});

require('./controllers/authController')(app);
require('./controllers/usersController')(app);

module.exports = app;
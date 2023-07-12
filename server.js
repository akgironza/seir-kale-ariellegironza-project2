// DEPENDENCIES
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');

// EXPRESS APP
const app = express();

// MIDDLEWARE
app.use(morgan('tiny'));
app.use(methodOverride('_method'));
app.use(express.static('public'));

// ROUTES
app.get('/', (req, res) => {
    res.send('hellooo world');
});

// LISTENER
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {console.log(`listening on port ${PORT}`)});

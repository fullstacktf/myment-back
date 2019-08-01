const express = require('express');
const exphbs = require('express-handlebars');

// Database
const db = require('./config/database');

// Test DB
db.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

const app = express();

app.get('/', (req, res) => res.send('INDEX'));

// Myment routes
app.use('/myment', require('./routes/myment'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));

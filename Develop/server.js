
const express = require('express');

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


const app = express();

// Middleware for parsing JSON and urlencoded form data
const PORT = process.env.PORT || 3006;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static('public'));

app.use('/api', apiRoutes);

app.use('/', htmlRoutes);

// start the app
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});
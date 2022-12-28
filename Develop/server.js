const express = require('express');
const htmlRoutes = require('./routes');
const PORT = 3001;
const app = express();
app.use(express.urlencoded( {
    extended: true
}));
app.use(express.json())

app.use(express.static('public'));
app.use(htmlRoutes);
app.listen(PORT , () => {
    console.log('listening on port' , PORT)
});




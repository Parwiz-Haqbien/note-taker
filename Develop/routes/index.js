const express = require('express').Router();

//import the routes for /notes
const notesRouter = require('./notes');

const app = express();

router.get('/notes', notesRouter ) 




module.exports = app
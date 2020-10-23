var express = require('express');
var app = express();
const routes = require('express').Router();
var controller1 = require('../controller/controller1.js');
app.get('/test1', controller1.test1);
module.exports = app;
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var Aeroplane = require("./models/Aeroplane");

require('dotenv').config(); 
const connectionString =  
process.env.MONGO_CON 
mongoose = require('mongoose'); 
mongoose.connect(connectionString,  
{useNewUrlParser: true, 
useUnifiedTopology: true}); 

//Get the default connection 
var db = mongoose.connection; 
 
//Bind connection to error event  
db.on('error', console.error.bind(console, 'MongoDB connection error:')); 
db.once("open", function(){ 
  console.log("Connection to DB succeeded")}); 

  // We can seed the collection if needed on server start 
async function recreateDB(){ 
  // Delete everything 
  await Aeroplane.deleteMany(); 
 
  let instance1 = new Aeroplane({flight_capacity:44,  flight_number:1234, flight_captain:"Gowtham", is_operational:true}); 
  let instance2 = new Aeroplane({flight_capacity:46,  flight_number:1245, flight_captain:"Ranbir", is_operational:true}); 
  let instance3 = new Aeroplane({flight_capacity:48,  flight_number:5678, flight_captain:"Ruthvik", is_operational:true}); 

  instance1.save( function(err,doc) { 
      if(err) return console.error(err); 
      console.log("First object saved") 
  }); 

  instance2.save( function(err,doc) { 
    if(err) return console.error(err); 
    console.log("second object saved") 
}); 

instance3.save( function(err,doc) { 
  if(err) return console.error(err); 
  console.log("third object saved") 
}); 
} 
 
let reseed = true; 
if (reseed) { recreateDB();} 
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var AeroplaneRouter = require('./routes/Aeroplane');
var gridbuildRouter = require('./routes/gridbuild');
var selectorRouter = require('./routes/selector');
var resourceRouter = require('./routes/resource');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Aeroplane', AeroplaneRouter);
app.use('/gridbuild', gridbuildRouter);
app.use('/selector', selectorRouter);
app.use('/resource', resourceRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

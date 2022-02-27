var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var bodyParser = require('body-parser')

var indexRouter = require('./routes/index');
var autoUsersRouter = require('./routes/autoUsers');
var allergensRouter = require('./routes/allergens');
var cookwaresRouter = require('./routes/cookwares');
var difficultiesRouter = require('./routes/difficulties');
var ingredientsRouter = require('./routes/ingredients');
var recipesRouter = require('./routes/recipes');
var usersRouter = require('./routes/users');
var authorization = require('./middleware/authorization');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use("./public", express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', indexRouter)
app.use('/autoUsers', autoUsersRouter);
app.use('/allergens', allergensRouter);
app.use('/cookwares', cookwaresRouter);
app.use('/difficulties', difficultiesRouter);
app.use('/ingredients', ingredientsRouter);
app.use('/recipes',authorization, recipesRouter);
app.use('/users', usersRouter)

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

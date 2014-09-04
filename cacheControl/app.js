'use strict';

// App
var express = require( 'express' );
var routes = require( './routes' );
var path = require( 'path' );

// Express
var logger = require( 'morgan' );
var methodOverride = require( 'method-override' );
var session = require( 'express-session' );
var bodyParser = require( 'body-parser' );
var errorHandler = require( 'errorhandler' );
var expressHbs = require( 'express3-handlebars' );

var app = express();

// * Environment
app.set( 'port', process.env.PORT || 3000 );
app.set( 'views', path.join( __dirname, 'views' );
app.engine( 'hbs', expressJbs( { extname: 'hbs', defaultLayout: 'main.hbs' } ) );
app.set( 'view engine', 'hbs' );
app.use( logger( 'dev' ) );
app.use( methodOverride() );
app.use( session( { resave: true, saveUninitialized: true, secret: 'q2873fhaiurb' } ) );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( express.static( path.join( __dirname, 'public' ) ) );

// Development ONLY
if( 'development' === app.get( 'env' ) ) {
    app.use( errorHandler() );
}

module.exports = app;

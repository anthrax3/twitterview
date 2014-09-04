var express = require('express');
var router = express.Router();

// File Scraping
var Alexa = require( '../Alexa' );

var fs = require( 'fs' );
var request = require( 'request' );
var cheerio = require( 'cheerio' );

// Top 100 Result data holder
var topListings = [];

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get( '/getListings', function( req, res ) {
    var targetBaseURL = 'http://www.alexa.com/topsites';

    fetchURL( url, function( error, data ) {
        if( error ) {
            throw new Error( error );
        } else {
            // Call Alexa to parse
            var A = new Alexa({
                markup: data
            });
        }
    });
});

function fetchURL( url, callback ) {
    if( !url ) {
        throw new Error( 'You must provide a URL to fetch, data supplied: ' + url );
    } else {
        request( url, function( error, response, markup ) {
            if( error ) {
                callback( error );
            } else {
                callback( null, markup );
            }
        });
    }
});

module.exports = router;

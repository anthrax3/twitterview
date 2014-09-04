'use strict';

var fs = require( 'fs' );
var cheerio = require( 'cheerio' );

var Alexa = module.exports = function Alexa( options ) {
    this.options = options || {};
    this.results = [];
    
    this.$ = cheerio.load( options.markup ); // the DOM
    this.count = 'div.count'; // div.count contains the rank
    this.site-listing = 'li.site-listing'; // li.site-listing contains each item
    this.desc-paragraph = 'p.desc-paragraph'; // p.desc-paragraph contains the link to each item

    this.alexa-pagination = 'div.alexa-pagination'; // div.alexa-pagination contains the subsequent pages
    this.pagination-page = 'a.pagination-page'; // a.pagination-page links with each subsequent page

    this.json = {
        title: '',
        listing: {}
    };

    $('li.site-listing').filter( function() {
        
    });
};

Alexa.prototype.parseListings = function parseListings( i, el ) {
    
};

Alexa.prototype.getListings = function getListings( options, done ) {
    var parsed = [];
    var data = this.$( '.site-listing' ).map( parseListings( iterator, element ) );
};

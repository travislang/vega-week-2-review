// REQUIRES
const express = require( 'express' );
const bodyParser = require( 'body-parser' );

//GLOBALS
const app = express( );
const PORT = 5000;

// USES
app.use( express.static( 'server/public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );








// start up server
app.listen( PORT, function( ){
    console.log( 'server is listening on port', PORT );
})
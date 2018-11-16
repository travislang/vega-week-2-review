// REQUIRES
const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const messages = require( './modules/routes/messages.route.js' );

//GLOBALS
const app = express( );
const PORT = 5000;

// USES
app.use( express.static( 'server/public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( '/messages', messages );








// start up server
app.listen( PORT, function( ){
    console.log( 'server is listening on port', PORT );
})// end server start
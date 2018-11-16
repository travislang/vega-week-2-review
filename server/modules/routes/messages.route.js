const express = require( 'express' );
const router = express.Router( );

const messagesModule = require( '../messages.module.js' );

router.get( '/', function( req, res ){
    console.log( `GET Hit`);
    res.send( messagesModule.messages );
})// end GET

router.post( '/', ( req, res ) => {
    console.log( 'POST Hit:', req.body );
    res.send( messagesModule.addMessage( req.body ) );
})// end POST


module.exports = router;
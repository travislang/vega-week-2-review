const express = require( 'express' );
const router = express.Router( );

let messages = [];

router.get( '/', function( req, res ){
    console.log( `GET Hit`);
    res.send( messages );
})// end GET

router.post( '/', ( req, res ) => {
    console.log( `POST Hit: ${ req.body }`);
    res.send( 'ka-kah' );
})// end POST


module.exports = router;
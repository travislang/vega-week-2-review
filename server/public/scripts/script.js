$( document ).ready( readyNow );

function readyNow( ){
    console.log( 'jquery is loaded' );
    $( '#submitMessage' ).on( 'click', sendMessage );
    $( '#refreshButton' ).on( 'click', getMessages );
    


}// end readyNow

class Message{
    constructor( sender, text ){
        this.sender = sender;
        this.text = text;
    }// end constructor
}// end Message class

function sendMessage( ){
    console.log('in sendMessages function');
    // get user input
    if( $('#usernameIn' ).val( ) === '' || $( '#message' ).val( ) === '' ){
        alert( 'no empties allowed' );
    }// end has empties
    else{ 
    // if no empties
    // create a message
        const messageToSend = new Message( $( '#usernameIn' ).val( ), $( '#message' ).val( ) );
        console.log( `sending: ${messageToSend}`)
    // send message to server via POST
    // update messages on DOM
    getMessages( );
    }// end no empties
}// end sendMessage

function getMessages( ){
    console.log('in getMessages fn');
    // make an ajax req
    // loop through response
    // display each message in #messagesOut ul el
}// end getMessages


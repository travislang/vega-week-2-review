$( document ).ready( readyNow );

function readyNow( ){
    console.log( 'jquery is loaded' );
    $( '#submitMessage' ).on( 'click', sendMessage );
    $( '#refreshButton' ).on( 'click', getMessages );
    $( '#messagesOut' ).on( 'click', '.senderClick', getSender );
    getMessages( );
    


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
    if( $('#usernameIn' ).val( ) === '' || $( '#newMessageIn' ).val( ) === '' ){
        alert( 'no empties allowed' );
    }// end has empties
    else{ 
    // if no empties
    // create a message
        const messageToSend = new Message( $( '#usernameIn' ).val( ), $( '#newMessageIn' ).val( ) );
        console.log( 'sending:', messageToSend)
    // send message to server via POST
        $.ajax({
            method: 'POST',
            url: '/messages',
            data: messageToSend
        }).then( function( res ){
            console.log( `back from POST with: ${res}`);
            // empty message field -- keep username value
            $('#newMessageIn').val( '' );
            // update messages on DOM
            getMessages()
        })
    }// end no empties
}// end sendMessage

function getMessages( ){
    console.log('in getMessages fn');
    // make an ajax req
    $.ajax({
        method: 'GET',
        url: '/messages'
    }).then( function( res ){
        console.log( 'back from GET with:', res );
        // empty output el
            let el = $( '#messagesOut' );
            el.empty( );
        // loop through response
        for( let message of res ){
            // display each message in #messagesOut ul el
            el.append( `<li>${message.text}  <strong><span class="senderClick">${message.sender}</span></strong></li>`)
        }
    })
}// end getMessages

function getSender( ){
    console.log( 'in getSender', $( this ).text( ) );
}// end getSender
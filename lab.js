// my mind hasn't been in CS recently.
// XMLHtmlRequest: an object to make request.
// JS doesn't have a func to open / write file => must use HTTP get then.

function parse() {
        // step 1: create a new instance
        request = new XMLHttpRequest(); // why isn't this var?

        // step 2: open HTTP request
        request.open("GET", "data.json", true); // last arg: ?async?
        // can you open a remote url http://..../messages.json?
                // NO: no

        // step 3: set up way to manage the response
        request.onreadystatechange = parseData; // whut is this?

        // step 4: execute the request. (ALTHOUGH IT READS "SEND" - "fire away"
        request.send();

}

function parseData(){
        if (request.readyState == 4 && request.status == 200) { // good respnse
                alert(request.responseText);
                converted = JSON.parse(request.responseText);
                messagesDiv = document.getElementById('messages')
                for (i = 0; i < converted.length; i++) {
                        messagesDiv.innerHTML += '<p>' + converted.[i]['content']
                }
                // how to get the key if we don't know the JSON? Just spit the first elem out!
        }
        else if (request.readyState == 4 && request.status != 200) { // bad
                alert('Hacked by Khuyen')
        else
                alert('NOT YET')
//        console.log('The ready state is ' + request.readyState);
}
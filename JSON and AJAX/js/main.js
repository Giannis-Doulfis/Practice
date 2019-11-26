//Web browsers have a built-in tool named XMLHttpRequest, and this tool will do the heavy lifting for us.
//This tool will establish a connection with the url that we specify and then it lets us send or receive data.
//So, let's create a new instance of this tool:

var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json'); 
//first argument to say what we want to do; send or receive data; GET is for receiving and POST is for sending
//Now we have gone to this url and got the JSON data from it. Now we need to actually do something with that data
ourRequest.onload = function(){ //this is what should happen once the data is loaded
    // console.log(ourRequest.responseText); //accessing the data that we have downloaded, and with console.log we see the JSON data at our web browser's console
};
//we have now defined our request, and the last step is to send it
ourRequest.send();


// LEFT AT MIN 12.40
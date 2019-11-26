//Object, properties with values, seperated by commas
//To access a property: myCat.name
var myCat = { 
    "name": "Meowsalot", 
    "species": "cat",
    "favFood": "tuna"
}

//Array, a comma-seperated list
//To access items of an array: myFavColors[0]
var myFavColors = ["blue", "green", "purple"];

//Combination of the two, an array of objects:
var thePets = [
    {
        "name": "Meowsalot", 
        "species": "cat",
        "favFood": "tuna"
    }, 
    {
        "name": "Barky", 
        "species": "dog",
        "favFood": "carrots"
    }
]
//This is JSON, objects and arrays nested inside each other
//JSON is a format for sending, receiving and storing data
//To access data from the above array: thePets[1].favFood. This will return the value "carrots"

//Note: This is not realistic. In the real world, you won't have JSON data just sitting in your Javascript file like this.
//In the rreal world, you 'll probably have to load JSON from a dynamic source, like another ulr that is powered by a database.
//Our goal now is to use Javascript and AJAX to visit the url https://learnwebcode.github.io/json-example/animals-1.json, 
//and download the JSON data it contains, to use it on our index.html

//continue with studying the main.js
<template>
    
</template>

<script>

import axios from "axios";

// Create a new request object
var request = new XMLHttpRequest();

// Initialize a request
request.open('get', 'https://api.github.com/users/cvs393')
// Send it
request.send()

request.readyState // => 4 (We've waited enough)
request.response // => "{whatever}"

function dumpResponse() {
  // `this` will refer to the `XMLHTTPRequest` object that executes this function
  console.log(this.responseText);
}
var request = new XMLHttpRequest();
// Set the event handler
request.onload = dumpResponse;
// Initialize the request
request.open('get', 'https://api.github.com/users/cvs393/repos', true)
// Fire away!
request.send()
function printRepos() {
    var project = JSON.parse(this.responseText);
    
    console.log(project.name + project.description + "HELLOOOOOOOOO"); 
  //return{
   //   projects: []
 // } 
}
var request = new XMLHttpRequest();
request.onload = printRepos;
request.open('get', 'https://api.github.com/users/cvs393/repos', true)
request.send()
// => Courtney has 8 public repositories!
//const API_URL = 'https://www.api.github.com/users/cvs393';

export default {
    
   /* data: function()
    {
        return {
            projects: []
        }
    },*/

    mounted()
    {
        axios.get('https://www.api.github.com/users/cvs393')
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.error(error)
        })
    }
}
</script>

<style scoped>

</style>
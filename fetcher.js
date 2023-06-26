// require the request and fs modules
const request = require('request');
const fs = require('fs');

// variables to use as as arguments
const URL = process.argv[2];
const PATH = process.argv[3];

request(URL, (error, response, body) => {
  console.log('error:', error); // Print the error if one occured
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  fs.writeFile(PATH, body, err => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ./index.html`);
    }
  });
});




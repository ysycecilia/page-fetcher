const args = process.argv.slice(2);
const request = require("request");
const fs = require('fs');

const URL = args[0];
const path = args[1];
//let content = " ";

request(URL, (err, res, body) => {
  //if URL is Invalid, throw error
  if (err) {
    console.log(err);
  }
  
  fs.writeFile(`${path}`, body, (err) => {
    //if file path is Invalid, throw error
    if (err) console.log(err);
    else console.log(`Downloaded and saved ${res.headers["content-length"]} bytes to ${path}`);
  });
});

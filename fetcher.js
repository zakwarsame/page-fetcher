const args = process.argv.slice(2, 4)
const request = require('request')
const url = args[0];
const filePath = args[1]

const fs = require('fs')

request(url, (error, response, body) => {
    if(error){
        return
    }
    fs.writeFile(`${filePath}`, body, err => {
        if (err) {
          return console.log(err)
        }
        console.log(`Downloaded and saved ${body.length} bytes to index.html`); 
      })
});
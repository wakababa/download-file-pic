var fs = require('fs'),
  request = require('request');

var request = require('request').defaults({ encoding: null });

var cvs = require("./csvjson.json")
let keys = Object.keys(cvs[0]).slice(1)

for (let j = 0; j < 1; j++) {
  for (let i = 0; i < keys.length; i++) {
  
    if(cvs[j][keys[i]] !== ""){
    request.get(`${cvs[j][keys[i]]}`, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        data = "data:" + response.headers["content-type"] + ";base64," + Buffer.from(body).toString("base64");
        fs.writeFileSync(`${__dirname}/source/${cvs[j].Name}_${keys[i]}`, data)
      }
    });
  }
  }
  console.log(j)
}

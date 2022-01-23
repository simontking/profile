// jshint esversion:8

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const client = require("@mailchimp/mailchimp_marketing");

client.setConfig({
  apiKey: "9dd821789c5c3176d347bdd14b8f6ff4-us6",
  server: "us6",
});

async function run(first, last, email) {
  const response = await client.lists.addListMember("1234200fb1", {
    email_address: email,
    status: "subscribed",
    merge_fields: {
      FNAME: first,
      LNAME: last
    }
  });
  return response;
}

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){
  var first = req.body.first;
  var last = req.body.last;
  var email = req.body.email;
  console.log(first, last, email);
  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: first,
          LNAME: last
        }
      }
    ]
  };
  const jsonData = JSON.stringify(data);
  const url = "https://us6.api.mailchimp.com/3.0/lists/1234200fb1";
  const options = {
      method: "POST",
      auth:"simon1:9dd821789c5c3176d347bdd14b8f6ff4-us6"
    };

  const request = https.request(url, options, function(response){
    console.log(response.statusCode);
    if (response.statusCode === 200) {
      res.sendFile(__dirname + "/success.html");
    } else {
      res.sendFile(__dirname + "/failure.html");
    }
  });

  request.write(jsonData);
  console.log(request);
  request.end();
});

app.listen(3000, function(){
  console.log("running on port 3000");
});


// API KEY
// 9dd821789c5c3176d347bdd14b8f6ff4-us6
// list // ID: 1234200fb1

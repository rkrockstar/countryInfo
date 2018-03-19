"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());



app.post('https://restcountries.eu/rest/v2/name/{countryName}', function(req, res) {

    var countryDetail = {}

    countryDetail.countryName = req.params.countryName;
    

  //  res.send(countryDetail); // send json response
     return res.json({
    speech: countryDetail,
    displayText: countryDetail,
    source: "countryInfo-sample"
  });
});

app.listen(443);



//var options = {
 // host: 'https://restcountries.eu/rest/v2/name',
 // port: 443,
 // path: '/{countryName}',
 // method: 'POST'
//};


//restService.post(options, function(req, res) {
 // var speech =
 //   req.body.result &&
 //   req.body.result.parameters &&
 //   req.body.result.parameters.echoText
 //     ? req.body.result.parameters.echoText
 //     : "Seems like some problem. Speak again.";
	  
 
	
 // return res.json({
 //   speech: speech,
 //   displayText: speech,
 //   source: "webhook-echo-sample"
 // });
//});



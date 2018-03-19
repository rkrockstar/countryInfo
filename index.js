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


//restService.post('/countryInfo', function(req, res) {
 //var speech = req.params.countryName
 app.post('https://restcountries.eu/rest/v2/name', function(req, res) {

  var speech = req.param('countryName');
   //countryDetail.countryName = req.params.countryName;
    

  res.send(speech); // send json response
    return res.json({
    speech: speech,
   displayText: speech,
    source: "countryInfo-sample"
  });
});
    

	  
 
	
  //return res.json({
//    speech: speech,
  //  displayText: speech,
//    source: "webhook-echo-sample"
//  });
//});
    
    //var options = {
 // host: 'https://restcountries.eu/rest/v2/name',
 // port: 443,
 // path: '/{countryName}',
 // method: 'POST'
//};

//app.post('https://restcountries.eu/rest/v2/name/{countryName}', function(req, res) {

 //   var countryDetail = {}

//   countryDetail.countryName = req.params.countryName;
    

  //  res.send(countryDetail); // send json response
 //    return res.json({
 //   speech: countryDetail,
 //   displayText: countryDetail,
 //   source: "countryInfo-sample"
 // });
//});

//app.listen(443);


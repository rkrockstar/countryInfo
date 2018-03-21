'use strict';

const express = require('express');
const bodyParser = require('body-parser');
var request = require('request');
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.post('/country', function(req, res) {
    if(req.body.result.parameters.text == "country"){
        request.get({
              url: 'https://restcountries.eu/rest/v2/name/{country}';
              //headers: {
            //    'Authorization': 'Token'
            //  }
            }, function(error, response, body) {
                var info = JSON.parse(body);
                console.log(info);
                var resp = "Country Info :" + info.name;
           //     resp += ",Capital is : " +  info.capital;
            //    resp += ",Population is : " +  info.population;
                //var reqy = req.body.result && req.body.result.parameters && req.body.result.parameters.echoText ? req.body.result.parameters.echoText : "Seems like some problem. Speak again."
                res.json({
                    speech: resp,
                    displayText: resp,
                    source: 'countryInfo-sample'
            });
        });
    }
    
});



app.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});



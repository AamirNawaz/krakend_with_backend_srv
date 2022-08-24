


var h  = {"alg":"PS256", "typ":"unknown", "kid":"5FZT6gTLM5wEoSGn3eW0Q8zCPsQ"};
var i  = 'ClientId';   
var s  = 'ClientId';   
var a  = 'bla';
var signOptions = {
 issuer:  i,
 header:  h,
 subject:  s,
 audience:  a,
 expiresIn:  "1h"
};

var token = jwt.sign(payload, privateKEY, signOptions);


*********************************************
:::::::::::::::::::Out put:::::::::::::::::
*********************************************

{
  "alg": "PS256",
  "typ": "unknown",
  "kid": "5FZT6gTLM5wEoSGn3eW0Q8zCPsQ"
}







var token = jwt.sign({key_name:'key_value'}, "secret_key", {
  expiresIn: '365d'	// expires in 365 days
});

// other accepted formats
expiresIn('2 days')  // 172800000
expiresIn('1d')      // 86400000
expiresIn('10h')     // 36000000
expiresIn('2.5 hrs') // 9000000
expiresIn('2h')      // 7200000
expiresIn('1m')      // 60000
expiresIn('5s')      // 5000
expiresIn('1y')      // 31557600000
expiresIn('100')     // 100
expiresIn('-3 days') // -259200000
expiresIn('-1h')     // -3600000
expiresIn('-200')    // -200
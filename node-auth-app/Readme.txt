
*********************************************************/
******************* Node backend service installation
/*********************************************************/

go to the root Directory of "node-auth-app"

step1:
 > npm install

 step2:
 > npm run dev

 Now you can Listening on port: 4500

Login Api:

http://localhost:4500/api/login
 Method: POST:
 {
	"email": "aamir@gmail.com",
	"password": "aamir123"
}
 
OUT Response:
success case:
{
    "exp": 1661318410,
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InNpbTIifQ.eyJlbWFpbCI6InNoYWhpZEBjb2RlZm9yZ2Vlay5jb20iLCJpYXQiOjE2NjEzMTQ4MTAsImV4cCI6MTY2MTMxNDgzNX0.MN2HaksEMjUAeQLbWA7f_fytbqzo-DVUNI6EdZrrHFA",
    "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InNpbTIifQ.eyJlbWFpbCI6InNoYWhpZEBjb2RlZm9yZ2Vlay5jb20iLCJpYXQiOjE2NjEzMTQ4MTAsImV4cCI6MTY2MTQwMTIxMH0.InpOCG2XE6PlYGKYtiwOQ9YK1y68no00mQ4K11trs88"
}

Failur case:
{
    {
    "success": false,
    "message": "Email is required"
    }

    or 
    {
    "success": false,
    "message": "password is required"
}
}



Validate token by providing access_token in the Header ( Authorization : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InNpbTIifQ)
Method : POST
 http://localhost:4500/api/validate_token

OUT Response:
success case:
{
    "message": "I'm secured"
}

Failur Case:
Token Expired


Getting New toke with passing Refresh token in the body.
Method : POST
http://localhost:4500/api/token

{
    "refreshToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InNpbTIifQ.eyJlbWFpbCI6InNoYWhpZEBjb2RlZm9yZ2Vlay5jb20iLCJpYXQiOjE2NjEyNDI0NDIsImV4cCI6MTY2MTMyODg0Mn0.OxliriRF6HiqfZoooiiY-WLgjO0m2KxQb2ei9tWGAjI"
}

out put:
Failur case:
{
    "status": 404,
    "message": "The refresh token expired or not found in object."
}

success case:

{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InNpbTIifQ.eyJlbWFpbCI6InNoYWhpZEBjb2RlZm9yZ2Vlay5jb20iLCJpYXQiOjE2NjEzMTUwNTMsImV4cCI6MTY2MTMxNTA3OH0.zujb6SBuuJ0DVwTBprQ0TUx2GNRkulyeaFDRCC8B39s"
}






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
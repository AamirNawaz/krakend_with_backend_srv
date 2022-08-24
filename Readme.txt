/*********************************************************/
*******************  krakend installation  guide
/*********************************************************/


krakend_api_gateway :

Notice:-
First copy your host address of backend from node app  and replace it inside krakend
"backend": [
        {
          "url_pattern": "/api/validate_token",
          "method": "GET",        
          "host": [
            "http://yourbackendhostIpAddress:4500"
          ]
        }
      ]

Replace your host with node app running on host address with this  >>>> "http://yourbackendhostIpAddress:4500" <<< inside krakend in all backend endpoints.



> Directory contains krakend json config file.
> Listening on port 8080
> Health status url : http://localhost:8080/__status

krakend krakend_api_gateway installation guide:
 > you must have docker installated in your local system etc.
 
 command to build docker image
 > Run command on the root of krakend_api_gateway Directory

step1:
> docker build . -t krakend_api_gateway_v1

step2:
> docker run -it -p "8080:8080" krakend_api_gateway_v1


Now access the krakend end point with http://localhost:8080/




/*********************************************************/
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
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



/******************************************************************************/
/****************** For Login with roles ***********************************/
/***************************************************************************/

URL :http://localhost:8080/login
Method: Post

Request Body: Raw > json
{
	"email": "aamir@gmail.com",
	"password": "aamir",
    "roles":["photographer"]
}

output:

{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InNpbTIifQ.eyJlbWFpbCI6ImFhbWlyQGdtYWlsLmNvbSIsInJvbGVzIjpbInBob3RvZ3JhcGhlciJdLCJpYXQiOjE2NjIwMTAyNTIsImV4cCI6MTY2MjAxMDMxMn0.HwEhvIhQsnWLN0D_QHCyYKmfSjViZa0E5IJCXSsUPho",
    "exp": 1662013852,
    "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InNpbTIifQ.eyJlbWFpbCI6ImFhbWlyQGdtYWlsLmNvbSIsInJvbGVzIjpbInBob3RvZ3JhcGhlciJdLCJpYXQiOjE2NjIwMTAyNTIsImV4cCI6MTY2MjA5NjY1Mn0.cyV1IK9OS_-aLS4iZ36rL6tB4aauEabTBWmeJDuD9LI"
}


If we decode the url in jwt.io site it will gives us the above result for Authorization we must pass role inside payload:

JWT Header: 

{
  "alg": "HS256",
  "typ": "JWT",
  "kid": "sim2"
}
JWT Playload:
{
  "email": "aamir@gmail.com",
  "roles": [
    "photographer"
  ],
  "iat": 1662010252,
  "exp": 1662010312
}
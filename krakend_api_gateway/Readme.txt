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
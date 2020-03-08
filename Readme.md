#Weather API

Node JS AWS Lamda function to call the open weather api

As this is single call this was created directly in AWS Lamda

To access the endpoints :

Pass in the query parameter city and country code

https://c79v09314e.execute-api.us-east-1.amazonaws.com/dev/weather?city=chennai&&country_code=IN

Exceptions are handled at the API Gateway level for graceful failures

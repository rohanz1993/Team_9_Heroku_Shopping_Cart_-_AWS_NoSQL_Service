In past week, we discussed above the entire design of our project and the idea of the app which we want to implement. Also I have researched about heroku and how to build a connection between heroku and aws. The entire research is in my file Research_about_Heroku.

FrontEnd: On heroku we will have our nodejs application deployed

Backend: On aws account we will have S3 BUCKETS and our database

We will create a nodejs application, and push it on git. This application we will put on heroku, which will then act as our web server.
On the backend we will have AWS where our database will be present. Now in this we will create multiple instances and have our database on each instance. All these instances will be behind a load balancer.
The web server will then everytime make call to this load balancer from which the healthy and available node will respond with updated data. The call which we make from web server to load balancer will be REST call.

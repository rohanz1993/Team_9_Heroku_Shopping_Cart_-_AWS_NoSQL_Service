@author- George  Zachariah
Work Done - Researched on Couch DB for week 1
includes the key points of couch DB as well as spinning it on AWS instance 

For Week 1-
Finding out the existing DB's for a scalable shopping cart and finally selecting couch DB.
Showing its key features, its support for ACID as well as its partition tolerence.
Other features include its ability to perform replication, conflict resolution and MVCC.
Also mentioned is the steps to have couch DB on an AWS instance
The ultimate goal would be to have aws instances with COUCH DB which could be connected to the heroku Front end.
We also research over the application interaction capabilities of couch DB and the support it provides,eg -HTTP requests.
Another striking feature is its open source components, one of which is the Open SSL for providing cyptographic capabilities.
For our no sql shopping cart, our couch DB database will allow all CRUD operations via rest API.
All the data will be stored in document format and peer to peer model will be implemented.
couchDB will allow versioning of data to resolve conflict issues 
The instances will also be sclaed according to the load which the systems recieve.
CouchDB will only be storing the inventory data and display it on the shopping cart to the user.
Following will be the features therefore reflected on the ultimate model
1- acid sementics via MVCC
2-Offline access with eventual sync
3-Document Storage expressed in Json format
4-Eventual consistency in a CA system.
5-Map reduce and indexing

For Week 2
Created API doc for cancel order, checkout and confirm order 
Completed sample queries for couchDB which include creating sample documents and running map and reduce queries

For Week 3
Created The sample UI wireframe for the different pages of the shopping cart
Created flowchart to demonstrate the flow of operations in the project
Created the NodeJs Backend for Retrive Orders and cancel Orders(couch DB) 

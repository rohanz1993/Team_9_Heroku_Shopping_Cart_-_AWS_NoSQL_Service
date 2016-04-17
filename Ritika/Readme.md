README
------------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------------------

This readme contains the journal entry and progress on the team project


------------------------------------------------------------------------------------------------------------------------------------------------------------
Week 1:
------------------------------------------------------------------------------------------------------------------------------------------------------------

In the first week, all the team members worked on the research and design part of the project.

I researched about CouchDB database, it's properties and how we can use it in our project. 

I also worked on the extra credit assignment to see how CouchDB is installed on Amazon Linux AMI and how to query CouchDB using curl command.

CouchDB can be accessed using REST API calls like:
	• POST - creates a new record
	• GET - reads records
	• PUT - updates a record
	• DELETE - deletes a record

Basic CouchDB queries:

• Create a DB
	$ curl -X PUT http://127.0.0.1:5984/database_name
Verify if DB is created using: $ curl -X GET http://127.0.0.1:5984/_all_dbs
• Deleting a DB
	$ curl -X DELETE http://127.0.0.1:5984/database_name
• Creating a document
	$ curl -X PUT http://127.0.0.1:5984/database name/"id" -d ' { document} '
• Retrieving a document:
	$ curl -X GET http://127.0.0.1:5984/my_database/001
• Updating a document:
	curl -X PUT http://127.0.0.1:5984/database_name/document_id/ -d '{ "field" : "value", "_rev" : "revision id" }'
• Deleting a Document:
	curl -X DELETE http://127.0.0.1:5984/database_name/database_id?_rev

Installing CouchDB 1.5.1 on Amazon Linux AMI:

1. Enable the EPEL Repo 
2. Next install the deps and tools.
3. Get the SpiderMonkey JS Engine and build it.
4. Build CouchDB.
5. Prepare the CouchDB installation.
	a. Make a couchdb user.
	b. Set the file ownerships.
6. Prepare the init scripts.
	a. Link the init script and copy the log rotate script to /etc. 
7. Edit /usr/local/etc/default/couchdb to turn off the auto respawn.
8. Finally reboot (or just start couchdb from the script) and confirm its running with curl http://127.0.0.1:5984/

How to replicate a CouchDB database:

https://wiki.apache.org/couchdb/How_to_replicate_a_database

------------------------------------------------------------------------------------------------------------------------------------------------------------

Week 2

------------------------------------------------------------------------------------------------------------------------------------------------------------

Followed the steps for installing couchDB and installed it on AWS Linux AMI

Documented the installation steps of couchDB

Updated API document 
Created a detailed API description (type of request, request parameters/body, server responses) for the following APIs:
viewProfile() --> called when a customer tries to view his profile
updateProfile() --> called when a customer tries to update his profile
viewHistory() --> called when a customer tries to view his order history

Updated the presentation for extra credits for CURL commands, limitations and compaction.

Created a sample database and executed the queries for CouchDB on AWS Linux AMI

Executed and documented the queries for CouchDB

Performed replication on 2 databases on CouchDB on AWS EC2 

Configured couchDB for external access using the following steps:
1. Set security group to allow requests to port 5984
2. change bind address of httpd of couchDB to 0.0.0.0
3. run-->iptables -L -n -v
should show:
[ec2-user@ip-172-31-38-41 ~]$ sudo iptables -L -n -v
Chain INPUT (policy ACCEPT 106 packets, 7520 bytes)
 pkts bytes target     prot opt in     out     source               destination
    0     0 ACCEPT     tcp  --  *      *       0.0.0.0/0            0.0.0.0/0            tcp dpt:5984
4. if it does not show try this:
iptables -A INPUT -p tcp --dport 5984 -j ACCEPT

Created the final PDF for extra credit demonstration submission

Tasks for next week:
Create database design for the Bookstore
Create end to end login and signup module which will include deploying the application on Heroku and connect it to the database on AWS

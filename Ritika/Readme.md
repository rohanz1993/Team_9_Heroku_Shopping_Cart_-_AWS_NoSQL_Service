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

Installed and documented the steps for installing CouchDB on Linux AMI

Updated API document for the following APIs:
viewProfile()
updateProfile()
viewHistory()
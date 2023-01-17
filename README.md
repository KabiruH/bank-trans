# Project Title
Bank of Flatiron records

# Description
This is a react application that displays the current records that have been accrued in the bank of Flatiron

# Getting Started
To view this records, you need to install json server and have NPM installed.

The link is deployed in
https://bank-trans.vercel.app/


To run the code npm install -g json-server
Running the tests

Lets begin by running this command on a different terminal, in the same folder to get the backend started: 

json-server --watch db.json

Test your server by visiting this route in the browser: http://localhost:3000/transactions

Next run the following command in another terminal, in the same folder
        NPM start 
This will start the react application

## Core Deliverables

As a user, I should be able to:

- See a table of the transactions.
- Fill out and submit the form to add a new transaction. This should add the new
  transaction to the table **as well as post the new transaction to the backend
  API for persistence**.
- Filter transactions by typing into the search bar. Only transactions with a
  description matching the search term should be shown in the transactions
  table.


# Versioning
We use SemVer for versioning. For the versions available, see the tags on this repository.

# Authors
Kabiru H.

# License
ISC
Refactored code from previous Prime assessment challenge to use Angular instead of jQuery.

Description

Instructions
Create a new table in a new database to track animals in our zoo. It should include an auto-incrementing primary key, a column for the type of animal as a string or varchar, and a number to keep track of how many of this animal type we have.

A database.txt should be included with your project which will include the name of the database as well as the names of the tables and columns as well as the commands you used to create your database and tables.

Create a Node/Express server app. This app should actively listen for requests on port 3000. It should be able to serve back our static files (index.html, any js or css files) as well as handle incoming requests to any routes. Include a routing module to use with your Ajax requests.

Our application needs to be able to input new animals and display current animals. This will require Ajax requests to send data to the server and Ajax requests to retrieve data from the server.

When a new kind of animal is entered from the user, use the randomNumber function below to get a number between 1 and 100. Use this number as your number of animals value in the database for this entry.

Random number function: function randomNumber(min, max){ return Math.floor(Math.random() * (1 + max - min) + min); } This function could be wrapped in a custom module (hint hint).

The app should display all animals listed in our database when it loads and after each animal group is added.

Turn In Assessment

Turn in your assessment through primeacademy.io/student. Include a link to your Github repo with your code. Remember to include a text file with your table create SQL.

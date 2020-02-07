var express = require ('express');
var mysql = require ('mysql');
var app = express();
const Handlebars = require("handlebars");
var exphbs  = require('express-handlebars');
var path= require('path');
const fs = require('fs');


var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "qwerty212342467",
    database: "todos_db"
  });

  // Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;


  connection.connect();

  app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
 

//ROIUTES

app.get("/", function(req, res)  {
console.log(req.body);
connection.query('Select * from todos ', function(err,results){
    if (err) throw err ;
    res.json(results);
    console.log("hello")

}

)})

  
  app.get("/todos", function(req, res) {
    res.sendFile(path.join(__dirname, "todos.html"));
  });
  
  // Displays all characters
  app.get("/api/todos", function(req, res) {
    console.log(req.body);
    connection.query('Select * from todos ', function(err,results){
        if (err) throw err ;
        res.json(results);
       
    
    }
    

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  


//   function render(templatePath, contextObj) {
//     console.log(templatePath, contextObj);
//     const templateStr = fs.readFileSync(templatePath).toString();
//     let result = templateStr;
//     for (let key in contextObj) {
//       console.log(key, contextObj[key]);
//       result = result.replace(`{{${key}}}`, contextObj[key]);
//     }
//     return result;
//   }
//   module.exports = { render };
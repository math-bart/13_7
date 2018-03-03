var fs = require('fs');
var colors = require('colors');

fs.readdir('./', 'utf-8', function(err, data) {
  var fileContent = data;
  var filepath = "mynewfile.txt";
  fs.writeFile(filepath, fileContent, function(err) {
    if (err) throw err;
    console.log("The file was succesfully saved!");
  }); 
});
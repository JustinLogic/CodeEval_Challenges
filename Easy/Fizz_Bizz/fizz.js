var input = process.argv[2];
var fs = require("fs");
var lines;
fs.readFile(input, "utf8", function(error, data){
   if(error)
      throw error;
   lines = data.trim().split("\n");
   var line;
   for(var i = 0; i < lines.length; i++){
      line = lines[i].split(/\s+/);
      fizzbizz(line);
   }
   //console.log(lines);
});

function fizzbizz(line){
   var output = "";
   for(var i = 1; i <= line[2]; i++){
      if(i % line[0] == 0 && i % line[1] == 0)
         output = output + "FB ";
      else if(i % line[0] == 0)
         output = output + "F ";
      else if(i % line [1] == 0)
         output = output + "B ";
      else
         output = output + i + " ";
   }
   console.log(output.trim());
}


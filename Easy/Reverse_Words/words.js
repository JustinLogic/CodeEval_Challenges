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
      reverse(line);
   }
});

function reverse(line){
   var output = "";
   for(var i = line.length - 1; i >=0; i--){
      output = output + line[i] + " ";
   }
   console.log(output.trim());
}

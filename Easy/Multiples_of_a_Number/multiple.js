var input = process.argv[2];
var fs = require("fs");
var lines;
fs.readFile(input, "utf8", function(error, data){
   if(error)
      throw error;
   lines = data.trim().split("\n");
   var line;
   for(var i = 0; i < lines.length; i++){
      line = lines[i].split(",");
      multiple(parseInt(line[0]), parseInt(line[1]));
   }
});

function multiple(x, n){
   var m = n;
   while(m < x){
      m = m + n;
   }
      console.log(m);
}

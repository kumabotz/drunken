(function() {
  // declaring variables
  var fs, reptxt, filedata, out;

  out = 'out.txt';

  // requiring files
  fs = require('fs');
  reptxt = require('./drunk');

  // reading file
  fs.readFile(process.argv[2], 'utf8', function(err, data) {
    if (err) {
      console.error("Could not open file: %s", err);
      process.exit(1);
    }

    // calling replacement function
    filedata = reptxt.drunk(data, process.argv[3], process.argv[4]);

    // writing replaced text into a new file
    fs.writeFile(out, filedata, function(err) {
      if (err) {
        console.error("Error saving file %s", err);
        process.exit(1);
      }
      console.log("%s file saved!", out);
    });
  });
}).call(this)

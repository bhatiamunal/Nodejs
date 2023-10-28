/*
Write a Program to Count Words Lines and Total Size of a text file. Store the
counted words, total size in a new file.
*/
const fs = require('fs');

fs.readFile('./Users/test.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data.length);
});

var stats = fs.statSync("./Users/test.txt")
var fileSizeInBytes = stats.size;
// Convert the file size to megabytes (optional)
var fileSizeInMegabytes = fileSizeInBytes / (1024*1024);
console.log(fileSizeInMegabytes);
/**
 * 6. Write a program in to list and print all files and folders in current directory.
 * 
 */
const testFolder = './Users/';
fs.readdir(testFolder, (err, files) => {
  var c1=0;
  files.forEach(file => {
    c1 = c1+1;
    console.log("Files "+c1+" "+file);
  });
});
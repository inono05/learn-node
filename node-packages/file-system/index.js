//help to work with files and directories
const fs = require('fs');
const path = require('path');

//create a subdirectory
const folder = path.join(__dirname, 'data');
if (!fs.existsSync(folder)){
    fs.mkdirSync(folder);
    console.log("Directory created");
}

//create a file and write data in the folder created
const file = path.join(folder, 'data.txt');
if(!fs.existsSync(file)){
    fs.writeFileSync(file, 'Hello World from Node.js');
    console.log("File created");
}

//read a file
const readFile = fs.readFileSync(file, 'utf8');
console.log("File content: " + readFile);

//add new lines to a file
fs.appendFileSync(file, "\nNew line added to the file");
console.log("New line added to the file");
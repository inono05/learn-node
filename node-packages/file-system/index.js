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


//managing files in the async way
const asyncFile = path.join(__dirname, 'data', 'async.txt');
if (!fs.existsSync(asyncFile)){
    fs.writeFile(asyncFile, 'I thing i am going to write from Node.js', (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}

 fs.readFile(asyncFile, 'utf8', (err, data) => {
    if (err) throw err;
    console.log("File content: ", data);
    fs.appendFile(asyncFile, "\nNode.js is cool", (err) => {
        if (err) throw err;
        console.log('The file has been updated and saved!');
    })
});

//delete a file
fs.unlink(file, (err) => {
    if (err) throw err;
    console.log("File deleted");
})
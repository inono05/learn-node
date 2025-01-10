console.log("Node module wrapper");
console.log("Wrapper dirname: " + __dirname);
console.log("Wrapper filename: " + __filename);

module.exports.greet = function(name) {
    console.log(`Hello ${name}`);
}
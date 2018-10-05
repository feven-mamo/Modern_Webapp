const http = require("http");
const fs = require("fs");

//Creates new file and write
const file = fs.createWriteStream('./myfile.file');
for(let i=0; i<= 1e6; i++) {
file.write('Modern Web Application(MWA) is awesome.Modern Web Application(MWA) is awesome. Modern Web Application(MWA) is awesome. Modern Web Application(MWA) is awesome.');
}
file.end();

//ReadFile
http.createServer((request, response) => {
    fs.readFile('myfile.file', function (err, data) {
        response.writeHead(200, { 'Content-Type': 'text' });
        response.write(data);
        response.end();
    });
}).listen(3000);

//readFileSync
http.createServer((request, response) => {
    let data = fs.readFileSync('myfile.file');
    response.end(data);
}).listen(3000);

//readStream
http.createServer((request, response) => {
    fs.createReadStream('myfile.file').pipe(response);
}).listen(3000);

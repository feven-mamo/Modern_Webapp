const axios = require('axios');
const express = require('express');
const { from } = require('rxjs');
const { map } = require('rxjs/operators');
var app = express();
var result;
const port = 4000;
app.set('trust proxy', true);
app.set('strict routing', true);
app.enable('case sensetive routing');
app.set('x-powered-by', false);


// Using Promise===1
app.get('/users', (req, resp) => {
    axios.get('http://jsonplaceholder.typicode.com/users/')
        .then((data) => { result = data.data; })
        .catch((err) => console.log(err));
    resp.status(200);
    resp.set('Content-Type', 'application/json');
    resp.send(result);
    resp.end();
});

// Using Observable====2===uncomment the following
// app.get('/users', (req, resp) => {
//     from(axios.get('http://jsonplaceholder.typicode.com/users/'))
//         .pipe(
//             map((response) => response.data)
//         )
//         .subscribe((data) => {
//             resp.status(200);
//             resp.set('Content-Type', 'application/json');
//             resp.send(data);
//             resp.end();
//         })
// })

// Using async/await====3====uncomment the following
// async function consume() {
//     try {
//         result = await axios.get('http://jsonplaceholder.typicode.com/users/');
//         result = result.data;
//     } catch (error) {
//         console.log(error);
//     }
// }
// app.get('/users', (req, resp) => {
//     consume();
//     resp.status(200);
//     resp.set('Content-Type', 'application/json');
//     resp.send(result);
//     resp.end();
// })

app.listen(port, () => console.log('Server is running at %s', port));

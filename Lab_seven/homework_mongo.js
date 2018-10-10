var MongoClient = require("mongodb").MongoClient;
var express = require("express");
const crypto = require('crypto');

const app = express();
var port = 2000;
const url = 'mongodb://127.0.0.1:27017/';
var data;
var messg;

MongoClient.connect(url, function (error, dbclient) {
    if (error) throw error;
    data = dbclient.db('homeworkDB');
    data.collection('homework7').findOne({}, function (error, doc) {
        if (error) throw error;
        messg = doc.message;
        dbclient.close();
    });
});
app.get("/api/secret", (req, res) => {
    var mykey = crypto.createDecipher('aes256', 'asaadsaad');
    var output = mykey.update(messg, 'hex', 'utf8');
    output += mykey.final('utf8');
    res.end(output);
});
app.listen(port, () => { console.log(`Listening to port ${port}`) });



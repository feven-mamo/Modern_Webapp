const { Resolver } = require('dns');
const { from } = require('rxjs');
const resolver = new Resolver();
var domainname = 'www.mum.edu';

//Resolving DNS using callback function===1

console.log("Start");
const dnsResolve = function (domainName) {

    resolver.resolve4(domainName, (err, addresses) => {
        console.log("IP:", addresses);
    });
};
var domainname = 'www.mum.edu';
dnsResolve(domainname);
console.log("End");

//Resolving DNS using Promise===2

console.log("Start");

function dnsResolvePromise(domainName) {
    return new Promise((resolve, reject) => {
        console.log("Resolving IP address...")
        resolver.resolve4(domainName, (err, addresses) => {
            resolve(addresses);
            reject(new Error("Cannot resolve the dns"));
        });
    });
}
dnsResolvePromise(domainname)
    .then((result) => console.log("IP:", result))
    .catch(error => console.log('Error', error.message));
console.log("End");

//Resolving DNS using Promise===asynch/wait==3
async function displayIP() {
    try {
        const ipaddress = await dnsResolvePromise(domainname);
        console.log("IP:", ipaddress);
    }
    catch (error) {
        console.log("Error", error.message);
    }
}
displayIP();

//Resolving DNS using Observable===4

console.log("Start");
function ShowIpObservable() {
    from(dnsResolvePromise(domainname))
        .subscribe((data) => console.log(data));
}
ShowIpObservable();
console.log("End");

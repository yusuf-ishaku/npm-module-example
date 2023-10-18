const {send} = require("./request");
const {read} = require("./response")

function request(url, data){
    send(url, data);
    return read();
}

const encryptedData = request("https://www.google.com");

console.log(encryptedData);
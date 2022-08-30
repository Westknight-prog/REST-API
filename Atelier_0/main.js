const Contact = require("./contact.js");

let contact =  new Contact("Samuel Houle","Samuel@hotmail.com","123-456-1234");

console.log(contact);
const Http = require('http');
const server = Http.createServer((req,res)=>{
 console.log(req);
});

const PORT = process.env.POST || 5000;
server.listen(PORT,()=>console.log(`Server running at ${PORT}`));
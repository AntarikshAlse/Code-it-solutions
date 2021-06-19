require('dotenv').config();
const http = require ('http');
const app = require ('./app'); //import to use execute app in this file.


        const host = process.env.HOST;
        const port = process.env.PORT;

       const server = http.createServer(app);
       server.listen(port,()=>{ console.log(console.log(`my server get started on ${host} : ${port}`)) }); // port is declared in .env file

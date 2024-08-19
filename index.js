const express= require('express')
const https=require('https')
const fs=require('fs')
const path=require('path')
const app=express();

app.use((req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} ${req.url} from ${req.ip} - ${req.hostname}`);
    next();
});

app.use('/',(req,res,next)=>{
res.send('hello I am SSL Server !')
})

const options={
    key:fs.readFileSync(path.join(__dirname,'./tls.key')),
    cert:fs.readFileSync(path.join(__dirname,'./tls.crt'))
}

const sslServer=https.createServer(options,app);
sslServer.listen(1337,()=>{
console.log('Secure server is listening on port 1337')
})
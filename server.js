const http = require('http');

const PORT = 8000;

const getRandomInt=(min, max) =>{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const server = http.createServer((req,res)=>{
    
    const {url,method} = req;
    if(url === "/api/v1/colors" && method === "GET"){
        let obj = {
            red: getRandomInt(0,256),
            green: getRandomInt(0,256),
            blue: getRandomInt(0,256),
        };
        res.writeHead(200,{"Content-type":"application/json","Access-Control-Allow-Origin":"*"});
        res.end(JSON.stringify(obj));
    }else{
        res.writeHead(404);
        res.end("Not Found");
    }
    
    
    // res.end(`url: ${url} | method: ${method}`);
})


server.listen(PORT,()=>{
    console.log("server started");
})
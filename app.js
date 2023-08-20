const http = require('http');
const fs = require('fs')


const server = http.createServer((req, res) => {
    // console.log(req.url , req.method, req.headers)
    const url  = req.url 
    const method  = req.method
    if (url === '/') {
      fs.readFile('message.txt',{encoding : 'utf-8'}, (err, data) => {
        if (err) {console.log(err);}
        console.log(`data fetched , ${data}`);
        res.write("<html>");
        res.write("<head><title>Read and write from File</title></head>");
        res.write("<body>");
        res.write(`<h3>Previous Data : ${data} </h3>`);
          res.write(
          `<form action='/message' method='POST'>
          <input type='text' name='message'><button type ='submit'>send</button></form>`
        );
        res.write('</body>') ;
        res.write("</html>");
        return res.end();
      });
      }

    if (url === '/message' && method === 'POST'){
      const body = []
        req.on('data', (chunk) => {
          // console.log(chunk)
            body.push(chunk) ;
        }) ;
       req.on('end', ()=>{
          const parsedBody = Buffer.concat(body).toString();
          console.log(parsedBody) ;
          const message = parsedBody.split('=')[1] ;
          fs.writeFile('message.txt', message, (err) => {
            res.statusCode = 302
            res.setHeader('Location', '/')
            return res.end()
          }) 
        })  
    }
})

server.listen(4000)
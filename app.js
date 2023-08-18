const http = require('http');


const server = http.createServer((req, res) => {
    // console.log(req.url , req.method, req.headers)
    const url  = req.url 
    if (url === '/'){
        res.write("<html>");
        res.write("<head><title>Enter Message</title></head>");
        res.write(
          "<body><form action='/message method='POST'><input type='text' name='message'><button type ='submit'>send</button></form></body>"
        );
        res.write("</html>");
        return res.end();
    }
    if (url === '/home'){
        res.write("<html>");
        res.write("<head><title>Home Page</title></head>");
        res.write("<body><h1>Welcome Home</h1></body>");
        res.write("</html>");
        return res.end();
    }
    if (url === "/about") {
      res.write("<html>");
      res.write("<head><title>About Us Page</title></head>");
      res.write("<body><h1>Welcome to About us page</h1></body>");
      res.write("</html>");
      return res.end();
    }
    if (url === "/node") {
      res.write("<html>");
      res.write("<head><title>node Page</title></head>");
      res.write("<body><h1>welcome to my node js project</h1></body>");
      res.write("</html>");
      return res.end();
    }
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>My First page</title></head>')
    res.write('<body><h1>Hello from Node js server</h1></body>')
    res.write('</html>')
    res.end()
})

server.listen(3000)
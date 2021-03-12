const http = require("http");
const fs = require("fs");
const path = require("path");

let crearServidor = (puerto) => {
http.createServer((request, response)=> {
 let filePath = request.url;
console.log("Request for " + filePath + " received.");
        if (filePath == '/') {
          filePath = '/html/html/landingPage.html';
        }
        else if (filePath == '/landingPage.html') {
          filePath = '/html/html/landingPage.html';
        }
        else if (filePath == '/carrito.html') {
          filePath = '/html/html/carrito.html';
        }
        else if (filePath == '/iniciarsesion.html') {
          filePath = '/html/html/iniciarsesion.html';
        }
        else if (filePath == '/register.html') {
          filePath = '/html/html/register.html';
        }
        else if (filePath == '/restaurante1.html') {
          filePath = '/html/html/restaurante1.html';
        }
        else if (filePath == '/restaurante2.html') {
          filePath = '/html/html/restaurante2.html';
        }
        else if (filePath == '/restaurante2.html') {
          filePath = '/html/html/restaurante2.html';
        }
         else if (filePath == '/restaurante2.html') {
          filePath = '/html/html/restaurante2.html';
        }
        
        if (filePath == '/css/MyCss.css') {
          filePath = '/html/css/MyCss.css';
        }
        if (filePath == '/img/platos.jpg') {
          filePath = '/html/img/platos.jpg';
        }
        
        if (filePath == '/img/pizza.jpg') {
          filePath = '/html/img/pizza.jpg';
        }
        
        if (filePath == '/img/hamburguer.jpg') {
          filePath = '/html/img/hamburguer.jpg';
        }
        
        if (filePath == '/img/platos1.jpg') {
          filePath = '/html/img/platos1.jpg';
        }
         if (filePath == '/img/platos3.jpg') {
          filePath = '/html/img/platos3.jpg';
        }
         if (filePath == '/img/pinchos1.jpg') {
          filePath = '/html/img/pinchos1.jpg';
        }
        if (filePath == '/img/pinchos2.jpg') {
          filePath = '/html/img/pinchos2.jpg';
        }
        if (filePath == '/img/restaurant.jpg') {
          filePath = '/html/img/restaurant.jpg';
        }
        

        

        filePath = __dirname+filePath;
        fileExtension = path.extname(filePath);
        switch (fileExtension) {
            case ".css":
                contentType = "text/css";
            break;
            case ".js":
                contentType = "text/javascript";
            break;
             case ".img":
                contentType = 'image/jpg';
                 break;
            case ".html":
                contentType = "text/html";
            default:
                contentType = "text/html";
        }
        fs.readFile(filePath,{encoding:"UTF-8"}, (error,content)=>{
            if(!error) {
                response.writeHead(200, {"Content-Type": contentType});
                response.write(content);
                response.end();
            } else {
            response.writeHead(404, {"Content-Type": "text/html"});
            response.write("error file");
            response.end();
            }
        })

    }).listen(puerto);    
};

crearServidor(8888);
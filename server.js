const http = require ('http');

// cria servidor
const srv = http.createServer ((req,res) => {
	res.end('chegou aqui') // quando escrevermos algumas coisas no res.end ele entende que já pode responder 
	
});

srv.listen (8080);

// http://localhost:8080  



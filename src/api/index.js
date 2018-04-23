const http = require('http')
// const createServer = require('http.createServer');
const app = require('./server');

const server = http.createServer(app)

server.listen(3000, () => {
	console.log('Server listening on port 3000')
})


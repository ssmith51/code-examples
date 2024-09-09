const http = require('http');
const app = require('./src/app');

const PORT = process.env.PORT || 3000;
const server = http.createServer(app.callback());

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = server;
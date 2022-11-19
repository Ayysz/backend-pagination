import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import routes from './routes/index.js';

const app = express();

const PORT = process.env.PORT || 3030

app.use(cors());
app.use(express.json());
app.use(logger('dev'));


// routes
app.use(routes);

// create http server
import http from 'http';

const server = http.createServer(app);

server.listen(PORT);
server.on('error', err => console.log(`Error on : ${err}`));
server.on('listening', onListening);

function onListening() {
    const addr = server.address();
    console.log(`Listening on http://localhost:${addr.port}`);
};

export default server;

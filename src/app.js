import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import process from 'process';
const containerId = process.env.HOSTNAME;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.get('/', (req, res) => {
  res.send(`App is Running ok, containerId:${containerId}`);
});

app.get('/api', (req, res) => {
  res.send('App is Running API -> ok');
});

process.on('SIGINT', function onSigint() {
  app.shutdown();
});

process.on('SIGTERM', function onSigterm() {
  app.shutdown();
});

app.shutdown = function () {
  process.exit();
};

export default app;

const express = require('express');
const path = require('path');
const morgan = require('morgan');
const router = require('./routes');
const cors = require('cors');
// const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());
app.use('/api', router);

app.use('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.listen(process.env.PORT || port, () => {
  console.log('listening on port ', process.env.PORT || port);
});

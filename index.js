const express = require('express');
const cors = require('cors');
const router = require('./routes/index');

const port = 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);
app.use(express.static('static'))

app.listen(port, () => {
    console.log(`Server running on post:${port}`);
  });



'use strict'

let express = require('express');
let app = express();

let cors = require('cors');
app.use(cors());

let thisModule = require('./build/app');
app.use('/', thisModule);

app.listen(3000, () => {
    console.log('Server start on port 3000!');
});

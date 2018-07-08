'use strict'

let express = require('express');
let app = express();

let cors = require('cors');
app.use(cors());

// app.use('/', (req, res) => {
//     res.send('Server started.');
// });
//
// app.use('/t1', (req, res) => {
//     res.send('11111111');
// });
//
// app.use('/t2', (req, res) => {
//     res.send('22222222');
// });

let thisModule = require('./build/app');
app.use('/', thisModule);

app.listen(3000, () => {
    console.log('Server start on port 3000!');
});
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { dbURI, port } = require('./config/environment');



const router = require('./config/routes');

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

mongoose.connect(dbURI);
// app.use(express.static(`${__dirname}/public`));

app.use(bodyParser.json());
app.use('/api', router);
// app.get('/*', (req, res) => res.sendFile(`${__dirname}/public/index.html`));



app.listen(port, () => console.log(`Running on port ${port}`));

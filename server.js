const _ = require('lodash');
const express = require('express');
const sdk = require('sc2-sdk');
const bodyParser = require('body-parser');
const mongoClient = require('./helpers/mongo_utils')
const router = require('./routes');
var ValidationError = require('mongoose/lib/error/validation')
const sc2 = sdk.Initialize({ app: '' });
var cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/', router);
const port = process.env.PORT || 4000;
const server = app.listen(port, () => console.log(`Listening on ${port}`));



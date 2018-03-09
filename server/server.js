const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors');
const pc = require('./product-controller');
let PORT = 3002;
const app = express();

app.use(bodyParser.json());
app.use(cors());

// app.get('/api/products', pc.get_products);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
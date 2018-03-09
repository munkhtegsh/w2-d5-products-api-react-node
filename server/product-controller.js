
const data = require('./data');

module.exports = {
    get_products: (req, res, next) => {
        res.status(200).send(data.products);
    }
}


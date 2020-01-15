const { insertProduct, getProducts, deleteProduct, updateProduct } = require('../providers/productProviders');

async function uploadProduct(req, res, next) {
    try {
        const product = {
            name: req.body.name,
            owner: req.body.owner,
            description: req.body.description,
            price: req.body.price,
            type: req.body.type,
            img: req.body.img
        }
        const newProduct = await insertProduct(product);
        res.send(newProduct);
    } catch (err) {
        console.log(err);
        res.send({ err: err.msg() })
    }
}

async function retrieveProducts(req, res) {
    try {
        const parsedSkipParam = Number(req.params.skip)
        const products = await getProducts(parsedSkipParam);
        res.send(products);
    } catch (err) {
        console.log(err);
        res.send({ err: err.msg() })
    }
}

async function removeProduct(req, res) {
    try {
        const products = await deleteProduct(req.params.id);
        res.send(products);
    } catch (err) {
        console.log(err);
        res.send({ err: err.msg() })
    }
}

async function modifyProduct(req, res) {
    try {
        const id = req.params.id;
        const product = {
            name: req.body.name,
            owner: req.body.owner,
            description: req.body.description,
            price: req.body.price,
            type: req.body.type,
            img: req.body.img
        }
        const newProduct = await updateProduct(id, product);
        res.send(newProduct);
    } catch (err) {
        console.log(err);
        res.send({ err: err.msg() })
    }
}

module.exports = { uploadProduct, retrieveProducts, removeProduct, modifyProduct };
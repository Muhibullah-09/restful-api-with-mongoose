const Products = require('../models/productModel');
const productControl = {
    getProducts: async (req, res) => {
        const products = await Products.find()
        res.json(products);
    },
    createProduct: (req, res) => {
        const { product_id, title, images, description, content, colors, sizes, price } = req.body;
        const newProduct = new Products({
            product_id,
            title,
            images,
            description,
            content,
            colors,
            sizes,
            price
        })
        res.json({ newProduct })
    },
    deleteProduct: (req, res) => {
        res.json({ msg: 'Deleted a product' })
    },
    updateProduct: (req, res) => {
        res.json({ msg: 'Updated a product' })
    },
    getProduct: (req, res) => {
        res.json({ msg: 'Get a product' })
    },
}

module.exports = productControl
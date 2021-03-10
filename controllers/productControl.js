const Products = require('../models/productModel');
const productControl = {
    getProducts: async (req, res) => {
        const products = await Products.find()
        res.json(products);
    },
    createProduct: async (req, res) => {
        const { product_id, title, images, description, content, colors, sizes, price } = req.body;
        const product = await Products.findOne({ product_id: product_id });
        if (product) {
            return res.status(400).json({
                msg: "This product already exists"
            });
        };
        const newProduct = new Products({
            product_id,
            title,
            images,
            description,
            content,
            colors,
            sizes,
            price
        });
        await newProduct.save()
        res.json({ msg: 'Created a Product' })
    },
    deleteProduct: async (req, res) => {
        await Products.findByIdAndDelete(req.params.id)
        res.json({ msg: 'Deleted a product Succesfully' })
    },
    updateProduct: async (req, res) => {
        const { title, images, description, content, colors, sizes, price } = req.body;
        await Products.findOneAndUpdate({ _id: req.params.id }, {
            title,
            images,
            description,
            content,
            colors,
            sizes,
            price
        });
        res.json({ msg: 'Updated a product' })
    },
    getProduct: async (req, res) => {
        const product = await Products.findById(req.params.id)
        res.json(product);
    },
}

module.exports = productControl
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    product_id: {
        type: String,
        unique: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    images: {
        type: Array,
        default: 'https://png.pngtree.com/element_our/png/20181130/watch-vector-icon-png_255353.jpg'
    },
    description: String,
    content: String,
    colors: Array,
    sizes: Array,
    price: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Products', productSchema);
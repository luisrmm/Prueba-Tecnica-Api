const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    price: {
        type: Number,
    },
    category: {
        type: String,
    },
    quantity: {
        type: Number,
    },
    inventoryStatus: {
        type: String,
    },
    rating: {
        type: Number,
    },
});

module.exports = mongoose.model('Product', productSchema);
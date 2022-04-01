const mongoose = require('mongoose');

const plat = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    }

});

module.exports = mongoose.model('plat',plat);
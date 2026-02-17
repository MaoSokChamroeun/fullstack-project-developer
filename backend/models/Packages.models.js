const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
    package_name: {
        type: String,
        required: true
    },
    total_price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: [true, 'Description is required']
    },
    services: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service' 
    }]
}, { timestamps: true });

const Package = mongoose.model('Package', packageSchema);
module.exports = Package;
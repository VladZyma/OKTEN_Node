const {Schema, model} = require('mongoose');

const carSchema = new Schema({
    model: {type: String, trim: true, required: true},
    price: {type: Number, required: true},
    year: {type: Number, required: true},
    _user: {type: Schema.Types.ObjectId, ref: 'User'},
}, {
    timestamps: true,
});

module.exports = model('Car', carSchema);

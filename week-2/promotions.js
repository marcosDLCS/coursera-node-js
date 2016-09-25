/**
 * Created by marcos on 25/09/16.
 */

var mongoose = require('mongoose');
require('mongoose-currency').loadType(mongoose);

var Currency = mongoose.Types.Currency;
var Schema = mongoose.Schema;

var promoSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: false,
        default: ""
    },
    price: {
        type: Currency,
        required: true
    },
    description: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

var Promotions = mongoose.model('Promotion', promoSchema);

module.exports = Promotions;
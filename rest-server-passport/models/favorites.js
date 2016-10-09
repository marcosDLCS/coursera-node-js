/**
 * Created by marcos on 9/10/16.
 */

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var favoriteSchema = new Schema({
    dishes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Dish'
        }],
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});

var Favorites = mongoose.model('Favorites', favoriteSchema);

module.exports = Favorites;
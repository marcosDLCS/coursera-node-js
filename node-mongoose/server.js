/**
 * Created by marcos on 25/09/16.
 */

var mongoose = require('mongoose'),
    assert = require('assert');

var Dishes = require('./models/dishes');
var Promotions = require('./models/promotions');
var Leaders = require('./models/leadership');

var url = 'mongodb://localhost:27017/conFusion';
mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {

    console.log("Connected correctly to server");
    Dishes.create({
        name: 'My Dish 1',
        description: 'My Dish',
        image: 'images/mydish.png',
        category: 'mains',
        price: '$4.99',
        comments: [
            {
                rating: 3,
                comment: 'This is insane',
                author: 'Matt Daemon'
            }
        ]
    }, function (err, dish) {
        if (err) throw err;
        console.log('Dish created!');
        console.log(dish);

        var id = dish._id;

        setTimeout(function () {
            Dishes.findByIdAndUpdate(id, {
                $set: {
                    description: 'Updated Test'
                }
            }, {
                new: true
            })
                .exec(function (err, dish) {
                    if (err) throw err;
                    console.log('Updated Dish!');
                    console.log(dish);

                    dish.comments.push({
                        rating: 5,
                        comment: 'I\'m getting a sinking feeling!',
                        author: 'Leonardo di Carpaccio'
                    });

                    dish.save(function (err, dish) {
                        console.log('Updated Comments!');
                        console.log(dish);
                    });
                });
        }, 3000);
    });
    Promotions.create({
        name: 'My Promo 1',
        description: 'My Promo',
        image: 'images/mypromo.png',
        price: '$1,000.99'
    }, function (err, promo) {
        if (err) throw err;
        console.log('Promo created!');
        console.log(promo);

        var id = promo._id;

        setTimeout(function () {
            Promotions.findByIdAndUpdate(id, {
                $set: {
                    description: 'Updated promo'
                }
            }, {
                new: true
            })
                .exec(function (err, promo) {
                    if (err) throw err;
                    console.log('Updated Promo!');
                    console.log(promo);
                });
        }, 3000);
    });
    Leaders.create({
        name: 'My Leader 1',
        description: 'My Leader',
        image: 'images/myleader.png',
        designation: 'My Designation',
        abbr: 'My Abbr'
    }, function (err, leader) {
        if (err) throw err;
        console.log('Leader created!');
        console.log(leader);

        var id = leader._id;

        setTimeout(function () {
            Leaders.findByIdAndUpdate(id, {
                $set: {
                    description: 'Updated leader'
                }
            }, {
                new: true
            })
                .exec(function (err, leader) {
                    if (err) throw err;
                    console.log('Updated Leader!');
                    console.log(leader);
                });
        }, 3000);
    });

    setTimeout(function(){

        db.collection('dishes').drop(function () {
            db.collection('promotions').drop(function () {
                db.collection('leaders').drop(function () {
                    db.close();
                });
            });
        });

    }, 12000);
});
var dishModel = require('../model/dish.model.js');
console.log('we are in dishController')
exports.dish = {
	postDish: postSimple
}



function postSimple(req, res) {
	var restaurantIdArrayValue = [];
	console.log('we are inside postSimple')
	console.log('req . body inside postSimple', req.body)
		dishModel.findSimple(req.body)
		.then(function(dish) {
			if (dish) {
				console.log('inside postDishController inside postSimple dish already exists',dish)
				dishModel.incrementVoteCount(req.body)
				res.end('inside postDishController dish already exists and we incremented votecount', dish)
			}  else {
				console.log('inside postDishController dish does not exist')
				dishModel.addDishEntry(req.body)
					.then(function(resultRest) {
						console.log('resultRest inside dishController createRestaurant resultRest is: ', resultRest)
						res.send(resultRest)
					})
					.catch(function(err) {
						console.log('Error inside createRestaurant', err)
						res.end('Error inside createRestaurant', err)
					})
			}
		})
		.catch(function(err) {
			console.log('inside postDishController error in findSimple', err)
			res.end('inside postDishController error in findSimple', err)
		})
}




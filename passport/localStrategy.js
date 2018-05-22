const User = require('../models/users')
const LocalStrategy = require('passport-local').Strategy

const strategy = new LocalStrategy(
	{
		usernameField: 'email' // not necessary, DEFAULT
	},
		function(email, password, done) {
					User.findOne({ 'email': email } , (err, userMatch) => {
						if (err) {
							return done(err)
						}
						if (!userMatch) {
							return done(null, false, { message: 'Incorrect username' })
						}
						if (!userMatch.checkPassword(password)) {
							return done(null, false, { message: 'Incorrect password' })
						}
						console.log("The Local strategy - to find the user");
						return done(null, userMatch)
					})
		}
)

module.exports = strategy


// function(email, password, done) {
// 			.populate({
// 				path: 'gameId'
// 			}).then((userMatch) => {
// 				console.log('usermatch',userMatch)
// 				if (!userMatch) {
// 					return done(null, false, { message: 'Incorrect username' })
// 					}
// 				if (!userMatch.checkPassword(password)) {
// 					 return done(null, false, { message: 'Incorrect password' })
// 				 }
// 				 return done(null, userMatch)
// 			}).catch((err) => {
// 								return done(err)
// 			});
// }

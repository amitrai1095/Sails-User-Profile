/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	'new':function(req,res){
		res.locals.flash = _.clone(req.session.flash);
		res.view();
		req.session.flash = {};
	},

	create: function(req,res,next){

		User.create(req.params.all(), function(err,user){
			if(err){
				console.log(err);
				req.session.flash = {
					err: err
				}

				return res.redirect('/user/new')
			}

			//res.json(user);
			//Creating a session for the user
			req.session.authenticated = true;
			req.session.User = user;
			//Redirecting to home page
			res.redirect('/user/show/'+user.id);
			req.session.flash = {};
		});
	},

	show: function(req,res,next){
		User.findOne(req.param('id'),function foundUser(err,user){
			if(err) return next(err);
			if(!user) return next();
			res.view({
				user:user
			});
		});
	},

	edit: function(req,res,next){
		User.findOne(req.param('id'),function foundUser(err,user){
			if(err) return next(err);
			if(!user) return next();
			res.view({
				user:user
			});
		});
	},

	index: function(req,res,next){

		User.find(function foundUsers(err,users){
			if(err) return next(err);
			res.view({
				users:users
			});
		});
	},

	update: function(req,res,next){
		User.update(req.param('id'),req.params.all(), function userUpdated(err){
			if(err){
				return res.redirect('/user/edit/'+req.param('id'));
			}
			res.redirect('/user/show/'+req.param('id'));
		});
	}

};


 /*This Policy checks if the user is allowed to access a certain part or not*/

module.exports = function(req,res,ok){
	 //Check if the user is allowed

	 if(req.session.User && req.session.User.admin){
	 	return ok();
	 }

	 //Generate an error message to inform that the access is forbidden

	 else{
	 	console.log('Forbidden Access. You be logged in through admin account to access this feature');
	 	res.redirect('/session/new');
	 	return;
	 }
};
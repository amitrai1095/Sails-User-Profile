/*******************************************************************************************************************
* This policy is being used to determin if the id which is being requested is an admin or not and if it not an     *																								   *
* admin then the user requesting the id is being redirected to the user's home page.							   *
*                                                                                                                  *
*                                                                                                                  *
*******************************************************************************************************************/

module.exports = function(req,res,ok){
	var sessionMatchesId = req.session.User.id===req.param('id');
	var isAdmin = req.session.User.admin;

	if( !(sessionMatchesId || isAdmin) ){
		console.log('You are not admin');
		res.redirect('/session/new');
		return;
	}
	ok();
};

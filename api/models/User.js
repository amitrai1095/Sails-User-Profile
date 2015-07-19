/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  
  schema: true,

  attributes: {
  	name: {
  		type: "string",
  		required: true
  	},
  	title: {
  		type: "string"
  	},
  	email: {
  		type: 'string',
  		required: true
  	},

    admin: {
      type: 'boolean',
      defaultsTo: false
    },

    encryptedPassword:{
      type: 'string'
    },

    toJSON: function(){
      var object = this.toObject();
      delete object.password;
      delete object.confirmation;
      delete object._csrf;
      delete object.encryptedPassword;
      return object;
    }
  },

  beforeCreate: function(values,next){
    if(!values.password || values.password != values.confirmation){
      return next({err: ["Passwords do not match"]});
    }
    require('bcrypt').hash(values.password,10,function passwordEncrypted(err, encryptedPassword){
      if(err) return next(err);
      values.encryptedPassword = encryptedPassword;
      values.online= true; 
      next();
    });
  }
};


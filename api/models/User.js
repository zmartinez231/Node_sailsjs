/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {


  	nombre_lugar:{
  		type:'string',
  		required:true,
  		
  	},

  	direccion:{
  		type:'string',
  		required:true,
  		
  	},
  	horario_apertura:{
  		type:'string',
  		required:true,
  		unique:true
  	},

  	horario_cierre:{
  		type:'string',
  		required:true
  	},
    giro:{
      type:'string',
      required:true
    },

  }


};


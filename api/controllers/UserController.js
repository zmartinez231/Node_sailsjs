/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

    module.exports = {

	new:function (req, res){
		console.log('entre al formulario registro');
		res.view('user/registro');
	},

	create:function(req, res){

		var userObj={
			nombre_lugar: req.param('nombre_lugar'),
			direccion: req.param('direccion'),
			horario_apertura: req.param('horario_apertura'),
			horario_cierre: req.param('horario_cierre'),
			giro: req.param('giro')

		}

		User.create(userObj, function(err, user){
			if(err)
				return res.redirect('user/new');

				res.redirect('user/registro')
		})
	}
	
};


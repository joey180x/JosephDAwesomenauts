	//creating basic player class
	game.PlayerEntity = me.Entity.extend({
		init: function(x, y, settings){
			//constructer function
			this._super(me.Entity, 'init', [x, y, {
				//all settings
				image: "player",
				width: 64,
				height: 64,
				spritewidth: "64",
				spriteheight: "64",
				getShape: function(){
					return(new me.Rect(0, 0, 64, 64)).toPolygon();
					//rectangle of what character can walk in to
				}
			}]);
		},

		update: function(){

		}
	});
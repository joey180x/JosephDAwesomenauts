	//creating basic player class
	game.PlayerEntity = me.Entity.extend({
		init: function(x, y, settings){
			//constructer function
			this._super(me.Entity, 'init', [x, y, {
				//all settings
				image: "player",
				//player image
				width: 64,
				//64 width
				height: 64,
				//64 height
				//height and width are the same almost all the time
				spritewidth: "64",
				//64 spritewidth
				spriteheight: "64",
				//64 spriteheight
				getShape: function(){
					return(new me.Rect(0, 0, 64, 64)).toPolygon();
					//rectangle of what character can walk in to
				}
			}]);
				

			this.body.setVelocity(5, 20);
			//movement speed
			//changing the x and y location

			this.renderable.addAnimation("idle", [78]);
			//telling the game what the idle position does
			this.renderable.addAnimation("walk", [117, 118, 119, 120, 121, 122, 123, 124, 125], 80);
			//telling the game which animations to use for walking
		
			this.renderable.setCurrentAnimation("idle");
			//rendering the idle position 
		},

		update: function(delta) {
			if(me.input.isKeyPressed("right")){
				//sets the position of my x by adding the velocity defined above in
				// setVelocity() and multiplying it by me.timer.tick.
				//me.timer.tick makes the movement look smooth
				this.body.vel.x += this.body.accel.x * me.timer.tick;

				this.flipX(true);
				//flips animation
			}
			else{ 

				this.body.vel.x = 0;
				//checking if velocity is 0
			}

			if (this.body.vel.x !==0) {
			//only going to walk animation if guy is moving

			if (!this.renderable.isCurrentAnimation("walk")) {
				//if this is not walking
				this.renderable.setCurrentAnimation("walk");
				//walking
			}
		}
		else{
			this.renderable.setCurrentAnimation("idle");
			//setting animation to idle if not walking
		}


			this.body.update(delta);
			//updating delta

			this._super(me.Entity, "update", [delta]);
			//updating the super function "delta"
			return true;
			//returning true
		}
});


			game.PlayerBaseEntity = me.Entity.extend({
				init : function(x, y, settings) {
				this._super(me.Entity, 'init', [x, y, {
					image: "tower",
					//tower image
					width: 100,
					height: 100,
					spritewidth: "100",
					//spright width 100
					spriteheight: "100",
					//sprite height 100
					getShape: function(){
						return (new me.Rect(0, 0, 100, 100)).toPolygon();
					}
				}]);
				this.broken = false;
				//variable saying tower is not destroyed
				this.health = 10;
				//10 health
				this.alwaysUpdate = true;
				//even if tower is not showing on screen it still
				//is updating
				this.body.onCollision = this.onCollision.bind(this);
				//if someone runs in to the tower it will be able to collide with it
				this.type = "PlayerBaseEntity";
			},

			update:function(delta){
				if(this.health<=0){
					//if my health is greater then or equal to 0
					this.broken = true;
					//they we are dead
				}
				this.body.update(delta);
				//making sure delta updates

				this._super(me.Entity, "update", [delta]);
				//calling super class
				return true;
				//returning true
			},

			onCollision: function(){
				//on collision function empty for now

			}

		});


			game.EnemyBaseEntity = me.Entity.extend({
				//comments are in code above because theyre exactly the same
			init : function(x, y, settings){
				this._super(me.Entity, 'init', [x, y, {
					image: "tower",
					width: 100,
					height: 100,
					spritewidth: "100",
					spriteheight: "100",
					getShape: function(){
						return (new me.Rect(0, 0, 100, 100)).toPolygon();
					}
				}]);
				this.broken = false;
				this.health = 10;
				this.alwaysUpdate = true;
				this.body.onCollision = this.onCollision.bind(this);

				this.type = "EnemyBaseEntity";
			
			},

			update:function(delta){
				if(this.health<=0){
					this.broken = true;
				}
				this.body.update(delta);

				this._super(me.Entity, "update", [delta]);
				return true;
			},

			onCollision: function(){

			}

		});

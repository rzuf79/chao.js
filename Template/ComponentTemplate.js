function ComponentTemplate(game){
	this.name 				= "Template";
	this.entity 			= null;

	this.game 				= game;

	this.create = function(){
		//
	}

	this.destroy = function(){
		//
	}

	this.draw = function(x, y, alpha){
		//
	}

	this.update = function(){
		var movementSpeed = chao.getTimeDelta() * 100;

		if(chao.pressed[chao.KEY_UP]){
			this.entity.y -= movementSpeed;
		} else if(chao.pressed[chao.KEY_DOWN]){
			this.entity.y += movementSpeed;
		}

		if(chao.pressed[chao.KEY_LEFT]){
			this.entity.x -= movementSpeed;
		} else if(chao.pressed[chao.KEY_RIGHT]){
			this.entity.x += movementSpeed;
		}

		this.entity.x = chao.clamp(this.entity.x, 0, chao.screenWidth - this.entity.width);
		this.entity.y = chao.clamp(this.entity.y, 0, chao.screenHeight - this.entity.height);
	}

}
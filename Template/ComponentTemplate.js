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
		var entity = this.entity;
		var movementSpeed = chao.getTimeDelta() * 100;

		if(chao.pressed[chao.KEY_UP]){
			entity.y -= movementSpeed;
		} else if(chao.pressed[chao.KEY_DOWN]){
			entity.y += movementSpeed;
		}

		if(chao.pressed[chao.KEY_LEFT]){
			entity.x -= movementSpeed;
		} else if(chao.pressed[chao.KEY_RIGHT]){
			entity.x += movementSpeed;
		}

		entity.x = chao.clamp(entity.x, entity.width/2, chao.screenWidth - entity.width/2);
		entity.y = chao.clamp(entity.y, entity.height/2, chao.screenHeight - entity.height/2);
	}

}
function ComponentTemplate(game) {
	this.name = "Template";
	this.entity = undefined; // will be assigned when added to an Entity

	this.create = function() {
		//
	};

	this.draw = function() {
		//
	};

	this.update = function() {
		var entity = this.entity;
		var movementSpeed = chao.getTimeDelta() * 100;

		if (chao.pressed[chao.KEY_UP]) {
			entity.y -= movementSpeed;
		} else if (chao.pressed[chao.KEY_DOWN]) {
			entity.y += movementSpeed;
		}

		if (chao.pressed[chao.KEY_LEFT]) {
			entity.x -= movementSpeed;
		} else if (chao.pressed[chao.KEY_RIGHT]) {
			entity.x += movementSpeed;
		}

		entity.x = chao.clamp(entity.x, entity.width/2, chao.screenWidth - entity.width / 2);
		entity.y = chao.clamp(entity.y, entity.height/2, chao.screenHeight - entity.height / 2);
	};

	this.remove = function () {}; // Component removed from entity
	this.destroy = function () {}; // Entity was destroyed :(
	this.resize = function () {};
	this.onClick = function (relativeX, relativeY) {};
	this.onMove = function (relativeX, relativeY) {};
	this.onCancel = function () {};
	this.onRelease = function (relativeX, relativeY) {};
}
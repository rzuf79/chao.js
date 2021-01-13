function StateGame(){
	
	this.create = function(){
		var newSprite = chao.helpers.createSprite(this, "Sticker", "sticker");
		newSprite.entity.alignToParent();
		newSprite.entity.addComponent(new ComponentTemplate(this));

		var introText = "chao.js is working!\nversion " + chao.VERSION;
		var newText = chao.helpers.createText(newSprite.entity, "Version Text", newSprite.entity.width/2, 0, chao.font, introText, 16);
		newText.entity.alignToParent(0.5, 1.0, 0.5, 0.0, 10);
		newText.color = chao.colorCodes[7];
		newText.align = "center";
	}

	this.resize = function(){
		//
	}

	this.update = function(){
		if(chao.justPressed[chao.KEY_L]){
			chao.logHierarchy(this.rootEntity);
		}
	}

	this.draw = function(){
		//
	}

}
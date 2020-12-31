function StateGame(){
	
	this.create = function(){
		var newSprite = chao.helpers.createSprite("Sticker", "sticker");
		this.add(newSprite.entity);
		newSprite.entity.alignToParent();
		newSprite.entity.addComponent(new ComponentTemplate(this));

		var introText = "chao.js is working!\nversion " + chao.VERSION;
		var newText = chao.helpers.createText("Version Text", newSprite.entity.width/2, 0, chao.font, introText, 23);
		newText.color = chao.colorCodes[7];
		newText.align = "center";
		newSprite.entity.add(newText.entity);
		newText.entity.alignToParent(0.5, 1.0, 0.5, 0.0, 10);
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
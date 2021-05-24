function StateEditor(){
	
	this.create = function(){
		var entities = [
			{
				name: "A sprite",
				x: 250, y: 200,
				components: [
					new ComponentSprite("sticker"),
				],
			},
			{
				parent: 0,
				name: "A text",
				align: [ 0.5, 1.0, 0.5, 1.0, 0, 0, true ],
				components: [
					new ComponentText(chao.font, "Uhhhhh", 25),
				],
			}
		];

		chao.helpers.createHierarchy(entities);
	};

	this.resize = function(){
		//
	};

	this.update = function(){
		if(chao.justPressed[chao.KEY_L]){
			chao.logHierarchy(this.rootEntity);
		}
	};

	this.draw = function(){
		//
	};

}
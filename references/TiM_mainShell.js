/**
 * TiM Main Shell
 */

canvasId="gameCanvas";




function onStart(){

	TiM.loadImage("loading", "gfx/loading.png");
	TiM.loadImage("footprint", "gfx/footprint.png");

	TiM.setFont("30px action_man");

	TiM.backgroundColor ="white";

	klawiszZ	= false;

	TiM.keyAdd("right", 39);
	TiM.keyAdd("left", 37); 
	TiM.keyAdd("up", 38);
	TiM.keyAdd("down", 40);

	TiM.keyAdd("b", "66");
	TiM.keyAdd("z", "90");


	// TiM.loadMusic("terror", "sfx/terror");
	// TiM.loadMusic("sanity", "sfx/sanity");
	// TiM.loadMusic("iwl", "sfx/iwl");
	// TiM.loadSound("szczal", "sfx/szczal.wav");
	// TiM.loadSound("bum", "sfx/bum.wav");
	// TiM.loadSound("wue", "sfx/wue.wav");

	TiM.loadImage("turtles1", "gfx/turtles1.png");
	TiM.loadImage("turtles2", "gfx/turtles2.png");
	TiM.loadImage("freakpp1", "gfx/freakpp1.png");
	TiM.loadImage("freakpp2", "gfx/freakpp2.png");
	TiM.loadImage("logo1", "gfx/logo1.png");
	TiM.loadImage("logo2", "gfx/logo2.png");


	TiM.loadImage("bulet1", "gfx/bulet1.png", 2);
	TiM.loadImage("bulet2", "gfx/bulet2.png", 2);
	TiM.loadImage("bulet3", "gfx/bulet3.png", 2);
	TiM.loadImage("bulet4", "gfx/bulet4.png", 2);
	TiM.loadImage("pajonk", "gfx/pajonk.png", 2);
	
	TiM.loadImage("potfur1", "gfx/potfur1.png", 2);
	TiM.loadImage("potfur2", "gfx/potfur2.png", 2);
	TiM.loadImage("potfur3", "gfx/potfur3.png", 2);
	TiM.loadImage("potfur4", "gfx/potfur4.png", 2);
	TiM.loadImage("potfur5", "gfx/potfur5.png", 2);
	TiM.loadImage("potfur6", "gfx/potfur6.png", 2);
	TiM.loadImage("potfur7", "gfx/potfur7.png", 2);
	
	TiM.loadImage("boss", "gfx/boss.png", 2);
	
	TiM.loadImage("pbulet1", "gfx/pbulet1.png");
	TiM.loadImage("pbulet2", "gfx/pbulet2.png");
	TiM.loadImage("pbulet3", "gfx/pbulet3.png");
	
	TiM.loadImage("boom", "gfx/wybuch.png");
	TiM.loadImage("life", "gfx/mini_pajonk.png");
	
	TiM.loadImage("bullet_bonus", "gfx/bullet_bonus.png", 2);
	TiM.loadImage("speed_bonus", "gfx/speed_bonus.png", 2);
	TiM.loadImage("killem_bonus", "gfx/killem_bonus.png", 2);
	TiM.loadImage("life_bonus", "gfx/life_bonus.png", 2);
	TiM.loadImage("hole", "gfx/hole.png", 2);
	TiM.loadImage("bullet_debonus", "gfx/bullet_debonus.png", 2);
	TiM.loadImage("speed_debonus", "gfx/speed_debonus.png", 2);

	TiM.loadImage("tlo0", "gfx/level0.png");
	TiM.loadImage("tlo1", "gfx/level1.png");
	TiM.loadImage("tlo2", "gfx/level2.png");
	TiM.loadImage("tlo3", "gfx/level3.png");

	resetGame();


	
	// TiM.playMusic("terror");

	
}


function onRun(){

	if(TiM.getLoadingProgress() < 100){
		
		var img		= TiM.getImage("loading");		

		var posX	= (TiM.canvas.width>>1) - (img.width>>1);
		var posY	= (TiM.canvas.height>>1) - (img.height>>1);

		TiM.drawImage("loading", posX, posY);
		
		var imgFoot	= TiM.getImage("footprint");
		var maxFoots	= 6;
		var spacing	= 10;
		var firstFootX	= (TiM.canvas.width>>1) - ((imgFoot.width * (maxFoots))>>1);
		firstFootX -= imgFoot.width>>1;

		for(var i=0; i<maxFoots*(TiM.getLoadingProgress()/100); ++i){
			var footAngle 	= i%2==0 ? 20 : -20;
			var footX	= firstFootX + (i * (imgFoot.width + spacing));
			var footY	= posY + (img.height * 1.1);
			
			if(i%2 != 0){
				footY += imgFoot.height * .5;
			}
			
			TiM.drawImage("footprint", footX, footY, footAngle);
			
		}

		return;
	}
	
	if(gameState == 0){
		TiM.setColor("white", 1.0);
		TiM.drawFillRectangle(0, 0, 640, 480);
		
		
		splashBounceTimer += 0.05;
		
		var text			= "Press [z] please";
		var screenCenterX 	= (640 / 2) - (TiM.getTextLength(text) / 2);
		var screenCenterY	= (480 / 2);
		
		screenCenterX 	   += Math.sin(splashBounceTimer) * 13;
		screenCenterY	   += Math.cos(splashBounceTimer) * 8;
		
		var splashAlpha		= 0.5 + Math.abs(Math.sin(splashBounceTimer) * 0.5);
		
		TiM.setColor("black", splashAlpha);
		TiM.drawFont(screenCenterX, screenCenterY, text);
		
		if(TiM.keyGet("z") == 1){
			gameState = 1;
			// TiM.playMusic("sanity");
		}
		
		
	}else if(gameState == 1){
		menuScreen.run();
		
		if(menuScreen.goToGame == true){
			gameState = 2;
			// TiM.playMusic("terror");
		}
	}else{
		runGame();
		
	}

}


function resetGame(){
	pajonk	= new gameObject("pajonk", 2, 10);
	pajonk.setPosition(new vector2(450, 180));
	pajonk.setCollisionBox(25, 12, 116, 116);
	
	pajonkSpeedLevel	= 0;
	pajonkBuletLevel	= 0;
	pajonkBuletDelay	= 50;
	pajonkInvincibility	= 0;
	pajonkLives		= 2;
	maxBulets		= 5;

	enemiesTimer		= 0;
	enemiesSpawnRate	= 100;//240;
	enemiesMax		= 30;
	
	lastEnemiesY		= 0;
	minEnemiesDistance	= 100;

	pajonkBulets		= new Array();
	enemyBullets		= new Array();

	enemies			= new Array();
	enemies[0]		= new enemyBall();

	bonuses			= new Array();
	bonusesMax		= 20;
	bonusesProbability	= 20;

	gameScript		= new scripts();
	gameScript.prepareLevel(0);
	transitionTimer		= 0;
	currentBackground	= 0;

	points			= 0;

	backgroundX		= 0;

	
	gameState 		= 0;
	
	splashBounceTimer	= 0;
	
	gameOverAlpha		= 0;
	gameOverBounceTimer	= 0;
	
	endingAlpha		= 0;
	endingBounceTimer	= 0;
	
	gameCompleted		= false;
	showEnding		= false;
	
	particles		= new boom();
	menuScreen		= new menu(); 
	
}


function runGame(){

	if(!gameCompleted){
		var backgroundY = 480 - TiM.getImageHeight("tlo" + currentBackground);

		TiM.drawImage("tlo" + currentBackground, backgroundX, backgroundY);
		TiM.drawImage("tlo" + currentBackground, backgroundX-640, backgroundY);

		backgroundX	+= 5 + pajonkSpeedLevel;
		if(backgroundX>640){
			backgroundX	-= 640;
		}
	}

	
	gameScript.run();
	
	if(gameScript.levelClear && pajonkLives > 0 && gameScript.currentLevel < 3){
		killAllEnenies();
		transitionTimer = 2;
		gameScript.prepareLevel(gameScript.currentLevel + 1);
	}
	
	
	runEnemies();
	runEnemyBullets();
	runBullets();
	runBonuses();
	if(pajonkLives>0){
		runPajonk();
	}else{
		runGameOver();
	}
	
	if(showEnding){
		runEnding();
	}
	
	particles.run();
	
	runLevelTransition();
	
	runHUD();
}


function runLevelTransition(){
	var moreThanOne = transitionTimer > 1;
	transitionTimer -= 1/80;
	
	if(moreThanOne && transitionTimer <= 1){
		// change background and kill everything
		currentBackground 	= gameScript.currentLevel;
		bonuses				= new Array();
	}
	
	if(transitionTimer < 0.0){
		transitionTimer = 0;
		return;
	}
	
	var transitionAlpha = 0;
	if(transitionTimer >= 1){
		transitionAlpha = 1.0 - (transitionTimer - 1.0);
	}else{
		transitionAlpha = transitionTimer;
	}
	
	
	TiM.setColor("white", transitionAlpha);
	TiM.drawFillRectangle(0, 0, 640, 480);
}


function runGameOver(){

	//update
	gameOverAlpha += .008;
	if(gameOverAlpha > 1){
		gameOverAlpha = 1;
		
		
		gameOverBounceTimer += 0.05;
		
		if(TiM.keyGet("z")==1){
			resetGame();
			// TiM.playMusic("sanity");
			var beat = 4.4;
			// TiM.setMusicPosition("sanity", (beat * 6) + 0.1);
			gameState = 1;
		}
		
	}
	

	//draw
	var boxWidth	= 300;
	var boxHeight	= 200;
	var boxX		= (640/2) - (boxWidth/2);
	var boxY		= (480/2) - (boxHeight/2);
	
	TiM.setColor("gray", gameOverAlpha);
	TiM.drawFillRectangle(boxX, boxY, boxWidth, boxHeight);
	TiM.setColor("white", gameOverAlpha);
	TiM.drawFillRectangle(boxX+2, boxY+2, boxWidth-4, boxHeight-4);

	var text	= "Game Over";
	var textX	= (boxX + (boxWidth*.5)) - (TiM.getTextLength(text) * .5);
	var textY	= boxY + (boxHeight*.5);
	
	TiM.setColor("black", gameOverAlpha);
	TiM.drawFont(textX, textY, text);
	
	
	if(gameOverAlpha >= 1){
		text		= "Press [z] please";
		textX		= (boxX + (boxWidth*.5)) - (TiM.getTextLength(text) * .5);
		textY		= (boxY + (boxHeight*.8)) + Math.sin(gameOverBounceTimer) * 8;
		
		
		TiM.setColor("black", .5 + Math.abs(Math.sin(gameOverBounceTimer) * .5));
		TiM.drawFont(textX, textY, text);
	}
	
	
}


function runEnding(){

	//update
	if(pajonk.scale <= 0){
		endingAlpha += .008;	
	}
	if(endingAlpha > 1){
		endingAlpha = 1;
		
		
		endingBounceTimer += 0.05;
		
		if(TiM.keyGet("z")==1){
			resetGame();
			// TiM.playMusic("sanity");
			var beat = 4.4;
			// TiM.setMusicPosition("sanity", (beat * 6) + 0.1);
			gameState = 1;
		}
		
	}
	
	pajonk.scale -= 0.005;
	pajonk.angle += 5;
	if(pajonk.scale < 0){
		pajonk.scale = 0;
	}
	

	//draw
	var boxWidth	= 550;
	var boxHeight	= 250;
	var boxX		= (640/2) - (boxWidth/2);
	var boxY		= (480/2) - (boxHeight/2);
	
	TiM.setColor("gray", endingAlpha);
	TiM.drawFillRectangle(boxX, boxY, boxWidth, boxHeight);
	TiM.setColor("white", endingAlpha);
	TiM.drawFillRectangle(boxX+2, boxY+2, boxWidth-4, boxHeight-4);

	var text	= "Game completed!";
	var textX	= (boxX + (boxWidth*.5)) - (TiM.getTextLength(text) * .5);
	var textY	= boxY + (boxHeight*.2);
	TiM.setColor("black", endingAlpha);
	TiM.drawFont(textX, textY, text);
	
	text	= "You were swallowed by a black hole";
	textX	= (boxX + (boxWidth*.5)) - (TiM.getTextLength(text) * .5);
	textY	= boxY + (boxHeight*.35);
	TiM.setColor("black", endingAlpha);
	TiM.drawFont(textX, textY, text);
	
	text	= "and thrown into another dimension.";
	textX	= (boxX + (boxWidth*.5)) - (TiM.getTextLength(text) * .5);
	textY	= boxY + (boxHeight*.45);
	TiM.setColor("black", endingAlpha);
	TiM.drawFont(textX, textY, text);
	
	text	= "See ya there!";
	textX	= (boxX + (boxWidth*.5)) - (TiM.getTextLength(text) * .5);
	textY	= boxY + (boxHeight*.55);
	TiM.setColor("black", endingAlpha);
	TiM.drawFont(textX, textY, text);
	
	
	if(endingAlpha >= 1){
		text		= "Press [z] please";
		textX		= (boxX + (boxWidth*.5)) - (TiM.getTextLength(text) * .5);
		textY		= (boxY + (boxHeight*.8)) + Math.sin(endingBounceTimer) * 8;
		
		
		TiM.setColor("black", .5 + Math.abs(Math.sin(endingBounceTimer) * .5));
		TiM.drawFont(textX, textY, text);
	}
	
	
}


function runHUD(){
	TiM.setColor("black");
	
	var livesY 		= 0;
	var livesHeight	= TiM.getImageHeight("life");
	var scoreTextY	= livesY + (livesHeight * .55);
	
	var levelText  = "Level: " + gameScript.currentLevel;
	TiM.drawFont(2, scoreTextY, levelText);
	
	TiM.drawFont(2, scoreTextY + 40, "Pts: " + points);
	

	for(var i=0; i<pajonkLives; ++i){
		TiM.drawImage("life", 580-(i*60), livesY);
	}
}


function runPajonk(){
	if(!gameCompleted){
		if(TiM.keyGet("up")==1) 		pajonk.position.y -= 3+pajonkSpeedLevel;
		if(TiM.keyGet("down")==1) 		pajonk.position.y += 3+pajonkSpeedLevel;
		if(TiM.keyGet("left")==1) 		pajonk.position.x -= 3+pajonkSpeedLevel;
		if(TiM.keyGet("right")==1) 		pajonk.position.x += 3+pajonkSpeedLevel;
	}

	if(pajonk.position.x > 640-128) pajonk.position.x = 640-128;
	if(pajonk.position.x < 10) 		pajonk.position.x = 10;	
	if(pajonk.position.y > 480-128) pajonk.position.y = 480-128;
	if(pajonk.position.y < 0) 		pajonk.position.y = 0;
	

	if(!gameCompleted){
		if(pajonkBuletDelay>0){
			pajonkBuletDelay	-= 1;
		}	
		if(TiM.keyGet("z")==1){
			if(pajonkBuletDelay<=0){
				addBullet();
				pajonkBuletDelay	= 15;
			}
		}else{
			pajonkBuletDelay	= 0;
		}
	}


	if(pajonkInvincibility>0){
		pajonkInvincibility -= 0.05;
		if(pajonkInvincibility<0){
			pajonkInvincibility	= 0;
		}
	}

	pajonk.alpha	= Math.abs(Math.cos(pajonkInvincibility));
	pajonk.run();

}


function addBullet(){
	var buletX	= pajonk.position.x-50;
	var buletY	= pajonk.position.y+32;

	for(var i=0; i<maxBulets; ++i){
		if(pajonkBulets[i]==undefined){
			var number = 1+pajonkBuletLevel;
			pajonkBulets[i]	= new gameObject("bulet"+number, 2, 10, buletX, buletY);
			pajonkBulets[i].setCollisionBox(14, 20, 54, 46);
			if(pajonkBuletLevel == 3){
				pajonkBulets[i].setCollisionBox(14, 15, 54, 51);
			}
			// TiM.playSound("szczal");
			
			break;
		}
	}
}


function runBullets(){
	for(var i=0; i<maxBulets; ++i){
		if(pajonkBulets[i]!=undefined){
			

			pajonkBulets[i].run();
			pajonkBulets[i].position.x	-= 7;
			if(pajonkBulets[i].position.x < -50){
				delete pajonkBulets[i];
				pajonkBulets[i] = undefined;
				continue;
			}

			for(var j=0; j<enemiesMax; ++j){
				if(enemies[j]!=undefined && pajonkLives > 0){
					if(pajonkBulets[i].collide(enemies[j].object)){
					
						// TiM.playSound("bum");
					
						var bulletCenter = pajonkBulets[i].getCenter();
						bulletCenter.x -= 20;
					
						delete pajonkBulets[i];
						pajonkBulets[i] = undefined;

						var enemyCenter = enemies[j].object.getCenter();

						enemies[j].hp	-= 1+pajonkBuletLevel;
						particles.spawn(bulletCenter.x, bulletCenter.y, 2);
						//particles.spawn(enemyCenter.x, enemyCenter.y, 2);
						
						
						if(enemies[j].hp < 1){
							points += enemies[j].points;
							particles.spawn(enemyCenter.x, enemyCenter.y, 7);
							
							if(TiM.getRandom(100)<=bonusesProbability && !(enemies[j] instanceof enemyBoss)){
								spawnBonus(enemyCenter.x, enemyCenter.y);
							}else if(enemies[j] instanceof enemyBoss){
								spawnBonus(enemyCenter.x, enemyCenter.y, false, "hole");
							}
							
							
							if(enemies[j] instanceof enemyBoss){
								gameCompleted = true;
								// TiM.stopMusic();
							}
							
							
							delete enemies[j];
							enemies[j]	= undefined;
							
						}

						break;
					}
				}
			}
		}
	}
}


function runEnemies(){
	enemiesTimer	+= 1;
	if(enemiesTimer>=enemiesSpawnRate){
		enemiesTimer = 0;
		//spawnEnemy();
	}

	for(var i=0; i<enemiesMax; ++i){
		if(enemies[i]!=undefined){
			enemies[i].run();
			if(enemies[i].object.position.x > 640){
				delete enemies[i];
				enemies[i] = undefined;
			}
		}
		//collisions with pajonk
		if(enemies[i]!=undefined && pajonkLives>0){
			if(enemies[i].object.collide(pajonk) && pajonkInvincibility<=0){
				var enemyCenter 	= enemies[i].object.getCenter();
				var pajonkCenter	= pajonk.getCenter();
				particles.spawn(enemyCenter.x, enemyCenter.y, 7);
				particles.spawn(pajonkCenter.x, pajonkCenter.y, 7);
				// TiM.playSound("bum");

				pajonk.setPosition(new vector2(450, 180));
				pajonkInvincibility	= 15;	
				pajonkSpeedLevel	= 0;
				pajonkBuletLevel	= 0;	
				pajonkLives--;		

				if( !(enemies[i] instanceof enemyBoss)  && !(enemies[i] instanceof enemyOcto)){
					delete enemies[i];
					enemies[i] = undefined;
				}
			
			}
		}
	}
}

function spawnEnemy(type){

	if(type == undefined){
		type = TiM.getRandom(4);
	}

	for(var i=0; i<enemiesMax; ++i){
		if(enemies[i]==undefined){
			switch(type){
				case 0: {
					enemies[i]	= new enemyBall();
				}break;
				case 1: {
					enemies[i]	= new enemyTriangle();
				}break;
				case 2: {
					enemies[i]	= new enemySniper();
				}break;
				case 3: {
					enemies[i]	= new enemyCanon();
				}break;
				case 4: {
					enemies[i]	= new enemyBullet();
				}break;
				case 5: {
					enemies[i]	= new enemyShark();
				}break;
				case 6: {
					enemies[i]	= new enemyOcto();
				}break;
				case 23: {
					enemies[i] 	= new enemyBoss();
				}break;
			}
			
			break;
		}
	}
}


function killAllEnenies(){

	// TiM.playSound("bum");

	for(var i=0; i<this.enemiesMax; ++i){
		if(this.enemies[i]!=undefined){
			
			if(this.enemies[i] instanceof enemyBoss){
				continue;
			}
		
			var enemyCenter 	= this.enemies[i].object.getCenter();
			
			this.particles.spawn(enemyCenter.x, enemyCenter.y, 7);	

			if(TiM.getRandom(100)<=bonusesProbability){
				this.spawnBonus(enemyCenter.x, enemyCenter.y);
			}

			this.enemies[i].object.position.x = 9001;
			
		}
	}
	
	
	for(var i=0; i<this.enemyBullets.length; ++i){
		if(this.enemyBullets[i] != undefined){
			this.enemyBullets[i].object.position.x = 9001;
		}
	}
}


function addEnemyBullet(newBullet){
	var freeItor = this.enemyBullets.length;
	for(var i=0; i<this.enemyBullets.length; ++i){
		if(this.enemyBullets[i] == undefined){
			freeItor = i;
			break;
		}
	}
	
	enemyBullets[i] = newBullet;
}


function runEnemyBullets(){
	for(var i=0; i<this.enemyBullets.length; ++i){
	
		if(enemyBullets[i] == undefined){
			continue;
		}
	
		var deletePlox = false;
	
		enemyBullets[i].run();
		
		if(enemyBullets[i].object.collide(pajonk) && pajonkInvincibility<=0 && !gameCompleted){
			pajonk.setPosition(new vector2(450, 180));
			pajonkInvincibility = 15;		
			pajonkLives--;
			
			var bulletCenter = enemyBullets[i].object.getCenter();
			particles.spawn(bulletCenter.x, bulletCenter.y, 7);
			// TiM.playSound("bum");

			deletePlox = true;
		}
		
		if(enemyBullets[i].object.x > 640 || deletePlox){
			delete enemyBullets[i];
			enemyBullets[i] = undefined;
		}
	}
}


function shouldBonusBeSpawned(type){
	switch(type){
		case "bullet_bonus":{
			return false; //ni ma ;_;
//			if(pajonkBuletLevel>=3){
//				return false;
//			}
		} break;
		case "life_bonus":{
			if(pajonkLives>=4 && TiM.getRandom(100) > 50){
				return false;
			}
		} break;
		case "speed_bonus":{
			if(pajonkSpeedLevel>=4){
				return false;
			}
		} break;
		case "bullet_debonus":{
			if(pajonkBuletLevel<=0){
				return false;
			}
		} break;
		case "speed_debonus":{
			if(pajonkSpeedLevel<=0){
				return false;
			}
		} break;
		case "killem_bonus":{
			return false;
		};
		default:{
			return true;
		}
	}
	
	return true;
}


function spawnBonus(x, y, positiveOnly, type){
	var range 		= 4;
	var bonusType	= type;

	if(positiveOnly==undefined || positiveOnly==false){
		range = 7;
	}

	for(var i=0; i<bonusesMax; ++i){
		if(bonuses[i]==undefined){
			if(type == undefined){
				var randomNumber = TiM.getRandom(range);
				switch(randomNumber){
					case 0: {
						bonusType	= "bullet_bonus";
					} break;
					case 1: {
						bonusType	= "killem_bonus";
					} break;
					case 2: {
						bonusType	= "life_bonus";
					} break;
					case 3: {
						bonusType	= "speed_bonus";
					} break;
					case 4: {
						bonusType	= "hole";
					} break;
					case 5: {
						bonusType	= "bullet_debonus";
					} break;
					case 6: {
						bonusType	= "speed_debonus";
					}
				}
			}
			
			if(shouldBonusBeSpawned(bonusType)){
				var betterX = x - (TiM.getImageWidth(bonusType)/2);
				var betterY = y - (TiM.getImageHeight(bonusType)/2);
			
				bonuses[i] = new gameObject(bonusType, 2, 10, betterX, betterY);
			}
			
			break;
		}
	}
}


function runBonuses(){
	for(var i=0; i<bonusesMax; ++i){
		if(bonuses[i]!=undefined){
			bonuses[i].run();
			if(!showEnding){
				bonuses[i].position.x += 1;
			}
			bonuses[i].setCollisionBox(15, 15, 45, 45);
			
			
			switch(bonuses[i].getCurrentImage()){
					case "hole":{						
						var center 			= bonuses[i].getCenter();
						var pajonkCenter	= pajonk.getCenter();
						
						if(pajonkCenter.x < center.x) pajonk.position.x += 1;
						if(pajonkCenter.x > center.x) pajonk.position.x -= 1;
						if(pajonkCenter.y < center.y) pajonk.position.y += 1;
						if(pajonkCenter.y > center.y) pajonk.position.y -= 1;
						
						var holeVector		= bonuses[i].getCenter();
						holeVector.substract(pajonkCenter);
						if(holeVector.getLength() <= 3 && gameCompleted && !showEnding){
							for(var k=0; k<this.enemyBullets.length; ++k){
								if(this.enemyBullets[k] != undefined){
									this.enemyBullets[k].object.position.x = 9001;
								}
							}
							showEnding = true;
						}
						
					} break;
					default:{
						//
					}
				}
			
			
			if(bonuses[i].collide(pajonk)){
				var shouldBeDeleted = true;
				
				switch(bonuses[i].getCurrentImage()){
					case "bullet_bonus":{
						pajonkBuletLevel ++;
					} break;
					case "killem_bonus":{
						bonuses[i].setPosition(new vector2(9000, 1));
						killAllEnenies();
						shouldBeDeleted = true;
					} break;
					case "life_bonus":{
						if(pajonkLives<4){
							pajonkLives ++;
						}
					} break;
					case "speed_bonus":{
						pajonkSpeedLevel ++;
					} break;
					case "bullet_debonus":{
						if(pajonkBuletLevel>0){
							pajonkBuletLevel --;
						}
					} break;
					case "speed_debonus":{
						if(pajonkSpeedLevel>0){
							pajonkSpeedLevel --;
						}
					} break;
					case "hole":{
						shouldBeDeleted = false;
					} break;
					default:{
						//
					}
				}
				
				//console.log("deletin'! " + shouldBeDeleted);
				if(shouldBeDeleted){
					delete bonuses[i];
					bonuses[i] = undefined;
					// TiM.playSound("wue");
				}
				
			}
		}
		
		if(bonuses[i]!=undefined){
			if(bonuses[i].position.x > 640){
				delete bonuses[i];
				bonuses[i] = undefined;
			}
		}
	}
}























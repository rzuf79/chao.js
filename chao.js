/**
 * chao.js
 */


/** @namespace*/
var chao = {

	/** Key codes */
	KEY_A: 0x41, KEY_B: 0x42, KEY_C: 0x43, KEY_D: 0x44, KEY_E: 0x45, KEY_F: 0x46, KEY_G: 0x47, KEY_H: 0x48, KEY_I: 0x49, KEY_J: 0x4A, KEY_K: 0x4B, KEY_L: 0x4C, KEY_M: 0x4D, KEY_N: 0x4E, KEY_O: 0x4F, KEY_P: 0x50, KEY_Q: 0x51, KEY_R: 0x52, KEY_S: 0x53, KEY_T: 0x54, KEY_U: 0x55, KEY_V: 0x56, KEY_W: 0x57, KEY_X: 0x58, KEY_Y: 0x59, KEY_Z: 0x5A, KEY_0: 0x30, KEY_1: 0x31, KEY_2: 0x32, KEY_3: 0x33, KEY_4: 0x34, KEY_5: 0x35, KEY_6: 0x36, KEY_7: 0x37, KEY_8: 0x38, KEY_9: 0x39, KEY_0_PAD: 0x60, KEY_1_PAD: 0x61, KEY_2_PAD: 0x62, KEY_3_PAD: 0x63, KEY_4_PAD: 0x64, KEY_5_PAD: 0x65, KEY_6_PAD: 0x66, KEY_7_PAD: 0x67, KEY_8_PAD: 0x68, KEY_9_PAD: 0x69, KEY_F1: 0x70, KEY_F2: 0x71, KEY_F3: 0x72, KEY_F4: 0x73, KEY_F5: 0x74, KEY_F6: 0x75, KEY_F7: 0x76, KEY_F8: 0x77, KEY_F9: 0x78, KEY_F10: 0x79, KEY_F11: 0x7a, KEY_F12: 0x7b, KEY_ESC: 0x1B, KEY_TILDE: 0xc0, KEY_MINUS: 0xbd, KEY_EQUALS: 0xbb, KEY_BACKSPACE: 0x08, KEY_TAB: 0x09, KEY_OPENBRACE: 0xdb, KEY_CLOSEBRACE: 0xdd, KEY_ENTER: 0x0D, KEY_COLON: 0xba, KEY_QUOTE: 0xde, KEY_BACKSLASH: 0xdc, KEY_COMMA: 0xbc, KEY_STOP: 0xbe, KEY_SLASH: 0xBF, KEY_SPACE: 0x20, KEY_INSERT: 0x2D, KEY_DEL: 0x2E, KEY_HOME: 0x24, KEY_END: 0x23, KEY_PGUP: 0x21, KEY_PGDN: 0x22, KEY_LEFT: 0x25, KEY_RIGHT: 0x27, KEY_UP: 0x26, KEY_DOWN: 0x28, KEY_SLASH_PAD: 0x6F, KEY_ASTERISK: 0x6A, KEY_MINUS_PAD: 0x6D, KEY_PLUS_PAD: 0x6B, KEY_ENTER_PAD: 0x0D, KEY_PRTSCR: 0x2C, KEY_PAUSE: 0x13, KEY_EQUALS_PAD: 0x0C, KEY_LSHIFT: 0x10, KEY_RSHIFT: 0x10, KEY_LCONTROL: 0x11, KEY_RCONTROL: 0x11, KEY_ALT: 0x12, KEY_ALTGR: 0x12, KEY_LWIN: 0x5b, KEY_RWIN: 0x5c, KEY_MENU: 0x5d, KEY_SCRLOCK: 0x9d, KEY_NUMLOCK: 0x90, KEY_CAPSLOCK: 0x14,
	
	/** Basic 16 colors
	 *
	 * 0 = Black 			0xff000000
	 * 1 = Blue 			0xff0000aa
	 * 2 = Green 			0xff00aa00
	 * 3 = Cyan 			0xff00aaaa
	 * 4 = Red 				0xffaa0000
	 * 5 = Magenta 			0xff800080
	 * 6 = Brown 			0xff995500
	 * 7 = White 			0xffaaaaaa
	 * 8 = Gray				0xff555555
	 * 9 = LightBlue 		0xff5555ff
	 * 10 = LightGreen		0xff54ff3f
	 * 11 = LightCyan		0xff55ffff
	 * 12 = LightRed		0xffff5555
	 * 13 = LightMagenta	0xffff55ff
	 * 14 = Yellow 			0xffffff55
	 * 15 = BrightWhite		0xffffffff
	 */
	colorCodes: [0xff000000, 0xff0000aa, 0xff00ff00, 0xff00aaaa, 0xffaa0000, 0xff800080, 0xff995500, 0xffaaaaaa, 0xff555555, 0xff5555ff, 0xff54ff3f, 0xff55ffff, 0xffff5555, 0xffff55ff, 0xffffff55, 0xffffffff],

	/** Base64-encoded default font */
	defaultFontData: "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AuP91hUHyjWWdL04hQHN/AVhBoFnuhUZ/W0wAqYAAAAAAwAq/q0FBAWVAA4AJAAoAAAJATYXFTc1MzcjNwcXIxMBByUHFzYeAQYuATcHHgI+AiYHNwMXAScDuf8AQ9Rtf0jGAXEBqvH8hlABXdAOUKohVqWLGmwHeLx/ZwiFaNunaAGeYgLL/dYVCMk1lXW+OIYBzgIudAHzBylUt20JtUdgNaMiR4nSegb7+e5hBoFnAAAAAAEAG//8A6cFMwAiAAASJyYnITcFByY3NiQWFzcuASQGCgESHgE2NycGJyYnITcFB9gEDwYCHLH9t4UMNk0BJm0NrQaE/tzJyzZhrvnrqhHA5K9LAc+x/bdTAi0PQTqtAZybeK8GiDByQ6QHcv6//ov+8MZUXvML029VoK0BYQAAAAABAAABagABADoAwAAFAJwAJgBR/54AKQAzAEUAKQA3AIcAKQA5AD0AKQA6AEkAKQA8AEIAKQBD/2IAKQBH/z4AKQBR/20AKQBX/54ALQBH//MALQBR//IAMABH/+cAMABR/+oAMwA3AB4AMwA8/7sAMwBD/54AMwBH/5oAMwBR/8IANwAzADwANwA3AF4ANwA5ADMANwA6AGkANwA8ADkANwBD/t4ANwBH/y8ANwBKAAwANwBR/wAANwBX/ukANwBb/xIAOQApADMAOQAzAFoAOQA3AJwAOQA5AFIAOQA6AIcAOQA8AFcAOQBD/0UAOQBH/0UAOQBL/9QAOQBR/20AOQBX/4MAOQBb/7MAOgA3ADsAOgBD/0UAOgBH/28AOgBL/+cAOgBR/1sAOgBX/7AAPAA6ADMAPABD/woAPABH/0wAPABL/8QAPABR/0EAPABX/zsASABH/8QASABI/44ASABLAAAASABR/9AAAAAAAAwAlgADAAEECQAAADYAAAADAAEECQABACIARAADAAEECQACAA4ANgADAAEECQADACwARAADAAEECQAEACIARAADAAEECQAFAAYAcAADAAEECQAGACAAdgADAAEECQAHACoAlgADAAEECQAIADgBIAADAAEECQAJAB4AwAADAAEECQAKAEIA3gADAAEECQAMADgBIABLAGUAdgBpAG4AIABLAGkAbgBnADoAIABLAGkAbgBnAHQAaABpAG4AZwBzACAAMgAwADAANwBSAGUAZwB1AGwAYQByAEsAaQBuAGcAdABoAGkAbgBnAHMAIABFAHgAZQB0AGUAcgAgADIAMAAwADcAMQAuADAASwBpAG4AZwB0AGgAaQBuAGcAcwBFAHgAZQB0AGUAcgBLAGkAbgBnAHQAaABpAG4AZwBzACAAQQBwAHIAaQBsACAAMgAwADAANwBLAGUAdgBpAG4AIABLAGkAbgBnACAAMgAwADAANwBDAGEAbABsAGkAZwByAGEAcABoAGkAYwAgAFIAbwB1AG4AZABoAGEAbgBkACAAcwBhAG4AcwAgAHMAZQByAGkAZgBrAGUAdgBpAG4AawBpAG4AZwBAAG0AeQBwAG8AcwB0AG8AZgBmAGkAYwBlAC4AYwBvAC4AdQBrAAAAAgAAAAAAAP9cADAAAAAAAAAAAAAAAAAAAAAAAAAAAABtAAABAgEDAAMABAAFAAYABwAIAAkACgALAAwADQAOAA8AEAARABIAEwAUABUAFgAXABgAGQAaABsAHAAdAB4AHwAgACEAIgAjACQAJQAmACcAKAApACoAKwAsAC0ALgAvADAAMQAyADMANAA1ADYANwA4ADkAOgA7ADwAPQA+AD8AQABCAEMARABFAEYARwBIAEkASgBLAEwATQBOAE8AUABRAFIAUwBUAFUAVgBXAFgAWQBaAFsAXABdAF4AYACFAIcAqwC0ALUAtgC3ALgA7wDwAPQA9QD2AQQFLm51bGwQbm9ubWFya2luZ3JldHVybgRFdXJvAAAAAf//AAI=",

	init: function(width, height) {
		// Some cross-browser compatibility stuff below
		if (!Date.now) {
			Date.now = function now() { return new Date().getTime(); };
		}

		AudioContext = window.AudioContext || window.webkitAudioContext || false;

		var audioTest = document.createElement('audio');
		chao.canPlayOgg = !!(audioTest.canPlayType && audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, ''));

		// Engine inits:
		var canvas = document.createElement("canvas");
		canvas.setAttribute("width", width);
		canvas.setAttribute("height", height);
		canvas.style.backgroundColor = "black";
		document.body.appendChild(canvas);

		var context		= canvas.getContext("2d");
		
		context.imageSmoothingEnabled = false; // this is for pixel art games

		chao.canvas = {
			canvas: 	canvas,
			context: 	context,
			width: 		width,
			height: 	height,
		};
	 
		canvas.addEventListener("mousedown", chao.onMouseDown);
		window.addEventListener("mouseup", chao.onMouseUp);
		canvas.addEventListener("mousemove", chao.onMouseMove);
		window.addEventListener('contextmenu',function(e){e.preventDefault();});
		window.addEventListener("wheel", chao.onMouseWheel);
		canvas.addEventListener("touchstart", chao.onTouchStart);
		canvas.addEventListener("touchmove", chao.onTouchMove);
		window.addEventListener("touchend", chao.onTouchEnd);
		window.addEventListener("keyup", chao.onKeyUp);
		window.addEventListener("keydown", chao.onKeyDown);

		chao.loggingEnabled 	= true;
		
		chao.screenWidth 		= width;
		chao.screenHeight 		= height;

		chao.installVisibilityHandler();
		chao.hasFocus 			= true;

		chao.images				= [];

		chao.pauseOnFadeEnabled	= true;
		chao.imagePauseFade 	= null;
		chao.updatePauseFadeImage();

		chao.onAssetsLoaded		= undefined;

		chao.updateInterval 	= null;
		chao.setFPS(60);
		chao.lastTime 			= Date.now();
		chao.timeDelta 			= 0.0;
		chao.timeScale 			= 1.0;

		chao.countFPS 			= false;
		chao.currentFPS 		= 0;
		chao.FPSCounter 		= 0;
		chao.FPSTimer 			= 0;

		if(AudioContext){
			chao.audioContext 		= new AudioContext();
		}
		chao.sounds 			= [];
		chao.currentMusic 		= null;
		chao.muted 				= false;
		chao.muteOnFocusLost	= true;
		chao.wasMutedOnFocusLost= false;

		chao.keys 				= [];
		chao.justPressed 		= [];
		chao.justReleased 		= [];

		chao.touches			= [];

		chao.mouse 						= {};
		chao.mouse.x 					= -1;
		chao.mouse.y 					= -1;
		chao.mouse.wheelDelta 			= 0;
		chao.mouse.pressed 				= false;
		chao.mouse.justPressed			= false;
		chao.mouse.justReleased			= false;
		chao.mouse.pressedRight 		= false;
		chao.mouse.justPressedRight		= false;
		chao.mouse.justReleasedRight	= false;
		chao.mouse.pressedMiddle 		= false;
		chao.mouse.justPressedMiddle	= false;
		chao.mouse.justReleasedMiddle	= false;

		chao.resetInput();

		chao.loadedFontsNum 			= 0;
		chao.font 						= chao.loadBase64Font(chao.defaultFontData);

		chao.focusedEntity				= null;
		chao.entitiesToDestroy			= [];

		chao.currentState				= undefined;
		chao.loadingState				= undefined;

		chao.setLoadingState({
			draw: function(){
				var barWidth 		= chao.screenWidth * 0.6;
				var barHeight 		= barWidth * 0.1;
				var barX 			= chao.screenWidth / 2 - barWidth / 2;
				var barY 			= chao.screenHeight - (barHeight * 1.25);
				var barColor 		= chao.makeColor(255, 255, 255);

				chao.clearToColor(chao.canvas, chao.makeColor(30, 30, 30));
				chao.drawRect(chao.canvas, barX - 4, barY - 4, barWidth + 8, barHeight + 8, barColor);
				chao.drawRectFill(chao.canvas, barX, barY, barWidth * chao.getLoadingProgress(), barHeight, barColor)
			}
		});
		chao.switchState({});

	},

	setFPS: function(FPS){
		chao.updateInterval = setInterval("chao.update()", 1000/FPS);
	},

	clearScreen: function(){
		if (chao.backgroundColor=="none") { 
			chao.canvas.context.clearRect(0, 0, chao.canvas.canvas.width, chao.canvas.canvas.height); 
		}else{ 
			chao.canvas.context.fillStyle = chao.backgroundColor; 
			chao.canvas.context.fillRect(0, 0, chao.canvas.canvas.width, chao.canvas.canvas.height); 
		}
	},

	onFocusChange: function(isFocused){
		if(chao.hasFocus == isFocused){
			return;
		}
		if(isFocused){
			chao.hasFocus 	= true;
			chao.lastTime 	= Date.now();
			chao.resetInput();
			if(chao.muteOnFocusLost){
				chao.setMute(chao.wasMutedOnFocusLost);
			}
		} else {
			chao.hasFocus 	= false;
			chao.wasMutedOnFocusLost = chao.muted;
			if(chao.muteOnFocusLost){
				chao.setMute(true);
			}
		}
	},

	resetInput: function(){
		for (var i = 0; i < 0x80; ++i) {
			chao.keys[i] 			= false;
			chao.justPressed[i] 	= false;
			chao.justReleased[i] 	= false;
		}

		chao.mouse.pressed 				= false;
		chao.mouse.pressedRight 		= false;
		chao.mouse.pressedMiddle 		= false;
	},
	 
	update: function(){

		chao.clearScreen();

		chao.timeDelta 	= (Date.now() - chao.lastTime) * .001;
		chao.lastTime 	= Date.now();

		if(chao.countFPS){
			chao.FPSCounter ++;
			chao.FPSTimer += chao.timeDelta;
			if(chao.FPSTimer >= 1.0){
				chao.FPSTimer -= 1.0;
				chao.currentFPS = chao.FPSCounter;
				chao.FPSCounter = 0;
			}
		}


		var stateToProcess = chao.currentState;

		if(chao.getLoadingProgress() < 1.0){
			stateToProcess = chao.loadingState;
		} else {
			if(chao.onAssetsLoaded){
				chao.onAssetsLoaded();
				chao.onAssetsLoaded = undefined;
			}
		}

		stateToProcess.rootEntity.draw(0, 0, 1.0);
		if(stateToProcess.draw){
			stateToProcess.draw();
		}

		if(chao.hasFocus || !chao.pauseOnFadeEnabled){
			stateToProcess.rootEntity.update();
			if(stateToProcess.update){
				stateToProcess.update();
			}

			chao.updateKeys();
			chao.updateMouse();
			chao.updateTouches();
		} else if(chao.getLoadingProgress() >= 1){
			chao.drawImage(chao.canvas, chao.imagePauseFade, 0, 0);
		}

		for(var i = 0; i < chao.entitiesToDestroy.length; ++i){
			chao.entitiesToDestroy[i].destroy();
			if(chao.entitiesToDestroy[i].parent){
				chao.entitiesToDestroy[i].parent.remove(chao.entitiesToDestroy[i]);
			}
		}
		chao.entitiesToDestroy = [];
	},

	switchState: function(newState){
		chao.focusedEntity = null;

		chao.destroyState(chao.currentState);
		
		chao.currentState = newState;
		if(chao.getLoadingProgress() < 1.0){
			chao.onAssetsLoaded = this.initCurrentState;
		} else {
			chao.initState(chao.currentState);
		}
	},

	setLoadingState: function(newLoadingState){
		chao.destroyState(chao.loadingState);

		chao.loadingState = newLoadingState;
		chao.initState(newLoadingState);
		
	},

	initState: function(state){
		state.rootEntity = new Entity("Root", 0, 0);
		state.rootEntity.width = chao.screenWidth;
		state.rootEntity.width = chao.screenHeight;
		state.add = function(entity){
			this.rootEntity.add(entity);
		};
		state.remove = function(entity){
			this.rootEntity.remove(entity);
		};

		if(state.create){
			state.create();
		}
	},

	initCurrentState: function(){
		chao.initState(chao.currentState);
	},

	getCurrentState: function(){
		return chao.getLoadingProgress() >= 1.0 ? chao.currentState : chao.loadingState;
	},

	destroyState: function(state){
		if(!state){
			return;
		}

		if(state.destroy){
			state.destroy();
		}
		state.rootEntity.destroy();
		state.rootEntity = null;
	},

	destroyEntity: function(entity){
		chao.entitiesToDestroy.push(entity);
	},

	createImage: function(key, width, height){
		var newCanvas 		= document.createElement("canvas");
		var newContext 		= newCanvas.getContext("2d");
		newCanvas.width 	= width;
		newCanvas.height 	= height;

		var newImage 	= {
			key: 			key,
			canvas: 		newCanvas,
			context: 		newContext,
			width: 			width,
			height: 		height,
			rotationOrigin:	{x:0.5, y:0.5}, // {0.0 - 1.0}
			ready: 			true,
		};

		if(key){
			chao.addImage(newImage);
		}

		return newImage;
	},

	loadImage: function(key, path){
		var img = new Image();
		img.src = path;
		var newCanvas 	= document.createElement("canvas");
		var newContext 	= newCanvas.getContext("2d");
		var newImage 	= {
			key: 			key,
			canvas: 		newCanvas,
			context: 		newContext,
			width: 			-1,
			height: 		-1,
			rotationOrigin:	{x:0.5, y:0.5}, // {0.0 - 1.0}
			ready: 			false,
		};
		
		if(key){
			chao.addImage(newImage);
		}

		img.onload = function(){
			newImage.canvas.width 	= img.width;
			newImage.canvas.height 	= img.height;
			newImage.context.drawImage(img, 0, 0);
			newImage.width 	= img.width;
			newImage.height = img.height;
			newImage.ready 	= true;
		};

		return newImage;
	},

	addImage: function(image){
		var oldImage = -1;

		for(var i = 0; i < chao.images.length; ++i){
			if(chao.images[i].key == image.key){
				oldImage = i;
				break;
			}
		}

		if(oldImage != -1){
			chao.images.splice(chao.images(1, 1));
		}

		chao.images.push(image);
	},

	getImage: function(key){
		if(typeof key === "string" || key instanceof String){
			for(var i = 0; i < chao.images.length; ++i){
				if(chao.images[i].key == key){
					return chao.images[i];
				}
			}
		}

		return key;
	},

	drawImage: function(target, image, x, y, alpha, scaleX, scaleY){

		scaleX = scaleX || 1;
		scaleY = scaleY || 1;

		target.context.save();
		target.context.globalAlpha = alpha || 1.0;
		target.context.scale(scaleX, scaleY);
		target.context.drawImage(image.canvas, x, y);
		target.context.restore();
	},

	drawImagePart: function(target, image, x, y, rect, angle, scaleX, scaleY, alpha){
		angle 	= angle || 0;
		alpha 	= alpha || 1;
		scaleX 	= scaleX || 1;
		scaleY 	= scaleY || 1;

		var w 				= rect.width;// * scaleX;
		var h 				= rect.height;// * scaleY;
		var rotationPivot	= {x:(x+(w*image.rotationOrigin.x)), y:(y+(h*image.rotationOrigin.y))};

		target.context.save();
		target.context.globalAlpha = alpha;

		target.context.translate(rotationPivot.x, rotationPivot.y);
		target.context.rotate(chao.rad2deg(angle));
		target.context.translate(-rotationPivot.x, -rotationPivot.y);

		x = scaleX >= 0 ? x : x - w * scaleX;
		y = scaleY >= 0 ? y : y - h * scaleY;
		target.context.translate(x, y);

		target.context.scale(scaleX, scaleY);

		target.context.drawImage(image.canvas,
			rect.x, rect.y, rect.width, rect.height,
			0, 0, w, h);
		
		target.context.restore();
	},

	setFillStyle: function(image, color){
		if(typeof color === "string"){
			image.context.fillStyle = color;	
		} else {
			image.context.fillStyle = chao.getRGBAString(color);
		}
	},

	setStrokeStyle: function(image, color, width){
		width = width || image.context.lineWidth;
		image.context.lineWidth 	= width;
		if(typeof color === "string"){
			image.context.strokeStyle = color;
		} else {
			image.context.strokeStyle = chao.getRGBAString(color);
		}
	},

	makeColor: function(r, g, b, a){
		a = a || 255;
		return (a<<24)|((r&0xff)<<16)|((g&0xff)<<8)|((b&0xff));
	},

	makeColorf: function(r, g, b, a){
		a = a || 1;
		return chao.makeColor(a*255, r*255, g*255, b*255);
	},

	getRGBAString: function(hexColor){
		var r = (hexColor>>16)&0xff;
		var g = (hexColor>>8)&0xff;
		var b = hexColor&0xff;
		var a = (hexColor>>>24) / 255;
		return "rgba(" + r + "," + g + "," + b + "," + a + ")";
	},

	getPixel: function(image, x, y){
		var data = image.context.getImageData(x, y, 1, 1).data;
		return (data[3]<<24)|((data[0]&0xff)<<16)|((data[1]&0xff)<<8)|((data[2]&0xff));
	},

	putPixel: function(image, x, y, color){
		chao.setFillStyle(color);
		image.context.fillRect(x, y, 1, 1);
	},

	clearImage: function(image){
		image.context.clearRect(0, 0, image.width, image.height);
	},

	clearToColor: function(image, color){
		image.context.clearRect(0, 0, image.width, image.height);
		chao.setFillStyle(image, color);
		image.context.fillRect(0, 0, image.width, image.height);
	},

	drawLine: function(image, x1, y1, x2, y2, color, width){
		chao.setStrokeStyle(image, color, width);
		image.context.beginPath();
		image.context.moveTo(x1, y1);
		image.context.lineTo(x2, y2);
		image.context.closePath();
		image.context.stroke();
	},

	drawRect: function(image, x1, y1, w, h, color, width){
		chao.setStrokeStyle(image, color, width);
		image.context.strokeRect(x1, y1, w, h);
	},

	drawRectFill: function(image, x1, y1, w, h, color){
		chao.setFillStyle(image, color);
		image.context.fillRect(x1, y1, w, h);
	},

	drawPolygonLines: function(image, vertices, points){
		image.context.beginPath();
		for (var i = 0; i < vertices; i++){
			if(i) {
				image.context.lineTo(points[i*2],points[i*2+1]);
			} else {
				image.context.moveTo(points[i*2],points[i*2+1]);
			}
		}
		image.context.closePath();
	},

	drawPolygon: function(image, vertices, points, color, width){
		chao.setStrokeStyle(image, color, width);
		chao.drawPolygonLines(image, vertices, points);
		image.context.stroke();
	},

	drawPolygonFill: function(image, vertices, points, color){
		chao.setFillStyle(image, color);
		chao.drawPolygonLines(image, vertices, points);
		image.context.fill();
	},

	updatePauseFadeImage: function(){
		var playWidth 	= chao.screenWidth * 0.3;
		var playHeight  = chao.screenWidth * 0.3;
		var center 		= { x: chao.screenWidth/2, y: chao.screenHeight/2 };

		var points	= [
			center.x - playWidth/2, center.y - playHeight/2,
			center.x + playWidth/2, center.y,
			center.x - playWidth/2, center.y + playHeight/2
		];
		chao.imagePauseFade = chao.createImage("chao_pause_fade", chao.screenWidth, chao.screenHeight);
		chao.clearToColor(chao.imagePauseFade, chao.makeColor(0, 0, 0, 160));
		chao.drawPolygonFill(chao.imagePauseFade, 3, points, chao.makeColor(255, 255, 255, 170));
	},

	loadFont: function(path){
		var s = document.createElement('style');
		var fontname = "font" + (chao.loadedFontsNum++);
		s.id = fontname;
		s.type = "text/css";
		document.head.appendChild(s);
		s.textContent = "@font-face { font-family: " + fontname + "; src:url('" + path + "');}";
		return {element: s, name: fontname, type: "fnt"};
	},

	loadBase64Font: function(data){
		var s = document.createElement('style');
		var fontname = "font" + (chao.loadedFontsNum++);
		s.id = fontname;
		s.type = "text/css";
		document.head.appendChild(s);
		s.textContent = "@font-face { font-family: " + fontname + "; src:url('data:application/font-woff;base64," + data + "') format('woff');}";
		return {element: s, name: fontname, type: "fnt"};
	},

	drawText: function(image, font, text, x, y, size, color, align, outlineColor, outlineSize){
		color 			= color || 0xff000000;
		align 			= align || "left";
		outlineColor	= outlineColor || 0xff000000;
		outlineSize 	= outlineSize || 0;

		image.context.font 		= size.toFixed() + "px " + font.name;
		image.context.textAlign = align;

		// var textSize = image.context.measureText(text); // for later

		chao.setFillStyle(image, color);
		image.context.fillText(text, x, y + size);
		if(outlineSize > 0){
			chao.setStrokeStyle(image, outlineColor, outlineSize);
			image.context.strokeText(text, x, y+size);
		}
	},

	getTextSize: function(image, text){
		return {
			width: 	image.context.measureText(text).width,
			height:	image.context.measureText("M").width // well, it seems good enough.
		};
	},

	loadSound: function(key, path, volume, looped){

		if(!chao.audioContext){
			return;
		}

		if(chao.getSound(key) !== null){
			chao.log("There is already a sound loaded with this key: \"" + key + "\".");
		}

		var sound 	= {};

		sound.key 			= key;
		sound.volumeNode 	= chao.audioContext.createGain();
		sound.panNode 		= chao.audioContext.createStereoPanner ? chao.audioContext.createStereoPanner() : chao.audioContext.createPanner();
		sound.soundNode 	= null;
		sound.path 			= null;
		sound.buffer 		= null;
		sound.loop 			= false;
		sound.playing 		= false;
		sound.isMusic 		= false;

		sound.volume 		= volume || 1;
		sound.pan 			= 0;
		sound.startTime		= 0;
		sound.startOffset 	= 0;

		sound.looped 		= looped || false;

		sound.ready 		= false;

		var xhr = new XMLHttpRequest();
		xhr.open("GET", path, true);
		xhr.responseType = "arraybuffer";
		xhr.addEventListener("load", function() {
			chao.audioContext.decodeAudioData(
				xhr.response, 
				function(buffer){
					sound.buffer 	= buffer;
					sound.ready 	= true;
				},
				function(error){
					chao.log("Sound could not be decoded: \"" + path + "\".");
				});
		});
		xhr.send();

		chao.sounds.push(sound);

		return sound;
	},

	loadMusic: function(key, oggPath, fallbackFormatPath, volume){
		var sound;
		if(chao.canPlayOgg){
			sound = chao.loadSound(key, oggPath, volume, true);
		} else if(fallbackFormatPath){
			sound = chao.loadSound(key, fallbackFormatPath, volume, true);
		}

		sound.isMusic = true;
	},

	getSound: function(key){
		if(typeof key === "string" || key instanceof String){
			for(var i = 0; i < chao.sounds.length; ++i){
				if(chao.sounds[i].key === key){
					return chao.sounds[i];
				}
			}

			return null;
		}

		return key;
	},

	playSound: function(key){
		if(!chao.audioContext){
			return;
		}
		var sound = chao.getSound(key);
		if(!sound){
			chao.log("There is no loaded sound with this key: \"" + key + "\".");
		}

		if(sound.isMusic){
			if(sound == chao.currentMusic && sound.playing){
				return;
			}
			chao.currentMusic = sound;
		}

		sound.soundNode 		= chao.audioContext.createBufferSource();
		sound.soundNode.buffer 	= sound.buffer;
		sound.soundNode.loop 	= sound.looped;
		sound.soundNode.addEventListener("ended", function(){sound.playing = false;});
		sound.playing 			= true;

		sound.startTime 		= chao.audioContext.currentTime;

		sound.soundNode.connect(sound.volumeNode);
		sound.volumeNode.connect(sound.panNode);
		sound.panNode.connect(chao.audioContext.destination);

		if(sound.volumeNode.gain.setValueAtTime){
			sound.volumeNode.gain.setValueAtTime(sound.volume, 0);
		} else {
			sound.volumeNode.gain.value = sound.volume;
		}

		if(sound.isMusic || !chao.muted){
			sound.soundNode.start(0, sound.startOffset % sound.buffer.duration);
		}
		if(sound.isMusic && chao.muted){
			chao.pauseSound(sound);
		}
	},

	setMute: function(value){
		if(chao.muted != value){
			chao.muted = value;

			if(value){
				for(var i = 0; i < chao.sounds.length; ++i){
					if(chao.sounds[i] == chao.currentMusic){
						continue;
					}

					chao.stopSound(chao.sounds[i]);
				}
			}

			if(chao.currentMusic !== null){
				if(value){
					chao.pauseSound(chao.currentMusic);
				} else {
					chao.playSound(chao.currentMusic);
				}
			}
		}
	},

	toggleMute: function(){
		chao.setMute(!chao.muted);
	},

	stopSound: function(key){
		if(!chao.audioContext){
			return;
		}
		var sound = chao.getSound(key);
		if(sound.playing){
			sound.soundNode.stop();
		}
		sound.startOffset = 0;
	},

	getSoundPosition: function(key){
		if(!chao.audioContext){
			return;
		}
		var sound = chao.getSound(key);
		return chao.audioContext.currentTime - sound.startTime;
	},

	setSoundPosition: function(key, position){
		if(!chao.audioContext){
			return;
		}
		var sound = chao.getSound(key);
		sound.startOffset = position;
		if(sound.playing){
			chao.playSoundFrom(key, position);
		}
	},

	playSoundFrom: function(key, position){
		if(!chao.audioContext){
			return;
		}
		var sound = chao.getSound(key);
		
		if(sound.playing){
			sound.soundNode.stop(0);
		}
		sound.startOffset = position;
		playSound(sound);
	},

	pauseSound: function(key){
		if(!chao.audioContext){
			return;
		}
		var sound = chao.getSound(key);
		if(sound.playing){
			sound.soundNode.stop();
			sound.startOffset += chao.audioContext.currentTime - sound.startTime;
			sound.playing = false;
		}
	},

	restartSound: function(key){
		if(!chao.audioContext){
			return;
		}
		var sound = chao.getSound(key);
		if(sound.playing){
			sound.soundNode.stop();
		}
		sound.startOffset = 0;
		playSound(sound);
	},

	updateMouse: function(e){
		chao.mouse.wheelDelta 			= 0;
		chao.mouse.justPressed			= false;
		chao.mouse.justReleased			= false;
		chao.mouse.justPressedRight		= false;
		chao.mouse.justReleasedRight	= false;
		chao.mouse.justPressedMiddle	= false;
		chao.mouse.justReleasedMiddle	= false;
	},

	getEntityUnderMouse: function(){
		return chao.getCurrentState().rootEntity.getEntityAt(chao.mouse.x, chao.mouse.y);
	},

	handleMouseDown: function(button){
		switch(button){
			case 1:
				chao.mouse.pressed = chao.mouse.justPressed = true;
				chao.focusedEntity = chao.getEntityUnderMouse();
				if(chao.focusedEntity != null){
					chao.focusedEntity.onClick();
				}
				break;
			case 2:
				chao.mouse.pressedMiddle = chao.mouse.justPressedMiddle = true;
				break;
			case 3:
				chao.mouse.pressedRight = chao.mouse.justPressedRight = true;
				break;
		}
	},

	handleMouseUp: function(button){
		switch(button){
			case 1:
				chao.mouse.pressed 				= false;
				chao.mouse.justReleased 		= true;
				if(chao.focusedEntity != null){
					if(chao.getEntityUnderMouse() != chao.focusedEntity){
						chao.focusedEntity.onCancel();
					} else {
						chao.focusedEntity.onRelease();
					}
					chao.focusedEntity = null;
				}
				break;
			case 2:
				chao.mouse.pressedMiddle 		= false;
				chao.mouse.justReleasedMiddle 	= true;
				break;
			case 3:
				chao.mouse.pressedRight 		= false;
				chao.mouse.justReleasedRight 	= true;
				break;
		}
	},

	handleMouseMove: function(x, y){
		chao.mouse.x = x;
		chao.mouse.y = y;

		if(chao.focusedEntity != null){
			if(!chao.focusedEntity.keepClickFocus){
				var currentEntity = chao.getEntityUnderMouse();
				if(currentEntity != chao.focusedEntity){
					chao.focusedEntity.onCancel();
					chao.focusedEntity = currentEntity;
				}
			}

			if(chao.focusedEntity != null){
				chao.focusedEntity.onMove();
			}
		}
	},

	onMouseDown: function(e){
		chao.handleMouseDown(e.which);
		e.preventDefault();
	},

	onMouseUp: function(e){
		chao.handleMouseUp(e.which);
		e.preventDefault();
	},

	onMouseMove: function(e){
		chao.handleMouseMove(e.offsetX, e.offsetY);
		e.preventDefault();
	},
	
	onMouseWheel: function(e){
		chao.mouse.wheelDelta = e.deltaY;
		e.preventDefault();
	},

	setMouseVisibility: function(value){
		canvas.canvas.style.cursor = value ? "auto" : "none";
	},

	updateTouches: function(){
		for(var i = 0; i < chao.touches.length; ++i){
			chao.touches[i].justPressed = false;
		}
	},

	onTouchStart: function(e){
		var touches = e.changedTouches;
		for(var i = 0; i < touches.length; ++i){
			var newTouch = {
				id: touches[i].identifier,
				x: touches[i].pageX - chao.canvas.canvas.offsetLeft,
				y: touches[i].pageY - chao.canvas.canvas.offsetTop,
				justPressed: true,
				isMouse: chao.touches.length == 0
			};
			chao.touches.push(newTouch);

			if(newTouch.isMouse){
				chao.handleMouseDown(1);
			}

			chao.mouse.x = newTouch.x;
		}

		if(e.cancelable){
			e.preventDefault();
		}
	},

	onTouchMove: function(e){
		var touches = e.changedTouches;
		for(var i = 0; i < touches.length; ++i){
			var touch = chao.getTouch(touches[i].identifier);
			if(touch != null){
				touch.x = touches[i].pageX - chao.canvas.canvas.offsetLeft;
				touch.y = touches[i].pageY - chao.canvas.canvas.offsetTop;

				if(touch.isMouse){
					chao.handleMouseMove(touch.x, touch.y);
				}
			}
		}
		if(e.cancelable){
			e.preventDefault();
		}
	},

	onTouchEnd: function(e){
		var touches = e.changedTouches;
		for(var i = 0; i < touches.length; ++i){
			var touch = chao.getTouch(touches[i].identifier);
			if(touch != null){
				if(touch.isMouse){
					chao.handleMouseUp(1);
				}

				var index = chao.touches.indexOf(touch);
				chao.touches.splice(index, 1); // BALEETED!
			}
		}

		if(e.cancelable){
			e.preventDefault();
		}
	},

	getTouch: function(id){
		for(var i = 0; i < chao.touches.length; ++i){
			if(chao.touches[i].id == id){
				return chao.touches[i];
			}
		}
		return null;
	},

	updateKeys: function(){
		for (var i = 0; i < 0x80; ++i){
			chao.justPressed[i] = false;
			chao.justReleased[i] = false;
		}
	},

	onKeyDown: function(e){
		if(!chao.keys[e.keyCode]){
			chao.justPressed[e.keyCode] = true;
		}
		chao.keys[e.keyCode] = true;

		e.preventDefault();
	},

	onKeyUp: function(e){
		chao.justReleased[e.keyCode] = true;
		chao.keys[e.keyCode] = false;

		e.preventDefault();
	},

	getLoadingProgress: function(){
		var allData 	= chao.images.length + chao.sounds.length;
		var loadedData 	= 0;

		for(var i = 0; i < chao.images.length; ++i){
			if(chao.images[i].ready){
				loadedData ++;
			}
		}

		for(var i = 0; i < chao.sounds.length; ++i){
			if(chao.sounds[i].ready){
				loadedData ++;
			}
		}

		return loadedData / allData;
	},

	getTimeDelta : function() {
		return this.timeDelta * this.timeScale;
	},

	getUnscaledDelta : function() {
		return this.timeDelta;
	},

	getRandom: function(Max) { 
		Max -= 1;
		return Math.round(Max*Math.random()); 
	},

	rad2deg: function(radians){
		return radians/(180/Math.PI);
	},

	log: function(thingie){
		if(chao.loggingEnabled){
			console.log(thingie);
		}
	},

	logHierarchy: function(entity, indent){
		var logString = chao.logEntity(entity, 0);
		chao.log(logString);
	},

	logEntity: function(entity, indent){

		entity 	= entity || chao.getCurrentState().rootEntity;
		indent 	= indent || 0;

		var entityLog = "";
		for(var i = 0; i < indent; ++i){
			entityLog += "- ";
		}
		entityLog += entity.name;
		if(entity.components.length > 0){
			entityLog += " (";
			for(var i = 0; i < entity.components.length; ++i){
				entityLog += entity.components[i].name;
				if(i < entity.components.length - 1) entityLog += ", ";
			}
			entityLog += ")";
		}

		for(var i = 0; i < entity.children.length; ++i){
			entityLog += chao.logEntity(entity.children[i], indent + 1);
		}

		return "\n" + entityLog;
	},

	installVisibilityHandler: function(){

		if(chao.visibilityHandlerInstalled){
			chao.log("Visibility Handler is already installed!");
			return;
		}
		
		chao.visibilityHandlerInstalled = true;

		var hiddenVar;
		
		if (document.hidden !== undefined){
			hiddenVar = "visibilitychange";
		} else {
			var vendors = [ "webkit", "moz", "ms" ];

			vendors.forEach(function (prefix){
				if (document[prefix + "Hidden"] !== undefined){
					document.hidden = function (){
						return document[prefix + "Hidden"];
					};
					hiddenVar = prefix + "visibilitychange";
				}
			});
		}

		if(hiddenVar){
			document.addEventListener(hiddenVar, function(event){
				if(document.hidden || event.type === "pause"){
					chao.onFocusChange(false);
				} else {
					chao.onFocusChange(true);
				}
			}, false);
		}

		window.onblur = function(){
			chao.onFocusChange(false);
		}
		window.onfocus = function(){
			chao.onFocusChange(true);
		}
	},

};

/**
 * A basic game entity.
 *
 * @class
 * @param {float} x - horizontal position of the entity
 * @param {float} y - vertical position of the entity
 */
function Entity(name, x, y){
	this.name 			= name || "Entity",
	this.x 				= x || 0,
	this.y 				= y || 0,
	this.alpha 			= 1.0;
	this.width 			= 0,
	this.height 		= 0,
	this.scaleX 		= 1.0;
	this.scaleY 		= 1.0;
	this.rotation 		= 0.0;
	this.children 		= [],
	this.components 	= [],
	this.parent 		= null,
	this.visible 		= true,
	this.clickable 		= false,
	this.keepClickFocus	= false;

	this.destroy = function(){
		for(var i = 0; i < this.components.length; ++i){
			if(this.components[i].destroy){
				this.components[i].destroy();
			}
		}

		for(var i = 0; i < this.children.length; ++i){
			this.children[i].destroy();
		}

		this.children	= [];
		this.components	= [];
	}

	this.draw = function(x, y, alpha){
		for(var i = 0; i < this.components.length; ++i){
			if(this.components[i].draw){
				this.components[i].draw(x, y, alpha);
			}
		}

		for(var i = 0; i < this.children.length; ++i){
			if(this.children[i].draw){
				this.children[i].draw(this.x + x, this.y + y, this.alpha * alpha);
			}
		}
	}

	this.update = function(){
		for(var i = 0; i < this.components.length; ++i){
			if(this.components[i].update){
				this.components[i].update();
			}
		}

		for(var i = 0; i < this.children.length; ++i){
			if(this.children[i].update){
				this.children[i].update();
			}
		}
	}

	this.add = function(child){
		this.children.push(child);
		child.parent = this;
	}

	this.remove = function(child){
		if(child.parent === this){
			this.children.splice(this.children.indexOf(child), 1);
		}
	}

	this.addComponent = function(component){
		if(!component.entity){
			component.entity = this;
			component.create();
			this.components.push(component);

			return component;
		}else{
			chao.log("Hey, this component is already bound to an Entity: " + component.entity);
		}

		return null;
	}

	this.getComponentByName = function(componentName){
		for(var i = 0; i < this.components.length; ++i){
			if(this.components[i].name === componentName){
				return this.components[i];
			}
		}

		return null;
	}

	this.removeComponent = function(component){
		if(component.entity === this){
			this.components.splice(this.components.indexOf(component), 1);
		} else {
			chao.log("Entity " + this + " have no such component: " + component);
		}
	}

	this.removeComponentByName = function(componentName){
		this.removeComponent(this.getComponentByName(componentName));
	}

	this.onClick = function(){
		var relativeX = chao.mouse.x - this.x;
		var relativeY = chao.mouse.y - this.y;
		for(var i = 0; i < this.components.length; ++i){
			if(this.components[i].onClick){
				this.components[i].onClick(relativeX, relativeY);
			}
		}
	}

	this.onMove = function(){
		var relativeX = chao.mouse.x - this.x;
		var relativeY = chao.mouse.y - this.y;
		for(var i = 0; i < this.components.length; ++i){
			if(this.components[i].onMove){
				this.components[i].onMove(relativeX, relativeY);
			}
		}
	}

	this.onCancel = function(){
		for(var i = 0; i < this.components.length; ++i){
			if(this.components[i].onCancel){
				this.components[i].onCancel();
			}
		}
	}

	this.onRelease = function(){
		var relativeX = chao.mouse.x - this.x;
		var relativeY = chao.mouse.y - this.y;
		for(var i = 0; i < this.components.length; ++i){
			if(this.components[i].onRelease){
				this.components[i].onRelease(relativeX, relativeY);
			}
		}
	}

	this.alignToParent = function(anchorX, anchorY, alignX, alignY) {
		this.alignToParentHorizontally(anchorX, alignX);
		this.alignToParentVertically(anchorY, alignY);
	}
	
	
	this.alignToParentHorizontally = function(anchorX, alignX) {
		if (this.parent != null) {
			this.x = Math.ceil((this.parent.width * (alignX || 0.5)) - (this.width * (anchorX || 0.5)));
		}
	}
	
	this.alignToParentVertically = function(anchorY, alignY) {
		if (this.parent != null) {
			this.y = Math.ceil((this.parent.height * (alignY || 0.5)) - (this.height * (anchorY || 0.5)));
		}
	}

	this.getScreenX = function(){
		return this.parent == null ? this.x : this.x + this.parent.getScreenX();
	}

	this.getScreenY = function(){
		return this.parent == null ? this.y : this.y + this.parent.getScreenY();
	}

	this.getEntityAt = function(x, y){
		if(!this.visible){
			return null;
		}

		for(var i = this.children.length - 1; i >= 0 ; --i){
			var child = this.children[i].getEntityAt(x, y);

			if(child !== null){
				return child;
			}
		}

		var screenX = this.getScreenX();
		var screenY = this.getScreenY();

		if(this.clickable 
			&& x >= screenX && x <= screenX + this.width*this.scaleX
			&& y >= screenY && y <= screenY + this.height*this.scaleY)
		{
			return this;
		}

		return null;
	}
}


/**
 * Renders images, static and animated.
 *
 * @class
 * @param key - name/id of the image to be used
 */
function ComponentImage(key, frameWidth, frameHeight){
	this.name 				= "Image";
	this.entity 			= null;
	this.image 				= null;
	this.imageKey 			= key;

	this.frameWidth 		= frameWidth || 0;
	this.frameHeight 		= frameHeight || 0;

	this.flipX 				= false;
	this.flipY 				= false;

	this.anims 				= [];
	this.currentAnim		= -1;
	this.currentFrame 		= 0;
	this.animTimer 			= 0;
	this.animPaused 		= false;

	this.updateOnImageLoad 	= false;

	this.create = function(){
		this.setImage(chao.getImage(this.imageKey), this.frameWidth, this.frameHeight);
	}

	this.draw = function(x, y, alpha){
		if(!this.image){
			return;
		}

		if(!this.entity.visible){
			return;
		}

		var anim = {key: "dummy", frames: [0], delay: 0, loop: true};
		if(this.currentAnim != -1){
			anim = this.anims[this.currentAnim];
		}

		var drawX 		= this.entity.x + x;
		var drawY 		= this.entity.y + y;
		var drawAlpha	= this.entity.alpha * alpha;
		var drawScaleX 	= this.flipX ? -this.entity.scaleX : this.entity.scaleX;
		var drawScaleY 	= this.flipY ? -this.entity.scaleY : this.entity.scaleY;
		if(drawAlpha > 1.0) drawAlpha = 1.0;

		var drawArea = {x:0, y:0, width:this.entity.width, height:this.entity.height};

		if(this.currentAnim != -1){
			var framesNumX = this.image.width / this.entity.width;
			var frameX = anim.frames[this.currentFrame];
			var frameY = Math.floor(frameX/framesNumX);
			frameX -= frameY * framesNumX;

			drawArea.x = frameX * this.entity.width;
			drawArea.y = frameY * this.entity.height;
		}

		chao.drawImagePart(chao.canvas, this.image, 
			drawX, drawY, drawArea, 
			this.entity.rotation, drawScaleX, drawScaleY, 
			drawAlpha);
	}

	this.update = function(){

		if(this.updateOnImageLoad && this.image.ready){
			this.updateOnImageLoad = false;
			if(this.entity.width == -1){
				this.entity.width = this.image.width;
			}
			if(this.entity.height == -1){
				this.entity.height = this.image.height;
			}
		}

		if(this.currentAnim != -1 && !this.animPaused){
			var anim = this.anims[this.currentAnim];

			this.animTimer += chao.getTimeDelta();

			if(this.animTimer >= anim.delay){
				this.animTimer -= anim.delay;//= 0;

				this.currentFrame ++;
				if(this.currentFrame >= anim.frames.length){
					if(anim.loop){
						this.currentFrame = 0;
					} else {
						this.currentFrame --;
						this.animPaused = true;
					}
				}
			}
		}
	}

	this.setImage = function(image, frameWidth, frameHeight){
		if(!image){
			return;
		}

		this.image = image

		this.entity.width 	= frameWidth || this.image.width;
		this.entity.height = frameHeight || this.image.height;

		if(!this.image.ready && (!frameWidth || !frameHeight)){
			this.updateOnImageLoad = true;
		}
	}

	this.addAnim = function(key, frames, delay, loop){
		this.anims.push({
			key: 	key,
			frames:	frames,
			delay:	delay,
			loop:	loop,
		});
	}

	this.playAnim = function(key, force){
		for(var i = 0; i < this.anims.length; ++i){
			if(this.anims[i].key === key){
				if(this.currentAnim == i && !force){
					return;
				}

				this.currentAnim 	= i;
				this.currentFrame 	= 0;
				this.animTimer 		= 0;
				this.animPaused 	= false;
				return;
			}
		}

		chao.log("Entity \"" + this.entity.name + "\" has no anim named \"" + key + "\".");
	}

	this.getCurrentAnim = function(){
		if(this.currentAnim >= 0 && this.currentAnim < this.anims.length){
			return this.anims[this.currentAnim];
		}

		return null;
	}

	this.setAnimPause = function(value){
		this.animPaused = value;
	}

	this.setTint = function(rgba){
		// TODO: actually do something here.
	}

}

/**
 * For text rendering.
 *
 * @class
 * @param font - font used to display the text
 * @param text - text to be displayed
 * @param size - size of the text
 */
function ComponentText(font, text, size){
	this.name				= "Text";
	this.entity				= null;
	
	this._text				= text;
	this._font				= font;
	this._size				= size;
	this._color				= 0xff000000;
	this._backgroundColor	= undefined;
	this._align 			= "left";
	this._outlineColor		= 0xffffffff;
	this._outlineSize 		= 0;

	this.image 				= null;
	this.rawText 			= text;	// text without the formatting whatnots

	this.create = function(){
		this.image = chao.createImage(undefined, 1, 1);
		this.changeText();
	}

	this.draw = function(x, y, alpha){
		var drawX 		= this.entity.x + x;
		var drawY 		= this.entity.y + y;
		var drawAlpha	= this.entity.alpha * alpha;

		switch(this.align){
			case "center": drawX -= this.entity.width / 2; break;
			case "right": drawX -= this.entity.width; break;
		}

		chao.drawImage(chao.canvas, this.image, 
			drawX, drawY, 
			drawAlpha, 
			this.entity.scaleX, this.entity.scaleY);
	}

	this.changeText = function(text){
		text = text || this.text;

		var textLines		= text.split("\n");
		var chunks			= [];
		var rawLines		= [];
		var colorStack		= [];
		var currentColor	= this.color;

		this.rawText 		= "";

		for(var i = 0; i < textLines.length; ++i){

			var currentChunk	= "";
			chunks.push([]);

			for(var j = 0; j < textLines[i].length; ++j){
				var breakChunk 	= false;
				var newColor 	= undefined;
				if(textLines[i][j] == "`"){
					if(this.isNumber(textLines[i][j+1]) && this.isNumber(textLines[i][j+2])){
						colorStack.push(currentColor);
						newColor = chao.colorCodes[parseInt(textLines[i][j+1] + textLines[i][j+2], 10)];
						breakChunk = true;
						j += 2;
					} else if(this.isNumber(textLines[i][j+1])){
						colorStack.push(currentColor);
						newColor = chao.colorCodes[parseInt(textLines[i][j+1], 10)];
						breakChunk = true;
						j += 1;
					} else if(textLines[i][j+1] == "`"){
						if(colorStack.length > 0){
							newColor = colorStack.pop();
						}
						breakChunk = true;
						j += 1;
					}
				}

				if(breakChunk){
					if(currentChunk.length > 0){
						chunks[i].push({text:currentChunk, color:currentColor});
					}
					currentChunk = "";
					currentColor = newColor || currentColor;
				} else {
					currentChunk += textLines[i][j];
				}
			}

			if(currentChunk.length > 0){
				chunks[i].push({text:currentChunk, color:currentColor});
			}

			var currentRawLine = "";
			for(var j = 0; j < chunks[i].length; ++j){
				this.rawText += chunks[i][j].text;
				currentRawLine += chunks[i][j].text;
			}
			if(chunks.length > i-1) this.rawText += "\n";

			rawLines.push(currentRawLine);
		}

		this.image.context.font = this.size.toFixed() + "px " + this.font.name;
		chao.drawText(this.image, this.font, "M", 0, 0, this.size);

		var linesSizes		= [];
		var longestLineSize = 0;
		for(var i = 0; i < rawLines.length; ++i){
			linesSizes.push(chao.getTextSize(this.image, rawLines[i]).width);
			if(linesSizes[i] > longestLineSize){
				longestLineSize = linesSizes[i];
			}
		}
		this.image.canvas.width = this.image.width = this.entity.width = longestLineSize;
		this.image.canvas.height = this.image.height = this.entity.height = this.size * textLines.length;

		if(this.backgroundColor){
			chao.clearToColor(this.image, this.backgroundColor);
		} else {
			chao.clearImage(this.image);
		}

		for(var i = 0; i < chunks.length; ++i){
			var currentX = 0;
			switch(this.align){
				case "center": currentX = (longestLineSize - linesSizes[i]) / 2; break;
				case "right": currentX = longestLineSize - linesSizes[i];
			}
			for(var j = 0; j < chunks[i].length; ++j){
				chao.drawText(this.image, 
					this.font,
					chunks[i][j].text,
					currentX, -this.size*.25 + (i * this.size),
					this.size, 
					chunks[i][j].color, 
					"left", 
					this.outlineColor, 
					this.outlineSize);

				currentX += chao.getTextSize(this.image, chunks[i][j].text).width;;
			}
		}
	}

	this.isNumber = function(c){
		return "0123456789".indexOf(c) !== -1;
	}

}
ComponentText.prototype = {
	// This is a serious mess, even by the messiness of all the other things here. Is there a better way of doing this?
	get text() { return this._text; },
	set text(newText){ this._text = newText; this.changeText(); },
	get font() { return this._font; },
	set font(newFont){ this._font = newFont; this.changeText(); },
	get size() { return this._size; },
	set size(newSize){ this._size = newSize; this.changeText(); },
	get color() { return this._color; },
	set color(newcolor){ this._color = newText; this.changeText(); },
	get backgroundColor() { return this._backgroundColor; },
	set backgroundColor(newBackgroundColor){ this._backgroundColor = newBackgroundColor; this.changeText(); },
	get align() { return this._align; },
	set align(newAlign){ this._align = newAlign; this.changeText(); },
	get outlineColor() { return this._outlineColor; },
	set outlineColor(newOutlineColor){ this._outlineColor = newOutlineColor; this.changeText(); },
	get outlineSize() { return this._outlineSize; },
	set outlineSize(newOutlineSize){ this._outlineSize = newOutlineSize; this.changeoutlineSize(); },
};


/**
 * Simple, clickable button.
 *
 * @class
 * @param image - name/id of the image to be used
 */
function ComponentButton(image){
	this.name 			= "Button";
	this.entity 		= null;
	this.imageKey 		= image;
	this.image 			= null;
	this.imagePressed 	= null;
	this.text 			= null;

	this.pressed 		= false;
	this.dimDisabled	= false;
	this.disabled 		= false;

	this.onPress 		= function(button) {};
	this.onHold 		= function(button) {};
	this.onReleased 	= function(button) {};

	this.create = function(){
		this.setImage(this.imageKey);
		this.entity.clickable = true;
	}

	this.update = function(){
		var screenX = this.entity.getScreenX();
		var screenY = this.entity.getScreenY();

		if(!this.entity.visible){
			return;
		}

		var mouseOver 	= this.isAbove(chao.mouse.x, chao.mouse.y);
		var buttonAlpha = 1.0; 

		if(mouseOver && !this.disabled){
			if(chao.mouse.justReleased && this.pressed){

				this.pressed = false;
				buttonAlpha = 1.0;
				if(this.onReleased){
					this.onReleased(this);
				}
			}

			if(chao.mouse.pressed){
				buttonAlpha = 0.5;

				if(!this.pressed && this.onPress){
					this.onPress(this);
				}
				if(this.onHold){
					this.onHold(this);
				}

				this.pressed = true;

			} else if(this.pressed){
				buttonAlpha = 1.0;
			}

		} else {
			buttonAlpha = (!this.disabled || !this.dimInactive) ? 1.0 : 0.5;
			this.pressed = false;
		}

		if(this.imagePressed){
			this.image.entity.visible 			= buttonAlpha > 0.5;
			this.imagePressed.entity.visible 	= buttonAlpha <= 0.5;
		} else {
			this.image.entity.alpha = buttonAlpha;
			if(this.text){
				this.text.entity.alpha = buttonAlpha;
			}
		}
	}

	this.setImage = function(key){
		if(this.image){
			this.entity.remove(this.image.entity);
		}

		this.imageKey = key;

		this.image = (new Entity("Button Image")).addComponent(new ComponentImage(this.imageKey));
		this.entity.add(this.image.entity);

		this.updateSize();
	}

	this.setImagePressed = function(key){
		if(this.imagePressed){
			this.entity.remove(this.imagePressed.entity);
		}

		this.imagePressed = (new Entity("Button Image Pressed")).addComponent(new ComponentImage(key));
		this.entity.add(this.imagePressed.entity);
		this.imagePressed.entity.visible = false;
	}

	this.setText = function(font, text, size){
		if(!this.text){
			this.text = (new Entity("Button Text", 0, 0)).addComponent(new ComponentText(font, text, size));
			this.text.align = "left";
			this.entity.add(this.text.entity);
		} else {
			if(font) this.text.font = font;
			if(text) this.text.text = text;
			if(size) this.text.size = size;
		}

		this.text.entity.alignToParent();

		return this.text;
	}

	this.updateSize = function(){
		this.entity.width = this.image.entity.width;
		this.entity.height = this.image.entity.height;
	}

	this.isAbove = function(x, y){
		if(!this.entity.visible){
			return false;
		}

		return this.entity.getEntityAt(x, y) === this.entity;
	}

}

/**
 * A camera component.
 *
 * @class
 */
function ComponentCamera(){
	this.name 			= "Camera";
	this.entity 		= null;

	this.create = function(){
		//
	}

	this.update = function(){
		//
	}
}

/**
 * A component to create a parallax effect on the image.
 *
 * @class
 */
function ComponentParallaxScroll(){
	this.name 			= "Camera";
	this.entity 		= null;

	this.create = function(){
		//
	}

	this.update = function(){
		//
	}
}

/**
 * A single, basic particle.
 *
 * @class
 * @param image - name/id of the image to be used. Will try to use existing image component when ommited.
 */
function ComponentParticle(image){
	this.name 				= "Camera";
	this.entity 			= null;

	this.image				= null;
	this.imageKey			= image;

	this.lifetime			= 1.0;
	this.fadeOutMode		= ComponentParticle.FADE_MODE_NONE;
	this.velocity			= {x:0, y:0};
	this.acceleration		= {x:0, y:0};
	this.rotationVel		= 0;
	this.rotationAcc		= 0;

	this.useUnscaledTime	= false;

	this.timer 				= 0;

	this.create = function(){
		if(!this.imageKey){
			this.image = this.entity.getComponentByName("Image");
		} else {
			this.image = this.entity.addComponent(new ComponentImage(this.imageKey));
		}

		if(!this.image){
			chao.log("ComponentParticle needs an existing ComponentImage or image key passed in constructor.");
		}
	}

	this.update = function(){
		if(!this.image){
			return;
		}

		var delta = this.useUnscaledTime ? chao.getUnscaledDelta() : chao.getTimeDelta();

		this.timer += delta;

		if(this.timer >= this.lifetime){
			chao.destroyEntity(this.entity);
			return;
		}

		switch(this.fadeOutMode){
			case ComponentParticle.FADE_MODE_NONE: {
				this.entity.alpha = 1.0;
				break;
			}
			case ComponentParticle.FADE_MODE_LINEAR: {
				this.entity.alpha = 1.0 - (this.timer / this.lifetime);
				break;
			}
			case ComponentParticle.FADE_MODE_LAST_SECOND: {
				var v = this.lifetime - this.timer;
				this.entity.alpha = v > 1.0 ? 1.0 : v;
				break;
			}
		}

		this.velocity.x 	+= this.acceleration.x * delta;
		this.velocity.y 	+= this.acceleration.y * delta;
		this.entity.x		+= this.velocity.x * delta;
		this.entity.y		+= this.velocity.y * delta;

		this.rotationVel	+= this.rotationAcc * delta;
		this.entity.rotation+= this.rotationVel * delta;

	}
}
ComponentParticle.FADE_MODE_NONE		= 0;
ComponentParticle.FADE_MODE_LINEAR		= 1;
ComponentParticle.FADE_MODE_LAST_SECOND	= 2;

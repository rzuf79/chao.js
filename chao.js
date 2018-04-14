/**
 * chao.js
 */

/**
 * Some handy globals.
 */
var KEY_A = 0x41, KEY_B = 0x42, KEY_C = 0x43, KEY_D = 0x44, KEY_E = 0x45, KEY_F = 0x46, KEY_G = 0x47, KEY_H = 0x48, KEY_I = 0x49, KEY_J = 0x4A, KEY_K = 0x4B, KEY_L = 0x4C, KEY_M = 0x4D, KEY_N = 0x4E, KEY_O = 0x4F, KEY_P = 0x50, KEY_Q = 0x51, KEY_R = 0x52, KEY_S = 0x53, KEY_T = 0x54, KEY_U = 0x55, KEY_V = 0x56, KEY_W = 0x57, KEY_X = 0x58, KEY_Y = 0x59, KEY_Z = 0x5A, KEY_0 = 0x30, KEY_1 = 0x31, KEY_2 = 0x32, KEY_3 = 0x33, KEY_4 = 0x34, KEY_5 = 0x35, KEY_6 = 0x36, KEY_7 = 0x37, KEY_8 = 0x38, KEY_9 = 0x39, KEY_0_PAD = 0x60, KEY_1_PAD = 0x61, KEY_2_PAD = 0x62, KEY_3_PAD = 0x63, KEY_4_PAD = 0x64, KEY_5_PAD = 0x65, KEY_6_PAD = 0x66, KEY_7_PAD = 0x67, KEY_8_PAD = 0x68, KEY_9_PAD = 0x69, KEY_F1 = 0x70, KEY_F2 = 0x71, KEY_F3 = 0x72, KEY_F4 = 0x73, KEY_F5 = 0x74, KEY_F6 = 0x75, KEY_F7 = 0x76, KEY_F8 = 0x77, KEY_F9 = 0x78, KEY_F10 = 0x79, KEY_F11 = 0x7a, KEY_F12 = 0x7b, KEY_ESC = 0x1B, KEY_TILDE = 0xc0, KEY_MINUS = 0xbd, KEY_EQUALS = 0xbb, KEY_BACKSPACE = 0x08, KEY_TAB = 0x09, KEY_OPENBRACE = 0xdb, KEY_CLOSEBRACE = 0xdd, KEY_ENTER = 0x0D, KEY_COLON = 0xba, KEY_QUOTE = 0xde, KEY_BACKSLASH = 0xdc, KEY_COMMA = 0xbc, KEY_STOP = 0xbe, KEY_SLASH = 0xBF, KEY_SPACE = 0x20, KEY_INSERT = 0x2D, KEY_DEL = 0x2E, KEY_HOME = 0x24, KEY_END = 0x23, KEY_PGUP = 0x21, KEY_PGDN = 0x22, KEY_LEFT = 0x25, KEY_RIGHT = 0x27, KEY_UP = 0x26, KEY_DOWN = 0x28, KEY_SLASH_PAD = 0x6F, KEY_ASTERISK = 0x6A, KEY_MINUS_PAD = 0x6D, KEY_PLUS_PAD = 0x6B, KEY_ENTER_PAD = 0x0D, KEY_PRTSCR = 0x2C, KEY_PAUSE = 0x13, KEY_EQUALS_PAD = 0x0C, KEY_LSHIFT = 0x10, KEY_RSHIFT = 0x10, KEY_LCONTROL = 0x11, KEY_RCONTROL = 0x11, KEY_ALT = 0x12, KEY_ALTGR = 0x12, KEY_LWIN = 0x5b, KEY_RWIN = 0x5c, KEY_MENU = 0x5d, KEY_SCRLOCK = 0x9d, KEY_NUMLOCK = 0x90, KEY_CAPSLOCK = 0x14;

/** @namespace*/
var chao = {
	
	defaultFontData: "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AuP91hUHyjWWdL04hQHN/AVhBoFnuhUZ/W0wAqYAAAAAAwAq/q0FBAWVAA4AJAAoAAAJATYXFTc1MzcjNwcXIxMBByUHFzYeAQYuATcHHgI+AiYHNwMXAScDuf8AQ9Rtf0jGAXEBqvH8hlABXdAOUKohVqWLGmwHeLx/ZwiFaNunaAGeYgLL/dYVCMk1lXW+OIYBzgIudAHzBylUt20JtUdgNaMiR4nSegb7+e5hBoFnAAAAAAEAG//8A6cFMwAiAAASJyYnITcFByY3NiQWFzcuASQGCgESHgE2NycGJyYnITcFB9gEDwYCHLH9t4UMNk0BJm0NrQaE/tzJyzZhrvnrqhHA5K9LAc+x/bdTAi0PQTqtAZybeK8GiDByQ6QHcv6//ov+8MZUXvML029VoK0BYQAAAAABAAABagABADoAwAAFAJwAJgBR/54AKQAzAEUAKQA3AIcAKQA5AD0AKQA6AEkAKQA8AEIAKQBD/2IAKQBH/z4AKQBR/20AKQBX/54ALQBH//MALQBR//IAMABH/+cAMABR/+oAMwA3AB4AMwA8/7sAMwBD/54AMwBH/5oAMwBR/8IANwAzADwANwA3AF4ANwA5ADMANwA6AGkANwA8ADkANwBD/t4ANwBH/y8ANwBKAAwANwBR/wAANwBX/ukANwBb/xIAOQApADMAOQAzAFoAOQA3AJwAOQA5AFIAOQA6AIcAOQA8AFcAOQBD/0UAOQBH/0UAOQBL/9QAOQBR/20AOQBX/4MAOQBb/7MAOgA3ADsAOgBD/0UAOgBH/28AOgBL/+cAOgBR/1sAOgBX/7AAPAA6ADMAPABD/woAPABH/0wAPABL/8QAPABR/0EAPABX/zsASABH/8QASABI/44ASABLAAAASABR/9AAAAAAAAwAlgADAAEECQAAADYAAAADAAEECQABACIARAADAAEECQACAA4ANgADAAEECQADACwARAADAAEECQAEACIARAADAAEECQAFAAYAcAADAAEECQAGACAAdgADAAEECQAHACoAlgADAAEECQAIADgBIAADAAEECQAJAB4AwAADAAEECQAKAEIA3gADAAEECQAMADgBIABLAGUAdgBpAG4AIABLAGkAbgBnADoAIABLAGkAbgBnAHQAaABpAG4AZwBzACAAMgAwADAANwBSAGUAZwB1AGwAYQByAEsAaQBuAGcAdABoAGkAbgBnAHMAIABFAHgAZQB0AGUAcgAgADIAMAAwADcAMQAuADAASwBpAG4AZwB0AGgAaQBuAGcAcwBFAHgAZQB0AGUAcgBLAGkAbgBnAHQAaABpAG4AZwBzACAAQQBwAHIAaQBsACAAMgAwADAANwBLAGUAdgBpAG4AIABLAGkAbgBnACAAMgAwADAANwBDAGEAbABsAGkAZwByAGEAcABoAGkAYwAgAFIAbwB1AG4AZABoAGEAbgBkACAAcwBhAG4AcwAgAHMAZQByAGkAZgBrAGUAdgBpAG4AawBpAG4AZwBAAG0AeQBwAG8AcwB0AG8AZgBmAGkAYwBlAC4AYwBvAC4AdQBrAAAAAgAAAAAAAP9cADAAAAAAAAAAAAAAAAAAAAAAAAAAAABtAAABAgEDAAMABAAFAAYABwAIAAkACgALAAwADQAOAA8AEAARABIAEwAUABUAFgAXABgAGQAaABsAHAAdAB4AHwAgACEAIgAjACQAJQAmACcAKAApACoAKwAsAC0ALgAvADAAMQAyADMANAA1ADYANwA4ADkAOgA7ADwAPQA+AD8AQABCAEMARABFAEYARwBIAEkASgBLAEwATQBOAE8AUABRAFIAUwBUAFUAVgBXAFgAWQBaAFsAXABdAF4AYACFAIcAqwC0ALUAtgC3ALgA7wDwAPQA9QD2AQQFLm51bGwQbm9ubWFya2luZ3JldHVybgRFdXJvAAAAAf//AAI=",

	init: function(width, height) {
		if (!Date.now) {
			Date.now = function now() { return new Date().getTime(); };
		}

		var canvas = document.createElement("canvas");
		canvas.setAttribute("width", width);
		canvas.setAttribute("height", height);
		canvas.style.backgroundColor = "black";
		document.body.appendChild(canvas);

		var context		= canvas.getContext("2d");

		chao.canvas = {
			canvas: 	canvas,
			context: 	context,
			width: 		width,
			height: 	height,
		};
	 
		canvas.addEventListener("mousedown", chao.onMouseDown, true);
		canvas.addEventListener("mouseup", chao.onMouseUp, true);

		chao.images			= [];
		chao.sounds			= [];
		chao.music			= [];

		chao.updateInterval = null;
		chao.setFPS(60);
		chao.lastTime 		= Date.now();
		chao.timeDelta 		= 0.0;
		chao.timeScale 		= 1.0;

		chao.loadedFontsNum = 0;
		chao.font 			= chao.loadBase64Font(chao.defaultFontData);

		chao.setLoadingState({});
		chao.switchState({});

		chao.loggingEnabled = true;
	},

	setFPS: function(FPS){
		chao.updateInterval = setInterval("chao.update()", FPS);
	},

	clearScreen: function(){
		if (chao.backgroundColor=="none") { 
			chao.canvas.context.clearRect(0, 0, chao.canvas.canvas.width, chao.canvas.canvas.height); 
		}else{ 
			chao.canvas.context.fillStyle = chao.backgroundColor; 
			chao.canvas.context.fillRect(0, 0, chao.canvas.canvas.width, chao.canvas.canvas.height); 
		}
	},
	 
	update: function(){
		chao.timeDelta 	= (Date.now() - chao.lastTime) * .001;
		chao.lastTime 	= Date.now(); 

		chao.clearScreen();
		chao.updateKeys();
		chao.updateMouse();

		var stateToProcess = chao.getLoadingProgress() >= 1.0 ? chao.currentState : chao.loadingState;

		stateToProcess.rootObject.draw(0, 0, 1.0);
		stateToProcess.rootObject.update();

		if(stateToProcess.draw){
			stateToProcess.draw();
		}
		if(stateToProcess.update){
			stateToProcess.update();
		}
	},

	switchState: function(newState){
		chao.destroyState(chao.currentState);
		
		chao.currentState = newState;
		chao.initState(chao.currentState);
	},

	setLoadingState: function(newLoadingState){
		chao.destroyState(chao.loadingState);

		chao.loadingState = newLoadingState;
		chao.initState(newLoadingState);
	},

	initState: function(state){
		state.rootObject = new Entity("Root", 0, 0);
		state.add = function(entity){
			this.rootObject.add(entity);
		};
		state.remove = function(entity){
			this.rootObject.remove(entity);
		};

		if(state.create){
			state.create();
		}
	},

	destroyState: function(state){
		if(!state){
			return;
		}

		if(state.destroy){
			state.destroy();
		}
	},

	createImage: function(key, width, height){
		var newCanvas 		= document.createElement("canvas");
		var newContext 		= newCanvas.getContext("2d");
		newCanvas.width 	= width;
		newCanvas.height 	= height;

		var newImage 	= {
			key: 		key,
			canvas: 	newCanvas,
			context: 	newContext,
			width: 		width,
			height: 	height,
			ready: 		true,
		};

		chao.images.push(newImage);
	},

	loadImage: function(key, path){
		if(chao.getImage(key)){
			chao.log("There is already an image loaded with a key: " + key);
			return;
		}

		var img = new Image();
		img.src = path;
		var newCanvas 	= document.createElement("canvas");
		var newContext 	= newCanvas.getContext("2d");
		var newImage 	= {
			key: 		key,
			canvas: 	newCanvas,
			context: 	newContext,
			width: 		-1,
			height: 	-1,
			ready: 		false,
		};
		
		chao.images.push(newImage);

		img.onload = function(){
			newImage.canvas.width 	= img.width;
			newImage.canvas.height 	= img.height;
			newImage.context.drawImage(img, 0, 0);
			newImage.width 	= img.width;
			newImage.height = img.height;
			newImage.ready 	= true;
		};

	},

	getImage: function(key){
		for(var i = 0; i < chao.images.length; ++i){
			if(chao.images[i].key == key){
				return chao.images[i];
			}
		}

		return null;
	},

	drawImage: function(target, image, x, y){
		target.context.drawImage(image.canvas, x, y);
	},

	updateMouse: function(){
		//
	},

	onMouseDown: function(){
		//
	},

	onMouseUp: function(){
		//
	},

	updateKeys: function(){
		//
	},

	loadBase64Font: function(data){
		var s = document.createElement('style');
		var fontname = "font" + (chao.loadedFontsNum++);
		s.id = fontname;
		s.type = "text/css";
		document.head.appendChild(s);
		s.textContent = "@font-face { font-family: " + fontname + "; src:url('data:application/font-woff;base64," + data + "') format('woff');}";
		return {element:s,file:"",name:fontname,type:"fnt"};
	},

	getLoadingProgress: function(){
		var allData 	= chao.images.length;
		var loadedData 	= 0;

		for(var i = 0; i < chao.images.length; ++i){
			if(chao.images[i].ready){
				loadedData ++;
			}
		}

		return loadedData / allData;
	},

	getTimeDelta : function() {
		return timeDelta * timeScale;
	},

	getRandom: function(Max) { 
		Max -= 1;
		return Math.round(Max*Math.random()); 
	},

	log: function(thingie){
		if(chao.loggingEnabled){
			console.log(thingie);
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
	this.name 		= name ? name : "Entity",
	this.x 			= x ? x : 0,
	this.y 			= y ? y : 0,
	this.alpha 		= 1.0;
	this.width 		= 0,
	this.height 	= 0,
	this.children 	= [],
	this.components = [],
	this.parent 	= null,
	this.visible 	= true,
	this.clickable 	= false,

	this.destroy = function(){
		for(var i = 0; i < this.components.length; ++i){
			if(this.components[i].destroy){
				this.components[i].destroy();
			}
		}

		for(var i = 0; i < this.children.length; ++i){
			this.children[i].destroy();
		}
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
		if(component.entity === null){
			component.entity = this;
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
}


/**
 * Renders images, static and animated.
 *
 * @class
 * @param {string} imageName - name/id of the image to be used
 */
function ComponentImage(key){
	this.name 		= "Image",
	this.entity 	= null;

	if(key){
		this.image = chao.getImage(key);
	}

	this.draw = function(x, y, alpha){
		if(!this.image){
			return;
		}

		var drawX = this.entity.x + x;
		var drawY = this.entity.y + x;

		chao.drawImage(chao.canvas, this.image, drawX, drawY)
	}

}
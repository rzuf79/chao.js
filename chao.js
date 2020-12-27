/**
	-----------------
	------- chao.js -
	-----------------
 */

"use strict";

/**
 * Global chao namespace.
 */
var chao = {

	/** Consts. */
	VERSION: "0.42",

	SCALING_MODE_NONE: 0, // Game canvas will not be scaled at all.
	SCALING_MODE_STRETCH: 1, // Scales the canvas to fill the whole viewport.
	SCALING_MODE_KEEP_RATIO: 2, // Scales the canvas to fit the viewport but keeps the aspect ratio.
	SCALING_MODE_EXTEND: 3, // Scale to fit and lenghten the shorter dimension to fill the viewport.
	SCALING_MODE_END: 4,

	INTERPOLATE_LINEAR: 0, // Basing interpolation, without any smoothing.
	INTERPOLATE_SMOOTH: 1, // Smooooooth!
	INTERPOLATE_EASE_TO: 2, // Smoothes the end of the interpolation.
	INTERPOLATE_EASE_FROM: 3, // Smoothes the beginning of the interpolation.
	INTERPOLATE_BOUNCE: 4, // Bounces the interpolated value a bit before reaching the end.
	INTERPOLATE_ELASTIC: 5, // Elastic interpolation.

	REPEAT_MODE_ONCE: 0, // Just plays the thing once.
	REPEAT_MODE_LOOP: 1, // When finished, start again from the beginning.
	REPEAT_MODE_BOUNCE: 2, // Goes back and forth.

	/** Key codes. */
	KEY_A: 0x41,
	KEY_B: 0x42,
	KEY_C: 0x43,
	KEY_D: 0x44,
	KEY_E: 0x45,
	KEY_F: 0x46,
	KEY_G: 0x47,
	KEY_H: 0x48,
	KEY_I: 0x49,
	KEY_J: 0x4A,
	KEY_K: 0x4B,
	KEY_L: 0x4C,
	KEY_M: 0x4D,
	KEY_N: 0x4E,
	KEY_O: 0x4F,
	KEY_P: 0x50,
	KEY_Q: 0x51,
	KEY_R: 0x52,
	KEY_S: 0x53,
	KEY_T: 0x54,
	KEY_U: 0x55,
	KEY_V: 0x56,
	KEY_W: 0x57,
	KEY_X: 0x58,
	KEY_Y: 0x59,
	KEY_Z: 0x5A,
	KEY_0: 0x30,
	KEY_1: 0x31,
	KEY_2: 0x32,
	KEY_3: 0x33,
	KEY_4: 0x34,
	KEY_5: 0x35,
	KEY_6: 0x36,
	KEY_7: 0x37,
	KEY_8: 0x38,
	KEY_9: 0x39,
	KEY_0_PAD: 0x60,
	KEY_1_PAD: 0x61,
	KEY_2_PAD: 0x62,
	KEY_3_PAD: 0x63,
	KEY_4_PAD: 0x64,
	KEY_5_PAD: 0x65,
	KEY_6_PAD: 0x66,
	KEY_7_PAD: 0x67,
	KEY_8_PAD: 0x68,
	KEY_9_PAD: 0x69,
	KEY_F1: 0x70,
	KEY_F2: 0x71,
	KEY_F3: 0x72,
	KEY_F4: 0x73,
	KEY_F5: 0x74,
	KEY_F6: 0x75,
	KEY_F7: 0x76,
	KEY_F8: 0x77,
	KEY_F9: 0x78,
	KEY_F10: 0x79,
	KEY_F11: 0x7a,
	KEY_F12: 0x7b,
	KEY_ESC: 0x1B,
	KEY_TILDE: 0xc0,
	KEY_MINUS: 0xbd,
	KEY_EQUALS: 0xbb,
	KEY_BACKSPACE: 0x08,
	KEY_TAB: 0x09,
	KEY_OPENBRACE: 0xdb,
	KEY_CLOSEBRACE: 0xdd,
	KEY_ENTER: 0x0D,
	KEY_COLON: 0xba,
	KEY_QUOTE: 0xde,
	KEY_BACKSLASH: 0xdc,
	KEY_COMMA: 0xbc,
	KEY_STOP: 0xbe,
	KEY_SLASH: 0xBF,
	KEY_SPACE: 0x20,
	KEY_INSERT: 0x2D,
	KEY_DEL: 0x2E,
	KEY_HOME: 0x24,
	KEY_END: 0x23,
	KEY_PGUP: 0x21,
	KEY_PGDN: 0x22,
	KEY_LEFT: 0x25,
	KEY_RIGHT: 0x27,
	KEY_UP: 0x26,
	KEY_DOWN: 0x28,
	KEY_SLASH_PAD: 0x6F,
	KEY_ASTERISK: 0x6A,
	KEY_MINUS_PAD: 0x6D,
	KEY_PLUS_PAD: 0x6B,
	KEY_ENTER_PAD: 0x0D,
	KEY_PRTSCR: 0x2C,
	KEY_PAUSE: 0x13,
	KEY_EQUALS_PAD: 0x0C,
	KEY_LSHIFT: 0x10,
	KEY_RSHIFT: 0x10,
	KEY_LCONTROL: 0x11,
	KEY_RCONTROL: 0x11,
	KEY_ALT: 0x12,
	KEY_ALTGR: 0x12,
	KEY_LWIN: 0x5b,
	KEY_RWIN: 0x5c,
	KEY_MENU: 0x5d,
	KEY_SCRLOCK: 0x9d,
	KEY_NUMLOCK: 0x90,
	KEY_CAPSLOCK: 0x14,

	/** Basic 16 colors.
	 *
	 * 0 = Black 0xff000000
	 * 1 = Blue 0xff0000aa
	 * 2 = Green 0xff00aa00
	 * 3 = Cyan 0xff00aaaa
	 * 4 = Red 0xffaa0000
	 * 5 = Magenta 0xff800080
	 * 6 = Brown 0xff995500
	 * 7 = White 0xffaaaaaa
	 * 8 = Gray 0xff555555
	 * 9 = LightBlue 0xff5555ff
	 * 10 = LightGreen 0xff54ff3f
	 * 11 = LightCyan 0xff55ffff
	 * 12 = LightRed 0xffff5555
	 * 13 = LightMagenta 0xffff55ff
	 * 14 = Yellow 0xffffff55
	 * 15 = BrightWhite 0xffffffff
	 */
	colorCodes: [0xff000000, 0xff0000aa, 0xff00ff00, 0xff00aaaa, 0xffaa0000, 0xff800080, 0xff995500, 0xffaaaaaa, 0xff555555, 0xff5555ff, 0xff54ff3f, 0xff55ffff, 0xffff5555, 0xffff55ff, 0xffffff55, 0xffffffff],

	/** Base64-encoded default font */
	defaultFontData: "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AuP91hUHyjWWdL04hQHN/AVhBoFnuhUZ/W0wAqYAAAAAAwAq/q0FBAWVAA4AJAAoAAAJATYXFTc1MzcjNwcXIxMBByUHFzYeAQYuATcHHgI+AiYHNwMXAScDuf8AQ9Rtf0jGAXEBqvH8hlABXdAOUKohVqWLGmwHeLx/ZwiFaNunaAGeYgLL/dYVCMk1lXW+OIYBzgIudAHzBylUt20JtUdgNaMiR4nSegb7+e5hBoFnAAAAAAEAG//8A6cFMwAiAAASJyYnITcFByY3NiQWFzcuASQGCgESHgE2NycGJyYnITcFB9gEDwYCHLH9t4UMNk0BJm0NrQaE/tzJyzZhrvnrqhHA5K9LAc+x/bdTAi0PQTqtAZybeK8GiDByQ6QHcv6//ov+8MZUXvML029VoK0BYQAAAAABAAABagABADoAwAAFAJwAJgBR/54AKQAzAEUAKQA3AIcAKQA5AD0AKQA6AEkAKQA8AEIAKQBD/2IAKQBH/z4AKQBR/20AKQBX/54ALQBH//MALQBR//IAMABH/+cAMABR/+oAMwA3AB4AMwA8/7sAMwBD/54AMwBH/5oAMwBR/8IANwAzADwANwA3AF4ANwA5ADMANwA6AGkANwA8ADkANwBD/t4ANwBH/y8ANwBKAAwANwBR/wAANwBX/ukANwBb/xIAOQApADMAOQAzAFoAOQA3AJwAOQA5AFIAOQA6AIcAOQA8AFcAOQBD/0UAOQBH/0UAOQBL/9QAOQBR/20AOQBX/4MAOQBb/7MAOgA3ADsAOgBD/0UAOgBH/28AOgBL/+cAOgBR/1sAOgBX/7AAPAA6ADMAPABD/woAPABH/0wAPABL/8QAPABR/0EAPABX/zsASABH/8QASABI/44ASABLAAAASABR/9AAAAAAAAwAlgADAAEECQAAADYAAAADAAEECQABACIARAADAAEECQACAA4ANgADAAEECQADACwARAADAAEECQAEACIARAADAAEECQAFAAYAcAADAAEECQAGACAAdgADAAEECQAHACoAlgADAAEECQAIADgBIAADAAEECQAJAB4AwAADAAEECQAKAEIA3gADAAEECQAMADgBIABLAGUAdgBpAG4AIABLAGkAbgBnADoAIABLAGkAbgBnAHQAaABpAG4AZwBzACAAMgAwADAANwBSAGUAZwB1AGwAYQByAEsAaQBuAGcAdABoAGkAbgBnAHMAIABFAHgAZQB0AGUAcgAgADIAMAAwADcAMQAuADAASwBpAG4AZwB0AGgAaQBuAGcAcwBFAHgAZQB0AGUAcgBLAGkAbgBnAHQAaABpAG4AZwBzACAAQQBwAHIAaQBsACAAMgAwADAANwBLAGUAdgBpAG4AIABLAGkAbgBnACAAMgAwADAANwBDAGEAbABsAGkAZwByAGEAcABoAGkAYwAgAFIAbwB1AG4AZABoAGEAbgBkACAAcwBhAG4AcwAgAHMAZQByAGkAZgBrAGUAdgBpAG4AawBpAG4AZwBAAG0AeQBwAG8AcwB0AG8AZgBmAGkAYwBlAC4AYwBvAC4AdQBrAAAAAgAAAAAAAP9cADAAAAAAAAAAAAAAAAAAAAAAAAAAAABtAAABAgEDAAMABAAFAAYABwAIAAkACgALAAwADQAOAA8AEAARABIAEwAUABUAFgAXABgAGQAaABsAHAAdAB4AHwAgACEAIgAjACQAJQAmACcAKAApACoAKwAsAC0ALgAvADAAMQAyADMANAA1ADYANwA4ADkAOgA7ADwAPQA+AD8AQABCAEMARABFAEYARwBIAEkASgBLAEwATQBOAE8AUABRAFIAUwBUAFUAVgBXAFgAWQBaAFsAXABdAF4AYACFAIcAqwC0ALUAtgC3ALgA7wDwAPQA9QD2AQQFLm51bGwQbm9ubWFya2luZ3JldHVybgRFdXJvAAAAAf//AAI=",

	/** String for testing if a font was loaded. */
	fontTestString: "giItT1WQy@!-/#", // this only looks like it's random, but it's not!

	init: function (width, height, scalingMode, canvasId) {

		// Some cross-browser compatibility stuff below
		if (!Date.now) {
			Date.now = function now() {
				return new Date().getTime();
			};
		}

		// Engine inits:
		var canvas;
		if (canvasId) {
			canvas = document.getElementById(canvasId);
		}
		if (!canvas) {
			canvas = document.createElement("canvas");
			if (canvasId) {
				canvas.setAttribute("id", canvasId);
			}
			canvas.setAttribute("width", width);
			canvas.setAttribute("height", height);
			canvas.style.backgroundColor = "black";
			document.body.appendChild(canvas);
		}

		var context = canvas.getContext("2d");

		// Canvas object is organized like a regular chao image, for cohesion.
		chao.canvas = {
			canvas: canvas,
			context: context,
			width: width,
			height: height,
		}

		// Whole lotta vars
		chao.loggingEnabled = true;

		chao.screenWidth = width;
		chao.screenHeight = height;
		chao.scalingMode = scalingMode || chao.SCALING_MODE_NONE;

		chao.screenScaleX = 1.0;
		chao.screenScaleY = 1.0;
		chao.baseScreenWidth = width;
		chao.baseScreenHeight = height;

		chao.installVisibilityHandler();
		chao.hasFocus = true;

		chao.images = [];
		chao.smoothing = true;
		chao.setImagesSmoothing(chao.smoothing);

		chao.pauseOnFadeEnabled = true;
		chao.imagePauseFade = null;
		chao.updatePauseFadeImage();

		chao.onAssetsLoaded = undefined;

		chao.updateInterval = null;
		chao.framerate = 60;
		chao.setFPS(60);
		chao.lastTime = Date.now();
		chao.timeDelta = 0.0;
		chao.timeScale = 1.0;

		chao.countFPS = false;
		chao.currentFPS = 0;
		chao.FPSCounter = 0;
		chao.FPSTimer = 0;

		chao.sounds = [];
		chao.currentMusic = null;
		chao.musicWasSupressed = false;
		chao.muted = false;
		chao.muteOnFocusLost = true;
		chao.wasMutedOnFocusLost = false;

		chao.pressed = [];
		chao.justPressed = [];
		chao.justReleased = [];

		chao.touches = [];

		chao.mouse = {};
		chao.mouse.x = -1;
		chao.mouse.y = -1;
		chao.mouse.wheelDelta = 0;
		chao.mouse.pressed = false;
		chao.mouse.justPressed = false;
		chao.mouse.justReleased = false;
		chao.mouse.pressedRight = false;
		chao.mouse.justPressedRight = false;
		chao.mouse.justReleasedRight = false;
		chao.mouse.pressedMiddle = false;
		chao.mouse.justPressedMiddle = false;
		chao.mouse.justReleasedMiddle = false;
		chao.mouse.suppressUntilUp = false;

		chao.resetInput();

		chao.fonts = [];
		chao.loadedFontsNum = 0;
		chao.enableFontsLoadCheck = true;
		chao.font = chao.loadBase64Font(undefined, chao.defaultFontData);

		chao.entitiesToDestroy = [];
		chao.focusedEntity = null;

		chao.currentState = undefined;
		chao.loadingState = undefined;
		chao.newState = undefined;

		// A default loading state that can be overwritten 
		chao.setLoadingState({
			draw: function () {
				var barWidth = chao.screenWidth * 0.6;
				var barHeight = barWidth * 0.1;
				var barX = chao.screenWidth / 2 - barWidth / 2;
				var barY = chao.screenHeight - (barHeight * 1.25);
				var barColor = chao.makeColor(255, 255, 255);

				chao.clearToColor(chao.canvas, chao.makeColor(30, 30, 30));
				chao.drawRect(chao.canvas, barX - 4, barY - 4, barWidth + 8, barHeight + 8, barColor);
				chao.drawRectFill(chao.canvas, barX, barY, barWidth * chao.getLoadingProgress(), barHeight, barColor);
			},
		});

		chao.switchState({});

		// Install all the listeners.
		canvas.addEventListener("mousedown", chao.onMouseDown);
		window.addEventListener("mouseup", chao.onMouseUp);
		canvas.addEventListener("mousemove", chao.onMouseMove);
		window.addEventListener('contextmenu', function (e) {
			e.preventDefault();
		});
		window.addEventListener("wheel", chao.onMouseWheel);
		canvas.addEventListener("touchstart", chao.onTouchStart);
		canvas.addEventListener("touchmove", chao.onTouchMove);
		window.addEventListener("touchend", chao.onTouchEnd);
		window.addEventListener("keyup", chao.onKeyUp);
		window.addEventListener("keydown", chao.onKeyDown);
		window.addEventListener("resize", chao.resize);

	},

	setFPS: function (FPS) {
		chao.framerate = FPS;
		chao.updateInterval = setInterval(chao.update, 1000 / FPS);
	},

	clearScreen: function () {
		if (chao.backgroundColor === undefined) {
			chao.canvas.context.clearRect(0, 0, chao.canvas.canvas.width, chao.canvas.canvas.height);
		} else {
			chao.canvas.context.fillStyle = chao.backgroundColor;
			chao.canvas.context.fillRect(0, 0, chao.canvas.canvas.width, chao.canvas.canvas.height);
		}
	},

	onFocusChange: function (isFocused) {
		if (chao.hasFocus == isFocused) {
			return;
		}
		if (isFocused) {
			chao.hasFocus = true;
			chao.lastTime = Date.now();

			chao.mouse.suppressUntilUp = true;
			chao.resetInput();

			if (chao.muteOnFocusLost) {
				chao.setMute(chao.wasMutedOnFocusLost);
			}
		} else {
			chao.hasFocus = false;
			chao.wasMutedOnFocusLost = chao.muted;
			if (chao.muteOnFocusLost) {
				chao.setMute(true);
			}
		}
	},

	resetInput: function () {
		for (var i = 0; i < 0x80; ++i) {
			chao.pressed[i] = false;
			chao.justPressed[i] = false;
			chao.justReleased[i] = false;
		}

		chao.mouse.pressed = false;
		chao.mouse.pressedRight = false;
		chao.mouse.pressedMiddle = false;

		chao.focusedEntity = null;
	},

	update: function () {
		if (chao.enableFontsLoadCheck) {
			chao.updateFontsLoading();
		}

		chao.clearScreen();

		chao.timeDelta = (Date.now() - chao.lastTime) * .001;
		chao.lastTime = Date.now();

		if (chao.countFPS) {
			chao.FPSCounter++;
			chao.FPSTimer += chao.timeDelta;
			if (chao.FPSTimer >= 1.0) {
				chao.FPSTimer -= 1.0;
				chao.currentFPS = chao.FPSCounter;
				chao.FPSCounter = 0;
			}
		}

		var stateToProcess = chao.currentState;
		var focusPause = !chao.hasFocus && chao.pauseOnFadeEnabled;

		if (chao.getLoadingProgress() < 1.0) {
			stateToProcess = chao.loadingState;
		} else {
			if (chao.onAssetsLoaded) {
				chao.onAssetsLoaded();
				chao.onAssetsLoaded = undefined;
			}
		}

		if (!focusPause) {
			stateToProcess.rootEntity.update();
			if (stateToProcess.update) {
				stateToProcess.update();
			}

			chao.updateKeyboard();
			chao.updateMouse();
			chao.updateTouches();
		}

		stateToProcess.rootEntity.draw();
		if (stateToProcess.draw) {
			stateToProcess.draw();
		}

		if (focusPause && chao.getLoadingProgress() >= 1) {
			chao.drawImage(chao.canvas, chao.imagePauseFade, 0, 0);
		}

		for (var i = 0; i < chao.entitiesToDestroy.length; ++i) {
			chao.entitiesToDestroy[i].destroy();
			if (chao.entitiesToDestroy[i].parent) {
				chao.entitiesToDestroy[i].parent.remove(chao.entitiesToDestroy[i]);
				chao.entitiesToDestroy[i].parent = null;
			}
		}
		chao.entitiesToDestroy = [];


		if (chao.newState !== undefined) {
			chao.destroyCurrentStateAndInitNewOne(chao.newState);
			chao.newState = undefined;
		}
	},

	switchState: function (newState) {
		if (chao.currentState === undefined) {
			chao.destroyCurrentStateAndInitNewOne(newState);
		} else {
			chao.newState = newState;
		}
	},

	destroyCurrentStateAndInitNewOne: function (newState) {
		chao.resetInput();

		chao.destroyState(chao.currentState);

		chao.currentState = newState;
		if (chao.getLoadingProgress() < 1.0) {
			chao.onAssetsLoaded = this.initCurrentState;
		} else {
			chao.initState(chao.currentState);
		}
	},

	setLoadingState: function (newLoadingState) {
		chao.destroyState(chao.loadingState);

		chao.loadingState = newLoadingState;
		chao.initState(newLoadingState);

	},

	initState: function (state) {
		state.rootEntity = new Entity("Root", 0, 0);
		state.rootEntity.width = chao.screenWidth;
		state.rootEntity.height = chao.screenHeight;
		state.add = function (entity) {
			return this.rootEntity.add(entity);
		};
		state.addWithComponent = function (entity, component) {
			return this.rootEntity.addWithComponent(entity, component);
		};
		state.remove = function (entity) {
			this.rootEntity.remove(entity);
		};

		if (state.create) {
			state.create();
		}
		chao.resize();
	},

	initCurrentState: function () {
		chao.initState(chao.currentState);
	},

	getCurrentState: function () {
		return chao.getLoadingProgress() >= 1.0 ? chao.currentState : chao.loadingState;
	},

	destroyState: function (state) {
		if (!state) {
			return;
		}

		if (state.destroy) {
			state.destroy();
		}
		state.rootEntity.destroy();
		state.rootEntity = null;
	},

	destroyEntity: function (entity) {
		chao.entitiesToDestroy.push(entity);
	},

	findEntities: function (name, entity, array) {
		entity = entity || chao.currentState.rootEntity;
		array = array || [];

		if (entity.name === name) {
			array.push(entity);
		}

		for (var i = 0; i < entity.children.length; ++i) {
			chao.findEntities(name, entity.children[i], array);
		}

		return array;
	},

	findComponents: function (name, entity, array) {
		entity = entity || chao.currentState.rootEntity;
		array = array || [];

		var foundComponents = entity.getComponentsByName(name);
		array.push(foundComponents);

		for (var i = 0; i < entity.children.length; ++i) {
			chao.findComponents(name, entity.children[i], array);
		}

		return array;
	},

	createImage: function (key, width, height) {
		var newCanvas = document.createElement("canvas");
		var newContext = newCanvas.getContext("2d");
		newCanvas.width = width;
		newCanvas.height = height;

		var newImage = {
			key: key,
			canvas: newCanvas,
			context: newContext,
			width: width,
			height: height,
			rotationOrigin: {
				x: 0.5,
				y: 0.5
			}, // {0.0 - 1.0}
			ready: true,
		};

		chao.setSmoothingForImage(newImage, chao.smoothing);

		if (key) {
			chao.addImage(newImage);
		}

		return newImage;
	},

	loadImage: function (key, path) {
		var img = new Image();
		img.src = path;
		var newCanvas = document.createElement("canvas");
		var newContext = newCanvas.getContext("2d");
		var newImage = {
			key: key,
			canvas: newCanvas,
			context: newContext,
			width: -1,
			height: -1,
			rotationOrigin: {
				x: 0.5,
				y: 0.5
			}, // {0.0 - 1.0}
			ready: false,
		};

		if (key) {
			chao.addImage(newImage);
		}

		img.onload = function () {
			newImage.canvas.width = img.width;
			newImage.canvas.height = img.height;
			chao.setSmoothingForImage(newImage, chao.smoothing);
			newImage.context.drawImage(img, 0, 0);
			newImage.width = img.width;
			newImage.height = img.height;
			newImage.ready = true;
		};

		return newImage;
	},

	addImage: function (image) {
		var oldImage = -1;

		var n = chao.images.length;
		for (var i = 0; i < n; ++i) {
			if (chao.images[i].key == image.key) {
				oldImage = i;
				break;
			}
		}

		if (oldImage != -1) {
			chao.images.splice(oldImage, 1);
		}

		chao.images.push(image);
	},

	getImage: function (key) {
		if (typeof key === "string" || key instanceof String) {
			var n = chao.images.length;
			for (var i = 0; i < n; ++i) {
				if (chao.images[i].key == key) {
					return chao.images[i];
				}
			}
		}
		return key;
	},

	tintImage: function (image, color) {
		image = chao.getImage(image);

		var tint = chao.createImage(undefined, image.width, image.height);

		chao.clearToColor(tint, color);
		image.context.globalCompositeOperation = "source-atop";
		image.context.drawImage(tint.canvas, 0, 0, image.width, image.height);
	},

	setImagesSmoothing: function (value) {
		chao.smoothing = value;

		chao.setSmoothingForImage(chao.canvas, value);

		var n = chao.images.length;
		for (var i = 0; i < n; ++i) {
			chao.setSmoothingForImage(chao.images[i], value);
		}

	},

	setSmoothingForImage: function (image, value) {
		// // some of these are deprecated and throw warnings. will just leave them here - who knows
		// image.context.mozImageSmoothingEnabled = value;
		image.context.webkitImageSmoothingEnabled = value;
		image.context.msImageSmoothingEnabled = value;
		image.context.oImageSmoothingEnabled = value;
		image.context.imageSmoothingEnabled = value;

		if (value) {
			image.canvas.style['image-rendering'] = 'auto';
			image.canvas.style.msInterpolationMode = 'bicubic';
		} else {
			var renderTypes = ['optimizeSpeed', 'crisp-edges', '-moz-crisp-edges', '-webkit-optimize-contrast', 'optimize-contrast', 'pixelated'];
			for (var i = 0; i < renderTypes.length; ++i) {
				image.canvas.style['image-rendering'] = renderTypes[i];
			}
			image.canvas.style.msInterpolationMode = 'nearest-neighbor';
		}
	},

	drawImage: function (target, image, x, y, alpha, scaleX, scaleY, angle) {

		alpha = alpha === undefined ? 1 : alpha;
		scaleX = scaleX === undefined ? 1 : scaleX;
		scaleY = scaleY === undefined ? 1 : scaleY;
		angle = angle || 0;

		image = chao.getImage(image);

		if (!chao.smoothing) {
			x = Math.round(x);
			y = Math.round(y);
		}

		target.context.save();
		target.context.globalAlpha = alpha;

		var rotationPivot = {
			x: (x + (image.width * scaleX * image.rotationOrigin.x)),
			y: (y + (image.height * scaleY * image.rotationOrigin.y))
		};

		target.context.translate(rotationPivot.x, rotationPivot.y);
		target.context.rotate(chao.deg2rad(angle));
		target.context.translate(-rotationPivot.x, -rotationPivot.y);

		target.context.drawImage(image.canvas, x, y, image.width * scaleX, image.height * scaleY);

		target.context.restore();
	},

	drawImagePart: function (target, image, x, y, rect, angle, scaleX, scaleY, alpha) {
		angle = angle || 0;
		alpha = alpha === undefined ? 1 : alpha;
		scaleX = scaleX === undefined ? 1 : scaleX;
		scaleY = scaleY === undefined ? 1 : scaleY;

		image = chao.getImage(image);

		var w = rect.width;
		var h = rect.height;
		var rotationPivot = {
			x: (x + (w * scaleX * image.rotationOrigin.x)),
			y: (y + (h * scaleY * image.rotationOrigin.y))
		};

		target.context.save();
		target.context.globalAlpha = alpha;

		target.context.translate(rotationPivot.x, rotationPivot.y);
		target.context.rotate(chao.deg2rad(angle));
		target.context.translate(-rotationPivot.x, -rotationPivot.y);

		x = scaleX >= 0 ? x : x - w * scaleX;
		y = scaleY >= 0 ? y : y - h * scaleY;

		if (!chao.smoothing) {
			x = Math.round(x);
			y = Math.round(y);
			rect.x = Math.round(rect.x);
			rect.y = Math.round(rect.y);
			rect.width = Math.round(rect.width);
			rect.height = Math.round(rect.height);
			w = Math.round(w);
			h = Math.round(h);
		}

		target.context.translate(x, y);
		target.context.scale(scaleX, scaleY);
		target.context.drawImage(image.canvas,
			rect.x, rect.y,
			rect.width, rect.height,
			0, 0, w, h);

		target.context.restore();
	},

	setFillStyle: function (image, color) {
		if (typeof color === "string") {
			image.context.fillStyle = color;
		} else {
			image.context.fillStyle = chao.getRGBAString(color);
		}
	},

	setStrokeStyle: function (image, color, width) {
		width = width || image.context.lineWidth;
		image.context.lineWidth = width;
		if (typeof color === "string") {
			image.context.strokeStyle = color;
		} else {
			image.context.strokeStyle = chao.getRGBAString(color);
		}
	},

	// Creates a color in a 0xFFFFFFFF form. Values in 0-255 range.
	makeColor: function (r, g, b, a) {
		a = a || 255;
		return (a << 24) | ((r & 0xff) << 16) | ((g & 0xff) << 8) | ((b & 0xff));
	},

	// Creates a color in a 0xFFFFFFFF form. Values in 0-1 range.
	makeColorf: function (r, g, b, a) {
		a = a || 1;
		return chao.makeColor(a * 255, r * 255, g * 255, b * 255);
	},

	// Creates a color string in "rgba(r,g,b,a)" format.
	getRGBAString: function (hexColor) {
		var r = (hexColor >> 16) & 0xff;
		var g = (hexColor >> 8) & 0xff;
		var b = hexColor & 0xff;
		var a = (hexColor >>> 24) / 255;
		return "rgba(" + r + "," + g + "," + b + "," + a + ")";
	},

	getPixel: function (image, x, y) {
		var data = image.context.getImageData(x, y, 1, 1).data;
		return (data[3] << 24) | ((data[0] & 0xff) << 16) | ((data[1] & 0xff) << 8) | ((data[2] & 0xff));
	},

	putPixel: function (image, x, y, color) {
		chao.setFillStyle(image, color);
		image.context.fillRect(x, y, 1, 1);
	},

	clearImage: function (image) {
		image.context.clearRect(0, 0, image.width, image.height);
	},

	clearToColor: function (image, color) {
		image.context.clearRect(0, 0, image.width, image.height);
		chao.setFillStyle(image, color);
		image.context.fillRect(0, 0, image.width, image.height);
	},

	drawLine: function (image, x1, y1, x2, y2, color, width) {
		chao.setStrokeStyle(image, color, width);
		image.context.beginPath();
		image.context.moveTo(x1, y1);
		image.context.lineTo(x2, y2);
		image.context.closePath();
		image.context.stroke();
	},

	drawRect: function (image, x, y, w, h, color, width) {
		chao.setStrokeStyle(image, color, width);
		image.context.strokeRect(x, y, w, h);
	},

	drawRectFill: function (image, x, y, w, h, color) {
		chao.setFillStyle(image, color);
		image.context.fillRect(x, y, w, h);
	},

	drawPolygonLines: function (image, points) {
		image.context.beginPath();
		for (var i = 0; i < points.length; i++) {
			if (i) {
				image.context.lineTo(points[i].x, points[i].y);
			} else {
				image.context.moveTo(points[i].x, points[i].y);
			}
		}
		image.context.closePath();
	},

	drawPolygon: function (image, points, color, width) {
		chao.setStrokeStyle(image, color, width);
		chao.drawPolygonLines(image, points);
		image.context.stroke();
	},

	drawPolygonFill: function (image, points, color) {
		chao.setFillStyle(image, color);
		chao.drawPolygonLines(image, points);
		image.context.fill();
	},

	updatePauseFadeImage: function () {
		var playWidth = chao.screenWidth * 0.3;
		var playHeight = chao.screenWidth * 0.3;
		var center = {
			x: chao.screenWidth / 2,
			y: chao.screenHeight / 2
		};

		var poly = chao.makePolygon([
			center.x - playWidth / 2, center.y - playHeight / 2,
			center.x + playWidth / 2, center.y,
			center.x - playWidth / 2, center.y + playHeight / 2
		]);

		chao.imagePauseFade = chao.createImage(undefined, chao.screenWidth, chao.screenHeight);
		chao.clearToColor(chao.imagePauseFade, chao.makeColor(0, 0, 0, 160));
		chao.drawPolygonFill(chao.imagePauseFade, poly.points, chao.makeColor(255, 255, 255, 170));
	},

	loadFont: function (key, path) {
		var s = document.createElement('style');
		var fontname = "font" + (chao.loadedFontsNum++);
		s.id = fontname;
		s.type = "text/css";
		document.head.appendChild(s);
		s.textContent = "@font-face { font-family: " + fontname + "; src:url('" + path + "');}";

		var newFont = {
			key: key,
			element: s,
			name: fontname,
			type: "fnt",
			ready: false
		};
		chao.addFont(newFont);
		return newFont;
	},

	loadBase64Font: function (key, data) {
		var s = document.createElement('style');
		var fontname = "font" + (chao.loadedFontsNum++);
		s.id = fontname;
		s.type = "text/css";
		document.head.appendChild(s);
		s.textContent = "@font-face { font-family: " + fontname + "; src:url('data:application/font-woff;base64," + data + "') format('woff');}";

		var newFont = {
			key: key,
			element: s,
			name: fontname,
			type: "fnt",
			ready: false
		};
		chao.addFont(newFont);
		return newFont;
	},

	addFont: function (font) {
		var oldFont = -1;

		for (var i = 0; i < chao.fonts.length; ++i) {
			if (chao.fonts[i].key == font.key) {
				oldFont = i;
				break;
			}
		}

		if (oldFont != -1) {
			chao.fonts.splice(oldFont, 1);
		}

		// add text image for font ready state checking
		font.testImage = chao.createImage(undefined, 1, 1);
		font.testImage.context.font = "20px " + font.name;
		chao.drawText(font.testImage, font, "M", 0, 0, 20);
		font.testSize = chao.getTextSize(font.testImage, chao.fontTestString);

		chao.fonts.push(font);
	},

	getFont: function (key) {
		if (typeof key === "string" || key instanceof String) {
			var n = chao.fonts.length;
			for (var i = 0; i < n; ++i) {
				if (chao.fonts[i].key == key) {
					return chao.fonts[i];
				}
			}
		}
		return key;
	},

	drawText: function (image, font, text, x, y, size, color, align, outlineColor, outlineSize) {
		color = color || 0xff000000;
		align = align || "left";
		outlineColor = outlineColor || 0xff000000;
		outlineSize = outlineSize || 0;

		image.context.font = size.toFixed() + "px " + font.name;
		image.context.textAlign = align;

		chao.setFillStyle(image, color);
		image.context.fillText(text, x, y + size);
		if (outlineSize > 0) {
			chao.setStrokeStyle(image, outlineColor, outlineSize);
			image.context.strokeText(text, x, y + size);
		}
	},

	getTextSize: function (image, text) {
		return {
			width: image.context.measureText(text).width,
			height: image.context.measureText("M").width // well, it seems good enough.
		};
	},

	updateFontsLoading: function () {
		var n = chao.fonts.length;
		var currentSize = 0;
		for (var i = 0; i < n; ++i) {
			var font = chao.fonts[i];
			if (!font.ready) {
				chao.drawText(font.testImage, font, "M", 0, 0, 20);
				currentSize = chao.getTextSize(font.testImage, chao.fontTestString);
				if (currentSize != font.testSize) {
					font.ready = true;
				}
			}
		}
	},

	loadSound: function (key, path, volume, looped, channels) {
		if (channels < 1) {
			chao.log("Can't add a sound with no channels, you silly goose.");
			return null;
		}
		if (chao.getSound(key) !== null) {
			chao.log("There is already a sound loaded with this key: \"" + key + "\".");
			return null;
		}
		if (!chao.canPlayAudioType(path.split('.').pop())) {
			chao.log("This browser will be unable to play this sound: " + path + ". Skipping!");
			return null;
		}

		var sound = {};

		sound.key = key;
		sound.channels = [];
		sound.currentChannel = 0;
		sound.isMusic = false;
		sound.volume = volume || 1;
		sound.ready = false;

		sound.channels.push(new Audio(path));
		sound.channels[0].onloadeddata = function () {
			sound.ready = true;
			for (var i = 0; i < (channels || 1); ++i) {
				if (i > 0) {
					sound.channels.push(new Audio(path));
				}

				if (looped) {
					sound.channels[i].addEventListener('ended', function () {
						this.currentTime = 0;
					}, false);
					sound.channels[i].loop = true;
				}
			}
		}
		sound.channels[0].onerror = function (e) {
			var msg = "Loading the \"" + sound.key + "\" sound failed with error: ";
			switch (e.currentTarget.error.code) {
				case 1:
					msg += "MEDIA_ERR_ABORTED";
					break;
				case 2:
					msg += "MEDIA_ERR_NETWORK";
					break;
				case 3:
					msg += "MEDIA_ERR_DECODE";
					break;
				case 4:
					msg += "MEDIA_ERR_SRC_NOT_SUPPORTED";
					break;
				case 5:
					msg += "MEDIA_ERR_ENCRYPTED";
					break;
			}
			chao.log(msg);
			sound.ready = true;
		}

		chao.sounds.push(sound);

		return sound;
	},

	loadMusic: function (key, path, fallbackFormatPath, volume) {
		var sound = null;
		var mainExtension = path.split('.').pop();
		var fallbackExtension = fallbackFormatPath ? fallbackFormatPath.split('.').pop() : "";

		if (chao.canPlayAudioType(mainExtension)) {
			sound = chao.loadSound(key, path, volume, true, 1);
		} else if (chao.canPlayAudioType(fallbackExtension)) {
			sound = chao.loadSound(key, fallbackFormatPath, volume, true, 1);
		}

		if (sound) {
			sound.isMusic = true;
		}

		return sound;
	},

	getSound: function (key) {
		if (typeof key === "string" || key instanceof String) {
			var n = chao.sounds.length;
			for (var i = 0; i < n; ++i) {
				if (chao.sounds[i].key === key) {
					return chao.sounds[i];
				}
			}

			return null;
		}

		return key;
	},

	playSound: function (key, force) {

		if (force === undefined) {
			force = true;
		}

		var sound = chao.getSound(key);
		if (!sound) {
			chao.log("There is no loaded sound with this key: \"" + key + "\".");
		}

		if (sound.isMusic) {
			if (sound == chao.currentMusic && sound.playing) {
				return;
			}
			if (chao.currentMusic && sound != chao.currentMusic) {
				chao.stopSound(chao.currentMusic);
			}
			chao.currentMusic = sound;
		}

		if (sound.isMusic || !chao.muted) {
			// Play the sound. Don't if sound it muted, but if it's a music, play it regardless. It will be paused in the next lines. :)

			sound.currentChannel++;
			if (sound.currentChannel >= sound.channels.length) {
				sound.currentChannel = 0;
			}

			if (force) {
				sound.channels[sound.currentChannel].currentTime = 0;
			}
			sound.channels[sound.currentChannel].volume = sound.volume;
			var promise = sound.channels[sound.currentChannel].play();

			if (promise !== undefined) {
				promise.then(function () {
					// Whoa! We are fine!
				}).catch(function () {
					// Was unable to play sound. :(
					// Prolly the browser is messing with audio permissions. Will try to resume it on the first input.
					if (sound.isMusic) {
						chao.musicWasSupressed = true;
					}
				});
			}

		}
		if (sound.isMusic && chao.muted) {
			chao.pauseSound(sound);
		}
	},

	setMute: function (value) {
		if (chao.muted != value) {
			chao.muted = value;

			if (value) {
				for (var i = 0; i < chao.sounds.length; ++i) {
					if (chao.sounds[i] == chao.currentMusic) {
						continue;
					}

					chao.stopSound(chao.sounds[i]);
				}
			}

			if (chao.currentMusic !== null) {
				if (value) {
					chao.pauseSound(chao.currentMusic);
				} else {
					chao.playSound(chao.currentMusic, false);
				}
			}
		}
	},

	toggleMute: function () {
		chao.setMute(!chao.muted);
	},

	stopSound: function (key) {
		var sound = chao.getSound(key);

		for (var i = 0; i < sound.channels.length; ++i) {
			sound.channels[i].pause();
			sound.channels[i].currentTime = 0;
		}
	},

	getSoundPosition: function (key) {
		var sound = chao.getSound(key);
		return sound.channels[sound.currentChannel].currentTime;
	},

	setSoundPosition: function (key, position) {
		var sound = chao.getSound(key);
		sound.channels[sound.currentChannel].currentTime = position;
	},

	pauseSound: function (key) {
		var sound = chao.getSound(key);
		sound.channels[sound.currentChannel].pause();
	},

	resumeMusicPlaybackIfNeeded: function () {
		if (chao.musicWasSupressed) {
			chao.musicWasSupressed = false;
			chao.playSound(chao.currentMusic);
		}
	},

	canPlayAudioType: function (extension) {
		var audioTest = document.createElement('audio');
		if (!audioTest || !audioTest.canPlayType) {
			return false;
		}

		switch (extension) {
			case "ogg": {
				if (audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, '')) {
					return true;
				}
				break;
			}
			case "opus": {
				if (audioTest.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, '') || audioTest.canPlayType('audio/opus;').replace(/^no$/, '')) {
					return true;
				}
				break;
			}
			case "mp3": {
				if (audioTest.canPlayType('audio/mpeg;').replace(/^no$/, '')) {
					return true;
				}
				break;
			}
			case "wav": {
				if (audioTest.canPlayType('audio/wav; codecs="1"').replace(/^no$/, '')) {
					return true;
				}
				break;
			}
			case "m4a": {
				if (audioTest.canPlayType('audio/x-m4a;') || audioTest.canPlayType('audio/aac;').replace(/^no$/, '')) {
					return true;
				}
			}
		}

		return false;
	},

	updateMouse: function () {
		chao.mouse.wheelDelta = 0;
		chao.mouse.justPressed = false;
		chao.mouse.justReleased = false;
		chao.mouse.justPressedRight = false;
		chao.mouse.justReleasedRight = false;
		chao.mouse.justPressedMiddle = false;
		chao.mouse.justReleasedMiddle = false;
	},

	getEntityUnderMouse: function () {
		return chao.getCurrentState().rootEntity.getEntityAt(chao.mouse.x, chao.mouse.y);
	},

	handleMouseDown: function (button, x, y) {
		chao.resumeMusicPlaybackIfNeeded();

		if (chao.mouse.suppressUntilUp) {
			return;
		}

		switch (button) {
			case 1:
				chao.mouse.pressed = chao.mouse.justPressed = true;
				chao.focusedEntity = chao.getEntityUnderMouse();
				if (chao.focusedEntity != null) {
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

	handleMouseUp: function (button) {

		if (chao.mouse.suppressUntilUp) {
			chao.mouse.suppressUntilUp = false;
		}

		switch (button) {
			case 1:
				chao.mouse.pressed = false;
				chao.mouse.justReleased = true;
				if (chao.focusedEntity != null) {
					if (chao.getEntityUnderMouse() != chao.focusedEntity) {
						chao.focusedEntity.onCancel();
					} else {
						chao.focusedEntity.onRelease();
					}
					chao.focusedEntity = null;
				}
				break;
			case 2:
				chao.mouse.pressedMiddle = false;
				chao.mouse.justReleasedMiddle = true;
				break;
			case 3:
				chao.mouse.pressedRight = false;
				chao.mouse.justReleasedRight = true;
				break;
		}
	},

	handleMouseMove: function (x, y) {
		chao.mouse.x = x;
		chao.mouse.y = y;

		if (chao.mouse.pressed) {
			var currentEntity = chao.getEntityUnderMouse();
			if (currentEntity != chao.focusedEntity) {
				if (chao.focusedEntity && !chao.focusedEntity.keepClickFocus) {
					chao.focusedEntity.onCancel();
				}
				if (!chao.focusedEntity || !chao.focusedEntity.keepClickFocus) {
					chao.focusedEntity = currentEntity;
				}
			}

			if (chao.focusedEntity) {
				chao.focusedEntity.onMove();
			}
		}
	},

	onMouseDown: function (e) {
		chao.handleMouseDown(e.which, e.offsetX, e.offsetY);
		e.preventDefault();
	},

	onMouseUp: function (e) {
		chao.handleMouseUp(e.which);
		e.preventDefault();
	},

	onMouseMove: function (e) {
		chao.handleMouseMove(e.offsetX, e.offsetY);
		e.preventDefault();
	},

	onMouseWheel: function (e) {
		chao.mouse.wheelDelta = e.deltaY;
		e.preventDefault();
	},

	setMouseVisibility: function (value) {
		canvas.canvas.style.cursor = value ? "auto" : "none";
	},

	updateTouches: function () {
		for (var i = 0; i < chao.touches.length; ++i) {
			chao.touches[i].justPressed = false;
		}
	},

	onTouchStart: function (e) {
		var touches = e.changedTouches;
		for (var i = 0; i < touches.length; ++i) {
			var touchPos = chao.getTouchPos(touches[i]);
			var newTouch = {
				id: touches[i].identifier,
				x: touchPos.x,
				y: touchPos.y,
				justPressed: true,
				isMouse: chao.touches.length == 0
			};
			chao.touches.push(newTouch);

			if (newTouch.isMouse) {
				chao.handleMouseDown(1, newTouch.x, newTouch.y);
				chao.handleMouseMove(newTouch.x, newTouch.y);
			}
		}

		if (e.cancelable) {
			e.preventDefault();
		}
	},

	onTouchMove: function (e) {
		var touches = e.changedTouches;
		for (var i = 0; i < touches.length; ++i) {
			var touch = chao.getTouch(touches[i].identifier);
			var touchPos = chao.getTouchPos(touches[i]);
			if (touch != null) {
				touch.x = touchPos.x;
				touch.y = touchPos.y;

				if (touch.isMouse) {
					chao.handleMouseMove(touch.x, touch.y);
				}
			}
		}
		if (e.cancelable) {
			e.preventDefault();
		}
	},

	onTouchEnd: function (e) {
		var touches = e.changedTouches;
		for (var i = 0; i < touches.length; ++i) {
			var touch = chao.getTouch(touches[i].identifier);
			if (touch != null) {
				if (touch.isMouse) {
					chao.handleMouseUp(1);
				}

				var index = chao.touches.indexOf(touch);
				chao.touches.splice(index, 1); // BALEETED!
			}
		}

		if (e.cancelable) {
			e.preventDefault();
		}
	},

	getTouch: function (id) {
		for (var i = 0; i < chao.touches.length; ++i) {
			if (chao.touches[i].id == id) {
				return chao.touches[i];
			}
		}
		return null;
	},

	getTouchPos: function (touch) {
		return {
			x: (touch.pageX - touch.target.offsetLeft) / chao.screenScaleX,
			y: (touch.pageY - touch.target.offsetTop) / chao.screenScaleY
		};
	},

	updateKeyboard: function () {
		for (var i = 0; i < 0x80; ++i) {
			chao.justPressed[i] = false;
			chao.justReleased[i] = false;
		}
	},

	onKeyDown: function (e) {
		if (!chao.pressed[e.keyCode]) {
			chao.justPressed[e.keyCode] = true;
		}
		chao.pressed[e.keyCode] = true;

		e.preventDefault();
	},

	onKeyUp: function (e) {
		chao.justReleased[e.keyCode] = true;
		chao.pressed[e.keyCode] = false;

		e.preventDefault();
	},

	resize: function (e) {
		if (chao.scalingMode <= chao.SCALING_MODE_NONE || chao.scalingMode >= chao.SCALING_MODE_END) {
			return;
		}

		var canvas = chao.canvas.canvas;
		var scaleX = window.innerWidth / chao.baseScreenWidth;
		var scaleY = window.innerHeight / chao.baseScreenHeight;
		var scale = Math.min(scaleX, scaleY);

		switch (chao.scalingMode) {
			case chao.SCALING_MODE_STRETCH: {
				chao.setCanvasScale(scaleX, scaleY);
				break;
			}
			case chao.SCALING_MODE_KEEP_RATIO: {
				chao.setCanvasScale(scale, scale);
				var center = "horizontally";
				if ((canvas.width > canvas.height && canvas.width * scale >= window.innerWidth) ||
					(canvas.width <= canvas.height && canvas.height * scale < window.innerHeight)) {
					center = "vertically";
				}

				var margin;
				if (center === "horizontally") {
					margin = (window.innerWidth - canvas.width * scale) / 2;
					canvas.style.marginLeft = margin + "px";
					canvas.style.marginRight = margin + "px";
				} else {
					margin = (window.innerHeight - canvas.height * scale) / 2;
					canvas.style.marginTop = margin + "px";
					canvas.style.marginBottom = margin + "px";
				}

				break;
			}
			case chao.SCALING_MODE_EXTEND: {
				chao.setCanvasScale(scale, scale);

				if (chao.baseScreenWidth * scale < window.innerWidth) {
					// extend the viewport horizontally
					var missingPixs = window.innerWidth - (chao.baseScreenWidth * scale);
					chao.screenWidth = chao.baseScreenWidth + (missingPixs / scale);
					chao.screenHeight = chao.baseScreenHeight;
				} else {
					// extend the viewport vertically
					var missingPixs = window.innerHeight - (chao.baseScreenHeight * scale);
					chao.screenWidth = chao.baseScreenWidth;
					chao.screenHeight = chao.baseScreenHeight + (missingPixs / scale);
				}
				chao.canvas.width = chao.screenWidth;
				chao.canvas.height = chao.screenHeight;
				canvas.setAttribute("width", chao.screenWidth);
				canvas.setAttribute("height", chao.screenHeight);

				chao.updatePauseFadeImage();
				break;
			}
		}

		// Fix Safari scaling
		var ua = navigator.userAgent.toLowerCase();
		if (ua.indexOf("safari") != -1) {
			if (ua.indexOf("chrome") > -1) {
				// Chrome
			} else {
				// Safari
				chao.canvas.canvas.style.maxHeight = "100%";
				chao.canvas.canvas.style.minHeight = "100%";
			}
		}
		if (chao.loadingState && chao.loadingState.rootEntity) {
			chao.loadingState.rootEntity.width = chao.screenWidth;
			chao.loadingState.rootEntity.height = chao.screenHeight;
			if (chao.loadingState.resize) {
				chao.loadingState.resize();
			}
		}
		if (chao.currentState && chao.currentState.rootEntity) {
			chao.currentState.rootEntity.width = chao.screenWidth;
			chao.currentState.rootEntity.height = chao.screenHeight;
			if (chao.currentState.resize) {
				chao.currentState.resize();
			}
			chao.currentState.rootEntity.resize();
		}
	},

	setCanvasScale: function (x, y) {
		chao.screenScaleX = x;
		chao.screenScaleY = y;

		var canvas = chao.canvas.canvas;
		canvas.style.marginLeft = "0px";
		canvas.style.marginRight = "0px";
		canvas.style.marginTop = "0px";
		canvas.style.marginBottom = "0px";
		canvas.style.paddingLeft = 0;
		canvas.style.paddingRight = 0;
		canvas.style.paddingTop = 0;
		canvas.style.paddingBottom = 0;
		canvas.style.display = "block";
		canvas.scaled = true;

		canvas.style.transformOrigin = "0 0";
		canvas.style.transform = "scale(" + x + "," + y + ")";
	},

	getLoadingProgress: function () {
		var allData = chao.images.length + chao.sounds.length;
		var loadedData = 0;

		for (var i = 0; i < chao.images.length; ++i) {
			if (chao.images[i].ready) {
				loadedData++;
			}
		}

		for (var i = 0; i < chao.sounds.length; ++i) {
			if (chao.sounds[i].ready) {
				loadedData++;
			}
		}

		return loadedData / allData;
	},

	getTimeDelta: function () {
		return chao.timeDelta * chao.timeScale;
	},

	getUnscaledDelta: function () {
		return chao.timeDelta;
	},

	makeRect: function (x, y, width, height) {
		return {
			x: x,
			y: y,
			width: width,
			height: height
		}
	},

	makePoint: function (x, y) {
		return {
			x: x,
			y: y
		};
	},

	makeVector: function (pointFrom, pointTo) {
		return {
			x: pointTo.x - pointFrom.x,
			y: pointTo.y - pointFrom.y
		};
	},

	getVectorLength: function (vec) {
		return Math.sqrt((vec.x * vec.x) + (vec.y * vec.y));
	},

	normalizeVector: function (vec) {
		var len = chao.getVectorLength(vec);
		vec.x /= len;
		vec.y /= len;
	},

	areLinesIntersecting: function (line1a, line1b, line2a, line2b) {
		var det = (line1b.x - line1a.x) * (line2b.y - line2a.y) - (line2b.x - line2a.x) * (line1b.y - line1a.y);
		if (det === 0) {
			return false;
		}

		var lambda = ((line2b.y - line2a.y) * (line2b.x - line1a.x) + (line2a.x - line2b.x) * (line2b.y - line1a.y)) / det;
		var gamma = ((line1a.y - line1b.y) * (line2b.x - line1a.x) + (line1b.x - line1a.x) * (line2b.y - line1a.y)) / det;
		return (lambda > 0 && lambda < 1) && (gamma > 0 && gamma < 1);
	},

	// Points - All the points shaping the polygon. 
	// Can be array of points (see makePoint()) or just a simple array built like this: [x1, y1, x2, y2, ...].
	makePolygon: function (points) {
		if (!Array.isArray(points) || points.length < 1) {
			chao.log("makePolygon: points param is not an array or has no elements. :(");
			return;
		}

		if (typeof points[0] != "object") {
			var newPoints = [];
			for (var i = 0; i < points.length / 2; ++i) {
				newPoints.push({
					x: points[i * 2],
					y: points[i * 2 + 1]
				});
			}
			points = newPoints;
		}

		var left = Number.MAX_VALUE;
		var right = -Number.MAX_VALUE;
		var top = Number.MAX_VALUE;
		var bottom = -Number.MAX_VALUE;

		for (var i = 0; i < points.length; ++i) {
			if (points[i].x < left) left = points[i].x;
			if (points[i].x > right) right = points[i].x;
			if (points[i].y < top) top = points[i].y;
			if (points[i].y > bottom) bottom = points[i].y;
		}

		return {
			points: points, // Points shaping the poly
			left: left, // The far left point
			right: right, // The far right point
			top: top, // Highest point
			bottom: bottom // Lowest point
		};
	},

	isPointInsidePolygon: function (point, polygon) {
		if (point.x < polygon.left || point.x > polygon.right || point.y < polygon.top || point.y > polygon.bottom) {
			return false;
		}

		var intersections = 0
		var raycastOrigin = {
			x: polygon.left - 1,
			y: point.y
		};
		var pointsNum = polygon.points.length;
		var polyLineA;
		var polyLineB;

		for (var i = 0; i < pointsNum; ++i) {
			polyLineA = polygon.points[i];
			polyLineB = i === 0 ? polygon.points[pointsNum - 1] : polygon.points[i - 1];

			if (chao.areLinesIntersecting(raycastOrigin, point, polyLineA, polyLineB)) {
				intersections++;
			}
		}

		if (intersections & 1 == 1) {
			return true;
		}

		return false;
	},

	getRandom: function (max) {
		max -= 1;
		return Math.round(max * Math.random());
	},

	rad2deg: function (radians) {
		return radians * (180.0 / Math.PI);
	},

	deg2rad: function (degrees) {
		return degrees * (Math.PI / 180.0);
	},

	clamp: function (value, min, max) {
		if (value < min) value = min;
		if (value > max) value = max;
		return value;
	},

	moveTowards: function (a, b, maxStep) {
		if (b > a) {
			a += maxStep;
			if (a > b) {
				a = b;
			}
		} else if (b < a) {
			a -= maxStep
			if (a < b) {
				a = b;
			}
		}
		return a;
	},

	interpolate: function (a, b, v, interpolationType) {
		interpolationType = interpolationType || chao.INTERPOLATE_LINEAR
		v = chao.clamp(v, 0.0, 1.0)

		switch (interpolationType) {
			case chao.INTERPOLATE_SMOOTH: {
				v = v * v * (3 - 2 * v);
				break;
			}
			case chao.INTERPOLATE_EASE_TO: {
				v = 1 - (1 - v) * (1 - v);
				break;
			}
			case chao.INTERPOLATE_EASE_FROM: {
				v = v * v;
				break;
			}
			case chao.INTERPOLATE_BOUNCE: {
				if (v < (1.0 / 2.75)) {
					v = 7.5625 * v * v;
				} else if (v < (2.0 / 2.75)) {
					v = 7.5625 * (v -= (1.5 / 2.75)) * v + 0.75;
				} else if (v < (2.5 / 2.75)) {
					v = 7.5625 * (v -= (2.25 / 2.75)) * v + 0.9375;
				} else {
					v = 7.5625 * (v -= (2.625 / 2.75)) * v + 0.984375;
				}
				break;
			}
			case chao.INTERPOLATE_ELASTIC: {
				var amplitude = 0.0;
				var period = 0.3;
				if (v == 0) {
					v = 0;
				} else if (v == 1.0) {
					v = 1;
				} else {
					var s = period / 4.0;
					if (amplitude < 1.0) {
						amplitude = 1.0;
					} else {
						s = period * Math.sin(1.0 / amplitude) / (2 * Math.PI);
					}
					v = (amplitude * Math.pow(2.0, -10.0 * v) * Math.sin((v - s) * (2.0 * Math.PI) / period) + 1.0);
				}
			}
		}

		return (b * v) + (a * (1.0 - v))
	},

	interpolateVector: function (a, b, v, interpolationType) {
		return {
			x: chao.interpolate(a.x, b.x, v, interpolationType),
			y: chao.interpolate(a.y, b.y, v, interpolationType)
		};
	},

	setupLogTarget: function (htmlElementId) {
		chao.debugLogTarget = document.getElementById(htmlElementId);
		window.addEventListener("error", function (e) {
			var fa = e.filename.split("/");
			fa.reverse();
			chao.log("[" + fa[0] + ":" + e.lineno + ":" + e.colno + "] " + e.message);
		});
	},

	log: function (thingie) {
		if (chao.loggingEnabled) {
			if (chao.debugLogTarget) {
				chao.debugLogTarget.innerHTML += String(thingie).replace(/\n/g, "<br/>") + "<br/>";
			} else {
				console.log(thingie);
			}
		}
	},

	logHierarchy: function (entity) {
		var logString = chao.logEntity(entity, 0);
		chao.log(logString);
	},

	logEntity: function (entity, indent) {

		entity = entity || chao.getCurrentState().rootEntity;
		indent = indent || 0;

		var entityLog = "";
		for (var i = 0; i < indent; ++i) {
			entityLog += "-";
		}
		entityLog += entity.name;
		if (entity.components.length > 0) {
			entityLog += " (";
			for (var i = 0; i < entity.components.length; ++i) {
				entityLog += entity.components[i].name;
				if (i < entity.components.length - 1) entityLog += ", ";
			}
			entityLog += ")";
		}

		entityLog += " p:" + Math.ceil(entity.x) + "x" + Math.ceil(entity.y);
		entityLog += " s:" + Math.ceil(entity.width) + "x" + Math.ceil(entity.height);

		if (!entity.foldInLog) {
			for (var i = 0; i < entity.children.length; ++i) {
				entityLog += chao.logEntity(entity.children[i], indent + 1);
			}
		} else {
			entityLog += "\n";
			for (var i = 0; i < indent + 1; ++i) {
				entityLog += "  ";
			}
			entityLog += "(...)";
		}

		return "\n" + entityLog;
	},

	installVisibilityHandler: function () {

		if (chao.visibilityHandlerInstalled) {
			chao.log("Visibility Handler is already installed!");
			return;
		}

		chao.visibilityHandlerInstalled = true;

		var hiddenVar;

		if (document.hidden !== undefined) {
			hiddenVar = "visibilitychange";
		} else {
			var vendors = ["webkit", "moz", "ms"];

			vendors.forEach(function (prefix) {
				if (document[prefix + "Hidden"] !== undefined) {
					document.hidden = function () {
						return document[prefix + "Hidden"];
					};
					hiddenVar = prefix + "visibilitychange";
				}
			});
		}

		if (hiddenVar) {
			document.addEventListener(hiddenVar, function (event) {
				if (document.hidden || event.type === "pause") {
					chao.onFocusChange(false);
				} else {
					chao.onFocusChange(true);
				}
			}, false);
		}

		window.onblur = function () {
			chao.onFocusChange(false);
		}
		window.onfocus = function () {
			chao.onFocusChange(true);
		}
	},

	helpers: {

		createSprite: function (entityName, image, x, y) {
			return (new Entity(entityName, x, y)).addComponent(new ComponentSprite(image));
		},

		createText: function (entityName, x, y, font, text, size) {
			return (new Entity(entityName, x, y)).addComponent(new ComponentText(font, text, size));
		},

		createButton: function (entityName, x, y, image, imagePressed, font, fontSize, text) {
			var newButton = (new Entity(entityName, x, y)).addComponent(new ComponentButton(image));

			if (imagePressed) {
				newButton.setImagePressed(imagePressed);
			}

			if (font && fontSize) {
				text = text || "";
				newButton.setText(text, font, fontSize);
			}

			return newButton;
		},

		fadeEntityOut: function (entity, time, delay) {
			return ComponentTween.addTween(entity, "alpha", 1.0, 0.0, time || 0.25, chao.INTERPOLATE_LINEAR, chao.REPEAT_MODE_ONCE, delay || 0.0);
		},

		fadeEntityIn: function (entity, time, delay) {
			return ComponentTween.addTween(entity, "alpha", 0.0, 1.0, time || 0.25, chao.INTERPOLATE_LINEAR, chao.REPEAT_MODE_ONCE, delay || 0.0);
		},

		addBounceTween: function (entity, amplitude, time) {
			var tweenName = "BounceTween";
			entity.removeComponentsByName(tweenName);
			var newTween = ComponentTween.addTween(entity, "y", entity.y - amplitude / 2, entity.y + amplitude / 2, time, chao.INTERPOLATE_SMOOTH, chao.REPEAT_MODE_BOUNCE);
			newTween.name = tweenName;
			return newTween;
		},

		shake: function (entity, force, time, damped) {
			var shakerName = "Disposable Shake";

			var oldShake = entity.getComponentByName(shakerName);
			if (oldShake != null) {
				entity.removeComponent(oldShake);
			}

			var newShake = new ComponentShake(force, time, damped);
			newShake.name = shakerName;
			newShake.disposable = true;
			entity.addComponent(newShake);
			newShake.shake();
		}
	}

};

function Entity(name, x, y) {
	this.name = name || "Entity",

	this.transformMatrix = {
		x: [1, 0],
		y: [0, 1],
		origin: [x || 0, y || 0],
	},

	this.width = 0, // see also getWidth()
	this.height = 0, // see also getHeight()

	this.alpha = 1.0,

	this.anchor = {},

	this.children = [],
	this.components = [],
	this.removalQueuedComponents = [],
	this.parent = null,

	this.visible = true,
	this.paused = false,
	this.clickable = false,
	this.keepClickFocus = false,
	this.foldInLog = false,

	this.destroy = function () {
		for (var i = 0; i < this.components.length; ++i) {
			if (this.components[i].destroy) {
				this.components[i].destroy();
			}
		}

		for (var i = 0; i < this.children.length; ++i) {
			this.children[i].destroy();
		}

		this.children = [];
		this.components = [];
	}

	this.draw = function () {
		if (!this.visible) {
			return;
		}

		var componentsNum = this.components.length;
		for (var i = 0; i < componentsNum; ++i) {
			if (this.components[i].draw) {
				this.components[i].draw();
			}
		}

		var childrenNum = this.children.length;
		for (var i = 0; i < childrenNum; ++i) {
			if (this.children[i].draw) {
				this.children[i].draw();
			}
		}
	}

	this.update = function () {
		if (this.paused || !this.visible) {
			return;
		}

		var componentsNum = this.components.length;
		for (var i = 0; i < componentsNum; ++i) {
			if (this.components[i].update) {
				this.components[i].update();
			}
		}

		var childrenNum = this.children.length;
		for (var i = 0; i < childrenNum; ++i) {
			if (this.children[i].update) {
				this.children[i].update();
			}
		}

		if (this.removalQueuedComponents.length > 0) {
			for (var i = 0; i < this.removalQueuedComponents.length; ++i) {
				var component = this.removalQueuedComponents[i];
				if (component.remove) {
					component.remove();
				}
				this.components.splice(this.components.indexOf(component), 1);
			}
			this.removalQueuedComponents = [];
		}
	}

	this.add = function (childEntity) {
		if (childEntity.parent === undefined) {
			chao.log("The object you are trying to add as an entity is not an Entity.");
			chao.log(childEntity);
			return;
		}
		this.children.push(childEntity);
		childEntity.parent = this;
		return childEntity;
	}

	this.addWithComponent = function (childEntity, component) {
		var newEntity = this.add(childEntity);
		if (newEntity) {
			newEntity.addComponent(component);
			return component;
		}
	}

	this.remove = function (childEntity) {
		if (childEntity.parent === this) {
			this.children.splice(this.children.indexOf(childEntity), 1);
			return childEntity;
		}
	}

	this.resize = function () {
		if (this.anchor.stretch) {
			this.stretchOnParent(true);
		}
		if (this.anchor.alignX != undefined && this.anchor.anchorX != undefined && this.anchor.pxOffsetX != undefined) {
			this.alignToParentHorizontally(this.anchor.alignX, this.anchor.anchorX, this.anchor.pxOffsetX);
		}
		if (this.anchor.alignY != undefined && this.anchor.anchorY != undefined && this.anchor.pxOffsetY != undefined) {
			this.alignToParentVertically(this.anchor.alignY, this.anchor.anchorY, this.anchor.pxOffsetY);
		}

		var componentsNum = this.components.length;
		for (var i = 0; i < componentsNum; ++i) {
			if (this.components[i].resize) {
				this.components[i].resize();
			}
		}

		var childrenNum = this.children.length;
		for (var i = 0; i < childrenNum; ++i) {
			this.children[i].resize();
		}
	}

	this.addComponent = function (component) {
		if (!component.entity) {
			component.entity = this;
			if (component.create) {
				component.create();
			}
			if (component.resize) {
				component.resize();
			}
			this.components.push(component);

			return component;
		} else {
			chao.log("Hey, this component is already bound to an Entity: " + component.entity);
		}

		return null;
	}

	this.getComponentByName = function (componentName) {
		for (var i = 0; i < this.components.length; ++i) {
			var c = this.components[i];
			if (c.name === componentName && this.removalQueuedComponents.indexOf(c) == -1) {
				return this.components[i];
			}
		}

		return null;
	}

	this.getComponentsByName = function (componentName) {
		var allComponents = [];

		for (var i = 0; i < this.components.length; ++i) {
			var c = this.components[i];
			if (c.name === componentName && this.removalQueuedComponents.indexOf(c) == -1) {
				allComponents.push(this.components[i]);
			}
		}

		return allComponents;
	}

	this.getComponentInChildrenByName = function (componentName) {
		var foundComponent = this.getComponentByName(componentName);
		if (foundComponent != null) {
			return foundComponent;
		}

		for (var i = 0; i < this.children.length; ++i) {
			foundComponent = this.children[i].getComponentInChildrenByName(componentName);
			if (foundComponent != null) {
				return foundComponent;
			}
		}

		return null;
	}

	this.removeComponent = function (component) {
		if (component.entity === this) {
			this.removalQueuedComponents.push(component);
		} else {
			chao.log("Entity " + this + " have no such component: " + component);
		}
	}

	this.removeComponentByName = function (componentName) {
		this.removeComponent(this.getComponentByName(componentName));
	}

	this.removeComponentsByName = function (componentName) {
		for (;;) {
			var component = this.getComponentByName(componentName);
			if (!component) {
				break;
			}
			this.removeComponent(component);
		}
	}

	this.onClick = function () {
		var relativeX = chao.mouse.x - this.screenX;
		var relativeY = chao.mouse.y - this.screenY;
		for (var i = 0; i < this.components.length; ++i) {
			if (this.components[i].onClick) {
				this.components[i].onClick(relativeX, relativeY);
			}
		}
	}

	this.onMove = function () {
		var relativeX = chao.mouse.x - this.screenX;
		var relativeY = chao.mouse.y - this.screenY;
		for (var i = 0; i < this.components.length; ++i) {
			if (this.components[i].onMove) {
				this.components[i].onMove(relativeX, relativeY);
			}
		}
	}

	this.onCancel = function () {
		for (var i = 0; i < this.components.length; ++i) {
			if (this.components[i].onCancel) {
				this.components[i].onCancel();
			}
		}
	}

	this.onRelease = function () {
		var relativeX = chao.mouse.x - this.screenX;
		var relativeY = chao.mouse.y - this.screenY;
		for (var i = 0; i < this.components.length; ++i) {
			if (this.components[i].onRelease) {
				this.components[i].onRelease(relativeX, relativeY);
			}
		}
	}

	this.stretchOnParent = function (setAnchor = true) {
		this.width = this.parent.width;
		this.height = this.parent.height;
		this.x = this.y = 0;

		if (setAnchor) {
			this.anchor.stretch = true;
		}
	}

	this.alignToParent = function (alignX, alignY, anchorX, anchorY, pxOffsetX, pxOffsetY, setAnchor = true) {

		this.alignToParentHorizontally(alignX, anchorX, pxOffsetX, setAnchor);
		this.alignToParentVertically(alignY, anchorY, pxOffsetY, setAnchor);
	}

	this.alignToParentHorizontally = function (alignX, anchorX, pxOffset, setAnchor = true) {
		alignX = alignX != undefined ? alignX : 0.5;
		anchorX = anchorX != undefined ? anchorX : 0.5;
		pxOffset = pxOffset || 0;

		if (this.parent != null) {
			this.x = Math.ceil((this.parent.getWidth() * alignX) - (this.getWidth() * anchorX));
			this.x += pxOffset || 0;
		}

		if (setAnchor) {
			this.anchor.alignX = alignX;
			this.anchor.anchorX = anchorX;
			this.anchor.pxOffsetX = pxOffset;
		}
	}

	this.alignToParentVertically = function (alignY, anchorY, pxOffset, setAnchor = true) {
		alignY = alignY != undefined ? alignY : 0.5;
		anchorY = anchorY != undefined ? anchorY : 0.5;
		pxOffset = pxOffset || 0;

		if (this.parent != null) {
			this.y = Math.ceil((this.parent.getHeight() * alignY) - (this.getHeight() * anchorY));
			this.y += pxOffset || 0;
		}

		if (setAnchor) {
			this.anchor.alignY = alignY;
			this.anchor.anchorY = anchorY;
			this.anchor.pxOffsetY = pxOffset;
		}
	}

	/**
	    var origin = parent.x * child.origin.x + parent.y * child.origin.y + parent.origin
		var basis_x = parent.x * child.x.x + parent.y * child.x.y
		var basis_y = parent.x * child.y.x + parent.y * child.y.y
	 */
	this.getTransformMatrix = function () {
		if (this.parent == null) {
			return this.transformMatrix;
		}

		var child = this.transformMatrix;
		var parent = this.parent.getTransformMatrix();

		var x0 = parent.x[0] * child.x[0] + parent.y[0] * child.x[1];
		var x1 = parent.x[1] * child.x[0] + parent.y[1] * child.x[1];
		var y0 = parent.x[0] * child.y[0] + parent.y[0] * child.y[1];
		var y1 = parent.x[1] * child.y[0] + parent.y[1] * child.y[1];

		return {

			origin: [
				parent.x[0] * child.origin[0] + parent.y[0] * child.origin[1] + parent.origin[0],
				parent.x[1] * child.origin[0] + parent.y[1] * child.origin[1] + parent.origin[1],
			],
			x: [ x0, x1 ],
			y: [ y0, y1 ],
		}
	}

	this.getMatrixScaleX = function(matrix) {
		return Math.sqrt((matrix.x[0]*matrix.x[0])+(matrix.y[0]*matrix.y[0]));
	},
	this.getMatrixScaleY = function(matrix) {
		return Math.sqrt((matrix.x[1]*matrix.x[1])+(matrix.y[1]*matrix.y[1]));
	}

	this.getWidth = function () {
		return this.width * this.scaleX;
	}

	this.getHeight = function () {
		return this.height * this.scaleY;
	}

	this.getScreenAlpha = function () {
		if (this.parent == null) {
			return this.alpha;
		}
		return this.alpha * this.parent.getScreenAlpha();
	}

	this.getEntityAt = function (x, y) {
		if (!this.visible || this.alpha <= 0) {
			return null;
		}

		var childrenNum = this.children.length;
		for (var i = childrenNum - 1; i >= 0; --i) {
			var child = this.children[i].getEntityAt(x, y);

			if (child !== null) {
				return child;
			}
		}

		var screenX = this.screenX;
		var screenY = this.screenY;

		if (this.clickable &&
			x >= screenX && x <= screenX + this.width * this.scaleX &&
			y >= screenY && y <= screenY + this.height * this.scaleY) {
			return this;
		}

		return null;
	}

	this.isVisible = function () {

		if (this.parent != null) {
			return this.visible && this.parent.isVisible();
		}

		return this.visible;
	}

	this.checkCollision = function (entity) {
		var thisX = this.screenX;
		var thisY = this.screenY;
		var otherX = entity.screenX;
		var otherY = entity.screenY;

		return otherX + entity.width * entity.scaleX > thisX &&
			otherY + entity.height * entity.scaleY > thisY &&
			thisX + this.width * this.scaleX > otherX &&
			thisY + this.height * this.scaleY > otherY;
	}
}
Entity.prototype = {
	get x() {
		return this.transformMatrix.origin[0];
	},
	set x(value) {
		this.transformMatrix.origin[0] = value;
	},
	get y() {
		return this.transformMatrix.origin[1];
	},
	set y(value) {
		this.transformMatrix.origin[1] = value;
	},
	get screenX() {
		return this.getTransformMatrix().origin[0];
	},
	set screenX(value) {
		// FIXME
		this.transformMatrix.origin[0] = value;
	},
	get screenY() {
		return this.getTransformMatrix().origin[1];
	},
	set screenY(value) {
		// FIXME
		this.transformMatrix.origin[1] = value;
	},
	get scaleX() {
		return this.getMatrixScaleX(this.transformMatrix);
	},
	set scaleX(value) {
		var mat = this.transformMatrix;
		var currentScale = this.scaleX;
		mat.x[0] = (mat.x[0] / currentScale) * value;
		mat.y[0] = (mat.y[0] / currentScale) * value;
	},
	get scaleY() {
		return this.getMatrixScaleY(this.transformMatrix);
	},
	set scaleY(value) {
		var mat = this.transformMatrix;
		var currentScale = this.scaleY;
		mat.x[1] = (mat.x[1] / currentScale) * value;
		mat.y[1] = (mat.y[1] / currentScale) * value;
	},
	get screenScaleX() {
		return this.getMatrixScaleX(this.getTransformMatrix());
	},
	get screenScaleY() {
		return this.getMatrixScaleY(this.getTransformMatrix());
	},
	get rotation() {
		var mat = this.transformMatrix;
		return chao.rad2deg(Math.atan2(mat.x[1], mat.x[0]));
	},
	set rotation(value) {
		var rads = chao.deg2rad(value);
		var scaleX = this.scaleX;
		var scaleY = this.scaleY;
		var cr = Math.cos(rads);
		var sr = Math.sin(rads);
		this.transformMatrix.x[0] = cr * scaleX;
		this.transformMatrix.y[0] = -sr * scaleX;
		this.transformMatrix.x[1] = sr * scaleY;
		this.transformMatrix.y[1] = cr * scaleY;
	},
	get screenRotation() {
		var mat = this.getTransformMatrix();
		return chao.rad2deg(Math.atan2(mat.x[1], mat.x[0]));
	},
	set screenRotation(value) {
		// FIXME!
	}
};

function ComponentSprite(key, frameWidth, frameHeight) {
	this.name = "Sprite";
	this.entity = null;
	this.image = null;
	this.imageKey = key;

	this.frameWidth = frameWidth || 0;
	this.frameHeight = frameHeight || 0;

	this.flipX = false;
	this.flipY = false;

	this.scrollFactorX = 1.0;
	this.scrollFactorY = 1.0;

	this.anims = [];
	this.currentAnim = -1;
	this.currentFrame = 0;
	this.animTimer = 0;
	this.animPaused = false;
	this.animFinished = false;

	this.ready = true;

	this.create = function () {
		this.setImage(this.imageKey, this.frameWidth, this.frameHeight);
	}

	this.draw = function () {
		if (!this.image) {
			return;
		}

		if (!this.entity.visible) {
			return;
		}

		var anim = {
			key: "dummy",
			frames: [0],
			delay: 0,
			loop: true
		};
		if (this.currentAnim != -1) {
			anim = this.anims[this.currentAnim];
		}

		var drawX = this.entity.screenX * this.scrollFactorX;
		var drawY = this.entity.screenY * this.scrollFactorY;
		var drawAlpha = this.entity.getScreenAlpha();
		var drawScaleX = this.flipX ? -this.entity.screenScaleX : this.entity.screenScaleX;
		var drawScaleY = this.flipY ? -this.entity.screenScaleY : this.entity.screenScaleY;
		if (drawAlpha > 1.0) drawAlpha = 1.0;

		var drawArea = {
			x: 0,
			y: 0,
			width: this.entity.width,
			height: this.entity.height
		};

		if (this.currentAnim != -1) {
			var framesNumX = this.image.width / this.entity.width;
			var frameX = anim.frames[this.currentFrame];
			var frameY = Math.floor(frameX / framesNumX);
			frameX -= frameY * framesNumX;

			drawArea.x = Math.ceil(frameX * this.entity.width);
			drawArea.y = Math.ceil(frameY * this.entity.height);
		}

		chao.drawImagePart(chao.canvas, this.image,
			drawX, drawY, drawArea,
			this.entity.screenRotation, drawScaleX, drawScaleY,
			drawAlpha);
	}

	this.update = function () {

		if (!this.ready && this.image.ready) {
			this.ready = true;
			if (this.entity.width == -1) {
				this.entity.width = this.image.width;
			}
			if (this.entity.height == -1) {
				this.entity.height = this.image.height;
			}
		}

		if (this.currentAnim != -1 && !this.animPaused) {
			var anim = this.anims[this.currentAnim];

			this.animTimer += chao.getTimeDelta();

			if (this.animTimer >= anim.delay) {
				this.animTimer -= anim.delay;

				this.currentFrame++;
				if (this.currentFrame >= anim.frames.length) {
					if (anim.loop) {
						this.currentFrame = 0;
					} else {
						this.currentFrame--;
						this.animPaused = true;
						this.animFinished = true;
					}
				}
			}
		}
	}

	this.setImage = function (image, frameWidth, frameHeight) {
		if (!image) {
			return;
		}

		this.image = chao.getImage(image);

		this.entity.width = frameWidth || this.image.width;
		this.entity.height = frameHeight || this.image.height;

		if (!this.image.ready && (!frameWidth || !frameHeight)) {
			this.ready = false;
		}
	}

	this.addAnim = function (key, frames, delay, loop) {
		this.anims.push({
			key: key,
			frames: frames,
			delay: delay,
			loop: loop,
		});
	}

	this.playAnim = function (key, force) {
		for (var i = 0; i < this.anims.length; ++i) {
			if (this.anims[i].key === key) {
				if (this.currentAnim == i && !force) {
					return;
				}

				this.currentAnim = i;
				this.currentFrame = 0;
				this.animTimer = 0;
				this.animPaused = false;
				this.animFinished = false;
				return;
			}
		}

		chao.log("Entity \"" + this.entity.name + "\" has no anim named \"" + key + "\".");
	}

	this.getCurrentAnim = function () {
		if (this.currentAnim >= 0 && this.currentAnim < this.anims.length) {
			return this.anims[this.currentAnim];
		}

		return null;
	}

	this.setAnimPause = function (value) {
		this.animPaused = value;
	}
}

/**
 * Text rendering component.
 * Use "\n" to break lines.
 * You can colorize parts of the text using color codes, eg. `2 is a color code for green and `` removes the effect of the last color code.
 * Color codes are defined in colorCodes array in the chao namespace.
 * Example: "This is a text\nwith a `14yellow`` word inside." will create a two-line text object with the "yellow" word colored yellow.
 *
 * @param font - Font or id of the font used to display the text
 * @param text - Text to be displayed
 * @param size - Size of the text
 */
function ComponentText(font, text, size) {
	this.name = "Text";
	this.entity = null;

	this._text = text;
	this._font = font;
	this._size = size;
	this._color = 0xff000000;
	this._backgroundColor = undefined;
	this._align = "left";
	this._outlineColor = 0xffffffff;
	this._outlineSize = 0;

	this.image = null;
	this.rawText = text;
	this.ready = true;

	this.create = function () {
		this._font = chao.getFont(this._font);
		if (chao.enableFontsLoadCheck) {
			this.ready = this._font.ready;
		}
		this.image = chao.createImage(undefined, 1, 1);
		this.changeText();
	}

	this.draw = function () {
		if (this.text === "") {
			return;
		}

		var drawX = this.entity.screenX;
		var drawY = this.entity.screenY;
		var drawAlpha = this.entity.getScreenAlpha();

		if (!this.ready && this.font.ready) {
			this.ready = true;
			this.changeText(); // Font that was previously not ready was finally loaded, so we need to redraw this image.
		}

		switch (this.align) {
			case "center":
				drawX -= this.entity.width / 2;
				break;
			case "right":
				drawX -= this.entity.width;
				break;
		}

		chao.drawImage(chao.canvas, this.image,
			drawX, drawY,
			drawAlpha,
			this.entity.screenScaleX, this.entity.screenScaleY,
			this.entity.screenRotation);
	}

	this.changeText = function (text) {
		text = text || this.text;

		var textLines = text.split("\n");
		var chunks = [];
		var rawLines = [];
		var colorStack = [];
		var currentColor = this.color;

		this.rawText = "";

		for (var i = 0; i < textLines.length; ++i) {
			var currentChunk = "";
			chunks.push([]);

			for (var j = 0; j < textLines[i].length; ++j) {
				var breakChunk = false;
				var newColor = undefined;
				if (textLines[i][j] == "`") {
					if (this.isNumber(textLines[i][j + 1]) && this.isNumber(textLines[i][j + 2])) {
						colorStack.push(currentColor);
						newColor = chao.colorCodes[parseInt(textLines[i][j + 1] + textLines[i][j + 2], 10)];
						breakChunk = true;
						j += 2;
					} else if (this.isNumber(textLines[i][j + 1])) {
						colorStack.push(currentColor);
						newColor = chao.colorCodes[parseInt(textLines[i][j + 1], 10)];
						breakChunk = true;
						j += 1;
					} else if (textLines[i][j + 1] == "`") {
						if (colorStack.length > 0) {
							newColor = colorStack.pop();
						}
						breakChunk = true;
						j += 1;
					}
				}

				if (breakChunk) {
					if (currentChunk.length > 0) {
						chunks[i].push({
							text: currentChunk,
							color: currentColor
						});
					}
					currentChunk = "";
					currentColor = newColor || currentColor;
				} else {
					currentChunk += textLines[i][j];
				}
			}

			if (currentChunk.length > 0) {
				chunks[i].push({
					text: currentChunk,
					color: currentColor
				});
			}

			var currentRawLine = "";
			for (var j = 0; j < chunks[i].length; ++j) {
				this.rawText += chunks[i][j].text;
				currentRawLine += chunks[i][j].text;
			}
			if (chunks.length > i - 1) this.rawText += "\n";

			rawLines.push(currentRawLine);
		}

		this.image.context.font = this.size.toFixed() + "px " + this.font.name;
		chao.drawText(this.image, this.font, "M", 0, 0, this.size);

		var linesSizes = [];
		var longestLineSize = 0;
		for (var i = 0; i < rawLines.length; ++i) {
			linesSizes.push(chao.getTextSize(this.image, rawLines[i]).width);
			if (linesSizes[i] > longestLineSize) {
				longestLineSize = linesSizes[i];
			}
		}
		this.image.canvas.width = this.image.width = this.entity.width = longestLineSize;
		this.image.canvas.height = this.image.height = this.entity.height = this.size * textLines.length;

		if (this.backgroundColor) {
			chao.clearToColor(this.image, this.backgroundColor);
		} else {
			chao.clearImage(this.image);
		}

		for (var i = 0; i < chunks.length; ++i) {
			var currentX = 0;
			switch (this.align) {
				case "center":
					currentX = (longestLineSize - linesSizes[i]) / 2;
					break;
				case "right":
					currentX = longestLineSize - linesSizes[i];
			}
			for (var j = 0; j < chunks[i].length; ++j) {
				chao.drawText(this.image,
					this.font,
					chunks[i][j].text,
					currentX, -this.size * .25 + (i * this.size),
					this.size,
					chunks[i][j].color,
					"left",
					this.outlineColor,
					this.outlineSize);

				currentX += chao.getTextSize(this.image, chunks[i][j].text).width;;
			}
		}
	}

	this.isNumber = function (c) {
		return "0123456789".indexOf(c) !== -1;
	}

}
ComponentText.prototype = {
	// This is a serious mess, even by the messiness of all the other things here. Is there a better way of doing this?
	get text() {
		return this._text;
	},
	set text(newText) {
		this._text = newText;
		this.changeText();
	},
	get font() {
		return this._font;
	},
	set font(newFont) {
		this._font = newFont;
		this.changeText();
	},
	get size() {
		return this._size;
	},
	set size(newSize) {
		this._size = newSize;
		this.changeText();
	},
	get color() {
		return this._color;
	},
	set color(newcolor) {
		this._color = newcolor;
		this.changeText();
	},
	get backgroundColor() {
		return this._backgroundColor;
	},
	set backgroundColor(newBackgroundColor) {
		this._backgroundColor = newBackgroundColor;
		this.changeText();
	},
	get align() {
		return this._align;
	},
	set align(newAlign) {
		this._align = newAlign;
		this.changeText();
	},
	get outlineColor() {
		return this._outlineColor;
	},
	set outlineColor(newOutlineColor) {
		this._outlineColor = newOutlineColor;
		this.changeText();
	},
	get outlineSize() {
		return this._outlineSize;
	},
	set outlineSize(newOutlineSize) {
		this._outlineSize = newOutlineSize;
		this.changeoutlineSize();
	},
};


function ComponentButton(image) {
	this.name = "Button";
	this.entity = null;
	this.imageKey = image;
	this.sprite = null;
	this.spritePressed = null;
	this.text = null;

	this.disableDim = false;
	this.disabled = false;
	this.dimInactive = true;

	this.onPress = function (button) {};
	this.onHold = function (button) {};
	this.onReleased = function (button) {};

	this.create = function () {
		this.setImage(this.imageKey);
		this.entity.clickable = true;
	}

	this.update = function () {
		if (!this.entity.visible) {
			return;
		}

		var mouseOver = this.isAbove(chao.mouse.x, chao.mouse.y);
		var buttonAlpha = 1.0;

		if (mouseOver && !this.disabled) {
			if (chao.mouse.justReleased) {
				this.pressed = false;
				buttonAlpha = 1.0;
				if (this.onReleased) {
					this.onReleased(this);
					// hacky supress any other releases
					chao.mouse.justReleased = false;
				}
			}

			if (chao.mouse.pressed) {
				buttonAlpha = 0.5;

				if (!this.pressed && this.onPress) {
					this.onPress(this);
				}
				if (this.onHold) {
					this.onHold(this);
				}

				this.pressed = true;

			} else if (this.pressed) {
				buttonAlpha = 1.0;
			}

		} else {
			buttonAlpha = (!this.disabled || !this.dimInactive) ? 1.0 : 0.5;
			this.pressed = false;
		}

		if (this.spritePressed) {
			this.sprite.entity.visible = buttonAlpha > 0.5;
			this.sprite.entity.visible = buttonAlpha <= 0.5;
		} else if (!this.disableDim) {
			this.sprite.entity.alpha = buttonAlpha;
			if (this.text) {
				this.text.entity.alpha = buttonAlpha;
			}
		}
	}

	this.setImage = function (key) {
		if (this.sprite) {
			this.entity.remove(this.sprite.entity);
		}

		this.imageKey = key;

		this.sprite = (new Entity("Button Image")).addComponent(new ComponentSprite(this.imageKey));
		this.sprite.entity.clickable = false;
		this.entity.add(this.sprite.entity);

		// Update Entity's size to be the same as button's sprite
		this.entity.width = this.sprite.entity.width;
		this.entity.height = this.sprite.entity.height;
	}

	this.setImagePressed = function (key) {
		if (this.spritePressed) {
			this.entity.remove(this.spritePressed.entity);
		}

		this.spritePressed = (new Entity("Button Image Pressed")).addComponent(new ComponentSprite(key));
		this.spritePressed.entity.clickable = false;
		this.entity.add(this.spritePressed.entity);
		this.spritePressed.entity.visible = false;
	}

	this.setText = function (text, font, size) {
		if (!this.text) {
			this.text = (new Entity("Button Text", 0, 0)).addComponent(new ComponentText(font, text, size));
			this.text.align = "left";
			this.text.entity.clickable = false;
			this.entity.add(this.text.entity);
		} else {
			if (font) this.text.font = font;
			if (text) this.text.text = text;
			if (size) this.text.size = size;
		}

		this.text.entity.alignToParent();

		return this.text;
	}

	this.isAbove = function (x, y) {
		if (!this.entity.visible) {
			return false;
		}

		return chao.getCurrentState().rootEntity.getEntityAt(x, y) === this.entity;
	}
}

function ComponentCamera() {
	this.name = "Camera";
	this.entity = null;

	this.trackedEntity = null;
	this.trackingSpeed = 4.0;

	this.offsetX = 0;
	this.offsetY = 0;
	this.deadzone = {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	this.previousPos = {
		x: 0,
		y: 0
	};
	this.bounds = {
		x: 0,
		y: 0,
		width: -1,
		height: -1
	};

	this.slideTweens = [];

	this.update = function () {
		if (this.trackedEntity == null) {
			this.clampToBounds(this.entity);
			return;
		}

		// figuring out some basic stuff
		var targetPos = {
			x: this.trackedEntity.x + this.trackedEntity.width / 2,
			y: this.trackedEntity.y + this.trackedEntity.height / 2
		}

		var relativePos = {
			x: targetPos.x + this.entity.x,
			y: targetPos.y + this.entity.y
		}

		var cameraPos = {
			x: (-targetPos.x + (chao.screenWidth / 2)) - this.offsetX,
			y: (-targetPos.y + (chao.screenHeight / 2)) - this.offsetY
		}

		// contrived deadzone calculations
		if (this.deadzone.width > 0 && this.deadzone.height > 0) {
			if (targetPos.x > (this.deadzone.x - this.entity.x) + this.deadzone.width / 2) {
				cameraPos.x += Math.abs(((this.deadzone.x - cameraPos.x) + this.deadzone.width) - targetPos.x);
			} else {
				cameraPos.x -= Math.abs((this.deadzone.x - cameraPos.x) - targetPos.x);
			}
			if (targetPos.y > (this.deadzone.y - this.entity.y) + this.deadzone.height / 2) {
				cameraPos.y += Math.abs(((this.deadzone.y - cameraPos.y) + this.deadzone.height) - targetPos.y);
			} else {
				cameraPos.y -= Math.abs((this.deadzone.y - cameraPos.y) - targetPos.y);
			}

			var deadZonedX = relativePos.x > this.deadzone.x && relativePos.x < this.deadzone.x + this.deadzone.width;
			var deadZonedY = relativePos.y > this.deadzone.y && relativePos.y < this.deadzone.y + this.deadzone.height;
			if (deadZonedX) {
				cameraPos.x = this.previousPos.x;
			} else {
				this.previousPos.x = cameraPos.x;
			}
			if (deadZonedY) {
				cameraPos.y = this.previousPos.y;
			} else {
				this.previousPos.y = cameraPos.y;
			}
		}

		// clamping camera position to the set bounds
		this.clampToBounds(cameraPos);

		this.entity.x = chao.interpolate(this.entity.x, cameraPos.x, chao.timeDelta * this.trackingSpeed);
		this.entity.y = chao.interpolate(this.entity.y, cameraPos.y, chao.timeDelta * this.trackingSpeed);
	}

	this.follow = function (entity, trackingSpeed) {
		this.removeSlideTweens();
		this.trackedEntity = entity;
		this.trackingSpeed = trackingSpeed || this.trackingSpeed;
		if (this.trackingSpeed <= 0) {
			this.trackingSpeed = chao.FPS;
		}
	}

	this.unfollow = function () {
		this.trackedEntity = null;
	}

	this.slideToPosition = function (x, y, time, interpolationType, callback) {
		interpolationType = interpolationType != undefined ? interpolationType : chao.INTERPOLATE_SMOOTH;

		this.removeSlideTweens();
		this.unfollow();

		x = -x + chao.screenWidth / 2;
		y = -y + chao.screenHeight / 2;

		this.slideTweens.push(ComponentTween.addTween(this.entity, "x", this.entity.x, x, time, interpolationType, chao.REPEAT_MODE_ONCE, 0, callback));
		this.slideTweens.push(ComponentTween.addTween(this.entity, "y", this.entity.y, y, time, interpolationType, chao.REPEAT_MODE_ONCE));
	}

	this.removeSlideTweens = function () {
		for (var i = 0; i < this.slideTweens.length; ++i) {
			ComponentTween.removeTween(this.slideTweens[i]);
		}
		this.slideTweens = [];
	}

	this.clampToBounds = function (cameraPos) {
		if (this.bounds.width > 0) {
			cameraPos.x = -chao.clamp(-cameraPos.x, this.bounds.x, (this.bounds.x + this.bounds.width) - chao.screenWidth);
		}
		if (this.bounds.height > 0) {
			cameraPos.y = -chao.clamp(-cameraPos.y, this.bounds.y, (this.bounds.y + this.bounds.height) - chao.screenHeight);
		}
	}
}

function ComponentTween(varName, from, to, time, interpolationType, repeatMode, delay, finishCallback) {
	this.name = "Tween";
	this.entity = null;

	this.target = null;
	this.varName = varName;
	this.from = from;
	this.to = to;
	this.lifetime = time != undefined ? time : 1;
	this.interpolationType = interpolationType != undefined ? interpolationType : chao.INTERPOLATE_LINEAR;
	this.repeatMode = repeatMode != undefined ? repeatMode : chao.REPEAT_MODE_ONCE;
	this.delay = delay || 0;
	this.finishCallback = finishCallback;

	this.finished = false;
	this.useUnscaledTime = false;

	this.timer = 0;
	this.direction = 1;

	this.create = function () {
		this.target = this.target || this.entity;
	}

	this.update = function () {
		this.timer += this.useUnscaledTime ? chao.getUnscaledDelta() : chao.getTimeDelta();

		if (this.delay > 0) {
			if (this.timer >= this.delay) {
				this.delay = 0;
				this.timer = 0;
			} else {
				return;
			}
		}

		if (this.timer >= this.lifetime) {
			switch (this.repeatMode) {
				case chao.REPEAT_MODE_ONCE: {
					this.timer = this.lifetime;
					this.finished = true;
					this.entity.removeComponent(this);
					break;
				}
				case chao.REPEAT_MODE_LOOP: {
					this.timer = 0.0;
					if (this.finishCallback) {
						this.finishCallback.call(this.target);
					}
					break;
				}
				case chao.REPEAT_MODE_BOUNCE: {
					this.timer = 0.0;
					this.direction = this.direction == 1 ? -1 : 1;
					if (this.finishCallback) {
						this.finishCallback.call(this.target);
					}
				}
			}
		}

		var v = this.timer / this.lifetime;
		if (this.direction < 0) {
			v = 1 - v;
		}
		this.updateVar(v);
	}

	this.updateVar = function (progress) {
		this.target[this.varName] = chao.interpolate(this.from, this.to, progress, this.interpolationType);
	}

}

ComponentTween.addTween = function (targetEntity, varName, from, to, time, interpolationType, repeatMode, delay, finishCallback) {
	return targetEntity.addComponent(new ComponentTween(varName, from, to, time, interpolationType, repeatMode, delay, finishCallback));
}

ComponentTween.removeTween = function (tween, finish) {
	if (tween.finished) {
		return;
	}
	if (finish) {
		tween.updateVar(1);
	}
	tween.entity.removeComponent(tween);
}

ComponentTween.removeTweensFromEntity = function (targetEntity, finish) {
	var tweensToRemove = targetEntity.getComponentsByName("Tween");
	for (var i = 0; i < tweensToRemove.length; ++i) {
		targetEntity.removeComponent(tweensToRemove[i]);
	}
}

ComponentTween.removeAllTweens = function (finish) {
	var allTweens = chao.findComponents("Tween");
	var n = allTweens.length;
	for (var i = 0; i < n; ++i) {
		var tween = allTweens[i];
		if (finish) {
			tween.updateVar(1);
		}
		tween.entity.removeComponent(tween);
	}
}

function ComponentParticle(image) {
	this.name = "Particle";
	this.entity = null;

	this.sprite = null;
	this.imageKey = image;

	this.lifetime = 1.0;
	this.fadeOutMode = ComponentParticle.FADE_MODE_NONE;
	this.velocity = {
		x: 0,
		y: 0
	};
	this.acceleration = {
		x: 0,
		y: 0
	};
	this.rotationVel = 0;
	this.rotationAcc = 0;

	this.useUnscaledTime = false;

	this.timer = 0;

	this.create = function () {
		if (!this.imageKey) {
			this.sprite = this.entity.getComponentByName("Sprite");
		} else {
			this.sprite = this.entity.addComponent(new ComponentSprite(this.imageKey));
		}

		if (!this.sprite) {
			chao.log("ComponentParticle needs an existing ComponentSprite or image key passed in constructor.");
		}
	}

	this.update = function () {
		if (!this.sprite) {
			return;
		}

		var delta = this.useUnscaledTime ? chao.getUnscaledDelta() : chao.getTimeDelta();

		this.timer += delta;

		if (this.timer >= this.lifetime) {
			chao.destroyEntity(this.entity);
			return;
		}

		switch (this.fadeOutMode) {
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

		this.velocity.x += this.acceleration.x * delta;
		this.velocity.y += this.acceleration.y * delta;
		this.entity.x += this.velocity.x * delta;
		this.entity.y += this.velocity.y * delta;

		this.rotationVel += this.rotationAcc * delta;
		this.entity.rotation += this.rotationVel * delta;

	}
}
ComponentParticle.FADE_MODE_NONE = 0;
ComponentParticle.FADE_MODE_LINEAR = 1;
ComponentParticle.FADE_MODE_LAST_SECOND = 2;

function ComponentShake(force, time, damped) {
	this.name = "Shake";
	this.entity = null;

	this.damped = damped;
	this.force = force || 0.0;
	this.duration = time || 0.0;
	this.useUnscaledTime = false;

	this.disposable = false;

	this.entityPosition = {
		x: 0,
		y: 0
	};
	this.shakenPosition = {
		x: 0,
		y: 0
	};
	this.timer = 0.0;

	this.update = function () {
		if (this.timer > 0.0) {
			this.timer -= this.useUnscaledTime ? chao.getUnscaledDelta() : chao.getTimeDelta();
			if (this.timer <= 0.0) {
				this.timer = 0.0;
				this.entity.x = this.entityPosition.x;
				this.entity.y = this.entityPosition.y;

				if (this.disposable) {
					this.entity.removeComponent(this);
				}

				return;
			}

			// Put this component at the end if it's not already. So we can take the position changes made by other components into account.
			var id = this.entity.components.indexOf(this);
			if (id != this.entity.components.length - 1) {
				this.entity.components.splice(id, 1);
				this.entity.components.push(this);
			}

			var range = this.force;
			if (this.damped) {
				range *= this.timer / this.duration;
			}

			// check for entity movement since the last frame.
			if (this.shakenPosition.x != this.entity.x || this.shakenPosition.y != this.entity.y) {
				this.entityPosition = {
					x: this.entity.x,
					y: this.entity.y
				};
			}

			var xChange = chao.getRandom(range * 2) - range;
			var yChange = chao.getRandom(range * 2) - range;

			this.entity.x = this.shakenPosition.x = this.entityPosition.x + xChange;
			this.entity.y = this.shakenPosition.y = this.entityPosition.y + yChange;
		}
	}

	this.shake = function (force, time, damped) {
		if (force) this.force = force;
		if (time) this.duration = time;
		if (damped) this.damped = damped;

		if (this.timer <= 0.0) {
			this.entityPosition = {
				x: this.entity.x,
				y: this.entity.y
			};
		}

		this.timer = this.duration;
	}
}
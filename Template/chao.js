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
	VERSION: "0.71",

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
	colorCodes: [0xff000000, 0xff0000aa, 0xff00ff00, 0xff00aaaa, 0xffaa0000,
		0xff800080, 0xff995500, 0xffaaaaaa, 0xff555555, 0xff5555ff, 0xff54ff3f,
		0xff55ffff, 0xffff5555, 0xffff55ff, 0xffffff55, 0xffffffff
	],

	/** String for testing if a font was loaded. */
	fontTestString: "giItT1WQy@!-/#", // this only looks like it's random, but it's not!

	init(width, height, scalingMode, canvasId) {

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
		};

		// Whole lotta vars
		chao.loggingEnabled = true;

		chao.screenWidth = width;
		chao.screenHeight = height;
		chao.scalingMode = scalingMode || chao.SCALING_MODE_NONE;
		chao.backgroundColor = "black";

		chao.screenScaleX = 1.0;
		chao.screenScaleY = 1.0;
		chao.baseScreenWidth = width;
		chao.baseScreenHeight = height;

		chao.installVisibilityHandler();
		chao.hasFocus = true;
		chao.pauseOnLostFocus = true;

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

		chao.invokes = [];

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
		chao.font = chao.loadFont();

		chao.entitiesToDestroy = [];
		chao.focusedEntity = null;

		chao.currentState = undefined;
		chao.loadingState = undefined;
		chao.newState = undefined;

		// A default loading state that can be overwritten
		chao.setLoadingState({
			draw() {
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
		window.addEventListener('contextmenu', function(e) {
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

	setFPS(FPS) {
		chao.framerate = FPS;
		chao.updateInterval = setInterval(chao.update, 1000 / FPS);
	},

	clearScreen() {
		if (chao.backgroundColor === undefined) {
			chao.canvas.context.clearRect(0, 0, chao.canvas.canvas.width, chao.canvas.canvas.height);
		} else {
			chao.canvas.context.fillStyle = chao.backgroundColor;
			chao.canvas.context.fillRect(0, 0, chao.canvas.canvas.width, chao.canvas.canvas.height);
		}
	},

	onFocusChange(isFocused) {
		if (chao.hasFocus == isFocused) {
			return;
		}

		if (!chao.pauseOnLostFocus) {
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

	resetInput() {
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

	update() {
		var i;

		if (chao.enableFontsLoadCheck) {
			chao.updateFontsLoading();
		}

		chao.clearScreen();

		chao.timeDelta = (Date.now() - chao.lastTime) * 0.001;
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

		for (i = 0; i < chao.entitiesToDestroy.length; ++i) {
			chao.entitiesToDestroy[i].destroy();
			if (chao.entitiesToDestroy[i].parent) {
				chao.entitiesToDestroy[i].parent.remove(chao.entitiesToDestroy[i]);
				chao.entitiesToDestroy[i].parent = null;
			}
		}
		chao.entitiesToDestroy = [];

		for (i = 0; i < chao.invokes.length; ++i) {
			chao.invokes[i].timer -= chao.getTimeDelta();
			if (chao.invokes[i].timer <= 0.0) {
				chao.invokes[i].func.call(chao.invokes[i].targetObject);
				chao.invokes.splice(i, 1);
				i--;
			}
		}


		if (chao.newState !== undefined) {
			chao.destroyCurrentStateAndInitNewOne(chao.newState);
			chao.newState = undefined;
		}
	},

	switchState(newState) {
		if (chao.currentState === undefined) {
			chao.destroyCurrentStateAndInitNewOne(newState);
		} else {
			chao.newState = newState;
		}
	},

	destroyCurrentStateAndInitNewOne(newState) {
		chao.resetInput();

		chao.destroyState(chao.currentState);

		chao.currentState = newState;
		if (chao.getLoadingProgress() < 1.0) {
			chao.onAssetsLoaded = this.initCurrentState;
		} else {
			chao.initState(chao.currentState);
		}
	},

	setLoadingState(newLoadingState) {
		chao.destroyState(chao.loadingState);

		chao.loadingState = newLoadingState;
		chao.initState(newLoadingState);

	},

	initState(state) {
		state.rootEntity = new Entity("Root", 0, 0);
		state.rootEntity.width = chao.screenWidth;
		state.rootEntity.height = chao.screenHeight;
		state.rootEntity.pivotX = 0;
		state.rootEntity.pivotY = 0;
		state.add = function(entity) {
			return this.rootEntity.add(entity);
		};
		state.addWithComponent = function(entity, component) {
			return this.rootEntity.addWithComponent(entity, component);
		};
		state.remove = function(entity) {
			this.rootEntity.remove(entity);
		};

		if (state.create) {
			state.create();
		}
		chao.resize();
	},

	initCurrentState() {
		chao.initState(chao.currentState);
	},

	getCurrentState() {
		return chao.getLoadingProgress() >= 1.0 ? chao.currentState : chao.loadingState;
	},

	destroyState(state) {
		if (!state) {
			return;
		}

		if (state.destroy) {
			state.destroy();
		}
		state.rootEntity.destroy();
		state.rootEntity = null;
	},

	destroyEntity(entity) {
		chao.entitiesToDestroy.push(entity);
	},

	findEntities(name, entity, array) {
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

	findComponents(name, entity) {
		entity = entity || chao.currentState.rootEntity;
		return entity.getComponentsInChildrenByName(name);
	},

	invoke(delay, func, targetObject) {
		chao.invokes.push({
			timer: delay,
			func: func,
			targetObject: targetObject
		});
	},

	makeSignal() {
		var observers = [];

		var findObserver = function(func) {
			var i;
			var n = observers.length;
			for (i = 0; i < n; ++i) {
				if (observers[i].func === func) {
					return i;
				}
			}
			return -1;
		};

		return {

			subscribe(func, targetObject) {
				if (findObserver(func) == -1) {
					observers.push({
						func: func,
						target: targetObject
					});
				}
			},

			unsubscribe(func) {
				var idx = findObserver(func);
				if (idx != -1) {
					observers.splice(idx, 1);
				}
			},

			unsubscribeAll(target) {
				observers = [];
			},

			fire() {
				var i;
				var n = observers.length;
				for (i = 0; i < n; ++i) {
					if (observers[i]) {
						observers[i].func.apply(observers[i].target, arguments);
					}
				}
			},


		};
	},

	createImage(key, width, height) {
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
			ready: true,
		};

		chao.setSmoothingForImage(newImage, chao.smoothing);

		if (key) {
			chao.addImage(newImage);
		}

		return newImage;
	},

	loadImage(key, path) {
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
			ready: false,
		};

		if (key) {
			chao.addImage(newImage);
		}

		img.onload = function() {
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

	createTiledImage(image, newImageKey, tilesX, tilesY) {
		var img = chao.getImage(image);
		var newWidth = img.width * tilesX;
		var newHeight = img.height * tilesY;
		var newImage = chao.createImage(newImageKey, newWidth, newHeight);

		var i, j;
		for (i = 0; i < tilesX; ++i) {
			for (j = 0; j < tilesY; ++j) {
				chao.drawImage(newImage, image, i * img.width, j * img.height);
			}
		}

		if (newImageKey) {
			chao.addImage(newImage);
		}

		return newImage;
	},

	createFlippedImage(image, newImageKey, flipX, flipY) {
		var img = chao.getImage(image);
		var newImage = chao.createImage(newImageKey, img.width, img.height);
		var scaleX = flipX ? -1 : 1;
		var scaleY = flipY ? -1 : 1;
		chao.drawImage(newImage, img, 0, 0, 1, scaleX, scaleY);
		return newImage;
	},

	resizeImage(image, newWidth, newHeight) {
		var img = chao.getImage(image);
		img.width = img.canvas.width = newWidth;
		img.height = img.canvas.height = newHeight;
	},

	addImage(image) {
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

	getImage(key) {
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

	tintImage(image, color) {
		image = chao.getImage(image);

		var tint = chao.createImage(undefined, image.width, image.height);

		chao.clearToColor(tint, color);
		image.context.globalCompositeOperation = "source-atop";
		image.context.drawImage(tint.canvas, 0, 0, image.width, image.height);
	},

	setImagesSmoothing(value) {
		chao.smoothing = value;

		chao.setSmoothingForImage(chao.canvas, value);

		var n = chao.images.length;
		for (var i = 0; i < n; ++i) {
			chao.setSmoothingForImage(chao.images[i], value);
		}

	},

	setSmoothingForImage(image, value) {
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
			var renderTypes = [
				'optimizeSpeed', 'crisp-edges', '-moz-crisp-edges',
				'-webkit-optimize-contrast', 'optimize-contrast', 'pixelated'
			];
			for (var i = 0; i < renderTypes.length; ++i) {
				image.canvas.style['image-rendering'] = renderTypes[i];
			}
			image.canvas.style.msInterpolationMode = 'nearest-neighbor';
		}
	},

	drawImage(target, image, x, y, alpha, scaleX, scaleY, angle, rotationOffsetX, rotationOffsetY) {

		alpha = alpha === undefined ? 1 : alpha;
		scaleX = scaleX === undefined ? 1 : scaleX;
		scaleY = scaleY === undefined ? 1 : scaleY;
		angle = angle || 0;
		rotationOffsetX = rotationOffsetX === undefined ? 0.5 : rotationOffsetX;
		rotationOffsetY = rotationOffsetY === undefined ? 0.5 : rotationOffsetY;

		image = chao.getImage(image);

		if (typeof(image) === "string") {
			chao.log("No image of such id found: " + image);
			return;
		}

		var rotationPivot = {
			x: (x + (image.width * scaleX * rotationOffsetX)),
			y: (y + (image.height * scaleY * rotationOffsetY))
		};

		target.context.save();
		target.context.globalAlpha = alpha;
		target.context.translate(rotationPivot.x, rotationPivot.y);
		target.context.rotate(chao.deg2rad(angle));
		target.context.translate(-rotationPivot.x, -rotationPivot.y);

		x = scaleX >= 0 ? x : x - image.width * scaleX;
		y = scaleY >= 0 ? y : y - image.height * scaleY;

		if (!chao.smoothing) {
			x = Math.round(x);
			y = Math.round(y);
		}

		target.context.translate(x, y);
		target.context.scale(scaleX, scaleY);
		target.context.drawImage(image.canvas,
			0, 0,
			image.width, image.height,
			0, 0, image.width, image.height);

		target.context.restore();
	},

	drawImagePart(target, image, x, y, rect, alpha, scaleX, scaleY, angle, rotationOffsetX, rotationOffsetY) {
		angle = angle || 0;
		alpha = alpha === undefined ? 1 : alpha;
		scaleX = scaleX === undefined ? 1 : scaleX;
		scaleY = scaleY === undefined ? 1 : scaleY;
		rotationOffsetX = rotationOffsetX === undefined ? 0.5 : rotationOffsetX;
		rotationOffsetY = rotationOffsetY === undefined ? 0.5 : rotationOffsetY;

		image = chao.getImage(image);

		if (typeof(image) === "string") {
			chao.log("No image of such id found: " + image);
			return;
		}

		var w = rect.width;
		var h = rect.height;
		var rotationPivot = {
			x: (x + (w * scaleX * rotationOffsetX)),
			y: (y + (h * scaleY * rotationOffsetY))
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

	setFillStyle(image, color) {
		if (typeof color === "string") {
			image.context.fillStyle = color;
		} else {
			image.context.fillStyle = chao.getRGBAString(color);
		}
	},

	setStrokeStyle(image, color, width) {
		width = width || image.context.lineWidth;
		image.context.lineWidth = width;
		if (typeof color === "string") {
			image.context.strokeStyle = color;
		} else {
			image.context.strokeStyle = chao.getRGBAString(color);
		}
	},

	// Creates a color in a 0xFFFFFFFF form. Values in 0-255 range.
	makeColor(r, g, b, a) {
		a = a || 255;
		return (a << 24) | ((r & 0xff) << 16) | ((g & 0xff) << 8) | ((b & 0xff));
	},

	// Creates a color in a 0xFFFFFFFF form. Values in 0-1 range.
	makeColorf(r, g, b, a) {
		a = a || 1;
		return chao.makeColor(r * 255, g * 255, b * 255, a * 255);
	},

	// Creates a color string in "rgba(r,g,b,a)" format.
	getRGBAString(hexColor) {
		var r = (hexColor >> 16) & 0xff;
		var g = (hexColor >> 8) & 0xff;
		var b = hexColor & 0xff;
		var a = (hexColor >>> 24) / 255;
		return "rgba(" + r + "," + g + "," + b + "," + a + ")";
	},

	getPixel(image, x, y) {
		var data = image.context.getImageData(x, y, 1, 1).data;
		return (data[3] << 24) | ((data[0] & 0xff) << 16) | ((data[1] & 0xff) << 8) | ((data[2] & 0xff));
	},

	putPixel(image, x, y, color) {
		chao.setFillStyle(image, color);
		image.context.fillRect(x, y, 1, 1);
	},

	clearImage(image) {
		image.context.clearRect(0, 0, image.width, image.height);
	},

	clearToColor(image, color) {
		image.context.clearRect(0, 0, image.width, image.height);
		chao.setFillStyle(image, color);
		image.context.fillRect(0, 0, image.width, image.height);
	},

	drawLine(image, x1, y1, x2, y2, color, width) {
		chao.setStrokeStyle(image, color, width);
		image.context.beginPath();
		image.context.moveTo(x1, y1);
		image.context.lineTo(x2, y2);
		image.context.closePath();
		image.context.stroke();
	},

	drawRect(image, x, y, w, h, color, width) {
		chao.setStrokeStyle(image, color, width);
		image.context.strokeRect(x, y, w, h);
	},

	drawRectFill(image, x, y, w, h, color) {
		chao.setFillStyle(image, color);
		image.context.fillRect(x, y, w, h);
	},

	drawCircle(image, x, y, radius, color, width) {
		chao.setStrokeStyle(image, color, width || 2);
		image.context.beginPath();
		image.context.arc(x, y, radius, 0, 2 * Math.PI);
		image.context.stroke();
	},

	drawCircleFill(image, x, y, radius, color) {
		chao.setFillStyle(image, color);
		image.context.beginPath();
		image.context.arc(x, y, radius, 0, 2 * Math.PI);
		image.context.fill();
	},

	drawPolygonLines(image, points) {
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

	drawPolygon(image, points, color, width) {
		chao.setStrokeStyle(image, color, width);
		chao.drawPolygonLines(image, points);
		image.context.stroke();
	},

	drawPolygonFill(image, points, color) {
		chao.setFillStyle(image, color);
		chao.drawPolygonLines(image, points);
		image.context.fill();
	},

	updatePauseFadeImage() {
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

	loadFont(key, path) {
		var s = document.createElement('style');
		var fontname = "font" + (chao.loadedFontsNum++);
		s.id = fontname;
		s.type = "text/css";
		document.head.appendChild(s);
		s.textContent = "@font-face { font-family: " + fontname + ";";
		if (path != undefined) {
			s.textContent += " src:url('" + path + "');";
		}
		s.textContent += " }";

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

	loadBase64Font(key, data) {
		var s = document.createElement('style');
		var fontname = "font" + (chao.loadedFontsNum++);
		s.id = fontname;
		s.type = "text/css";
		document.head.appendChild(s);
		s.textContent = "@font-face { font-family: " + fontname +
			"; src:url('data:application/font-woff;base64," + data +
			"') format('woff');}";

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

	addFont(font) {
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

	getFont(key) {
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

	drawText(image, font, text, x, y, size, color, align, outlineColor, outlineSize) {
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

	getTextSize(image, text) {
		return {
			width: image.context.measureText(text).width,
			height: image.context.measureText("M").width // well, it seems good enough.
		};
	},

	updateFontsLoading() {
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

	loadSound(key, path, volume, looped, channels) {
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
		sound.channels[0].onloadeddata = function() {
			sound.ready = true;
			for (var i = 0; i < (channels || 1); ++i) {
				if (i > 0) {
					sound.channels.push(new Audio(path));
				}

				if (looped) {
					sound.channels[i].addEventListener('ended', function() {
						this.currentTime = 0;
					}, false);
					sound.channels[i].loop = true;
				}
			}
		};
		sound.channels[0].onerror = function(e) {
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
		};

		chao.sounds.push(sound);

		return sound;
	},

	loadMusic(key, path, fallbackFormatPath, volume) {
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

	getSound(key) {
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

	playSound(key, force) {

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
			// Play the sound. Don't if sound it muted, but if it's a music,
			// play it regardless. It will be paused in the next lines. :)

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
				promise.then(function() {
					// Whoa! We are fine!
				}).catch(function() {
					// Was unable to play sound. :(
					// Prolly the browser is messing with audio permissions.
					// Will try to resume it on the first input.
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

	setMute(value) {
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

	toggleMute() {
		chao.setMute(!chao.muted);
	},

	stopSound(key) {
		var sound = chao.getSound(key);

		for (var i = 0; i < sound.channels.length; ++i) {
			sound.channels[i].pause();
			sound.channels[i].currentTime = 0;
		}
	},

	getSoundPosition(key) {
		var sound = chao.getSound(key);
		return sound.channels[sound.currentChannel].currentTime;
	},

	setSoundPosition(key, position) {
		var sound = chao.getSound(key);
		sound.channels[sound.currentChannel].currentTime = position;
	},

	pauseSound(key) {
		var sound = chao.getSound(key);
		sound.channels[sound.currentChannel].pause();
	},

	resumeMusicPlaybackIfNeeded() {
		if (chao.musicWasSupressed) {
			chao.musicWasSupressed = false;
			chao.playSound(chao.currentMusic);
		}
	},

	canPlayAudioType(extension) {
		var audioTest = document.createElement('audio');
		if (!audioTest || !audioTest.canPlayType) {
			return false;
		}

		switch (extension) {
			case "ogg":
				{
					if (audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, '')) {
						return true;
					}
					break;
				}
			case "opus":
				{
					if (audioTest.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, '') ||
						audioTest.canPlayType('audio/opus;').replace(/^no$/, '')) {
						return true;
					}
					break;
				}
			case "mp3":
				{
					if (audioTest.canPlayType('audio/mpeg;').replace(/^no$/, '')) {
						return true;
					}
					break;
				}
			case "wav":
				{
					if (audioTest.canPlayType('audio/wav; codecs="1"').replace(/^no$/, '')) {
						return true;
					}
					break;
				}
			case "m4a":
				{
					if (audioTest.canPlayType('audio/x-m4a;') ||
						audioTest.canPlayType('audio/aac;').replace(/^no$/, '')) {
						return true;
					}
				}
		}

		return false;
	},

	updateMouse() {
		chao.mouse.wheelDelta = 0;
		chao.mouse.justPressed = false;
		chao.mouse.justReleased = false;
		chao.mouse.justPressedRight = false;
		chao.mouse.justReleasedRight = false;
		chao.mouse.justPressedMiddle = false;
		chao.mouse.justReleasedMiddle = false;
	},

	getEntityUnderMouse() {
		return chao.getCurrentState().rootEntity.getEntityAt(chao.mouse.x, chao.mouse.y);
	},

	handleMouseDown(button) {
		chao.resumeMusicPlaybackIfNeeded();

		if (chao.mouse.suppressUntilUp) {
			return;
		}

		switch (button) {
			case 1:
				chao.mouse.pressed = chao.mouse.justPressed = true;
				chao.focusedEntity = chao.getEntityUnderMouse();
				if (chao.focusedEntity !== null) {
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

	handleMouseUp(button) {

		if (chao.mouse.suppressUntilUp) {
			chao.mouse.suppressUntilUp = false;
		}

		switch (button) {
			case 1:
				chao.mouse.pressed = false;
				chao.mouse.justReleased = true;
				if (chao.focusedEntity !== null) {
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

	handleMouseMove(x, y) {
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

	onMouseDown(e) {
		chao.handleMouseDown(e.which);
		e.preventDefault();
	},

	onMouseUp(e) {
		chao.handleMouseUp(e.which);
		e.preventDefault();
	},

	onMouseMove(e) {
		chao.handleMouseMove(e.offsetX, e.offsetY);
		e.preventDefault();
	},

	onMouseWheel(e) {
		chao.mouse.wheelDelta = e.deltaY;
		// e.preventDefault();
	},

	setMouseVisibility(value) {
		chao.canvas.canvas.style.cursor = value ? "auto" : "none";
	},

	updateTouches() {
		for (var i = 0; i < chao.touches.length; ++i) {
			chao.touches[i].justPressed = false;
		}
	},

	onTouchStart(e) {
		var touches = e.changedTouches;
		for (var i = 0; i < touches.length; ++i) {
			var touchPos = chao.getTouchPos(touches[i]);
			var newTouch = {
				id: touches[i].identifier,
				x: touchPos.x,
				y: touchPos.y,
				justPressed: true,
				isMouse: chao.touches.length === 0
			};
			chao.touches.push(newTouch);

			if (newTouch.isMouse) {
				chao.handleMouseDown(1);
				chao.handleMouseMove(newTouch.x, newTouch.y);
			}
		}

		if (e.cancelable) {
			e.preventDefault();
		}
	},

	onTouchMove(e) {
		var touches = e.changedTouches;
		for (var i = 0; i < touches.length; ++i) {
			var touch = chao.getTouch(touches[i].identifier);
			var touchPos = chao.getTouchPos(touches[i]);
			if (touch !== null) {
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

	onTouchEnd(e) {
		var touches = e.changedTouches;
		for (var i = 0; i < touches.length; ++i) {
			var touch = chao.getTouch(touches[i].identifier);
			if (touch !== null) {
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

	getTouch(id) {
		for (var i = 0; i < chao.touches.length; ++i) {
			if (chao.touches[i].id == id) {
				return chao.touches[i];
			}
		}
		return null;
	},

	getTouchPos(touch) {
		return {
			x: (touch.pageX - touch.target.offsetLeft) / chao.screenScaleX,
			y: (touch.pageY - touch.target.offsetTop) / chao.screenScaleY
		};
	},

	updateKeyboard() {
		for (var i = 0; i < 0x80; ++i) {
			chao.justPressed[i] = false;
			chao.justReleased[i] = false;
		}
	},

	onKeyDown(e) {
		if (!chao.pressed[e.keyCode]) {
			chao.justPressed[e.keyCode] = true;
		}
		chao.pressed[e.keyCode] = true;

		e.preventDefault();
	},

	onKeyUp(e) {
		chao.justReleased[e.keyCode] = true;
		chao.pressed[e.keyCode] = false;

		e.preventDefault();
	},

	resize() {
		if (chao.scalingMode <= chao.SCALING_MODE_NONE || chao.scalingMode >= chao.SCALING_MODE_END) {
			return;
		}

		var canvas = chao.canvas.canvas;
		var scaleX = window.innerWidth / chao.baseScreenWidth;
		var scaleY = window.innerHeight / chao.baseScreenHeight;
		var scale = Math.min(scaleX, scaleY);

		switch (chao.scalingMode) {
			case chao.SCALING_MODE_STRETCH:
				{
					chao.setCanvasScale(scaleX, scaleY);
					break;
				}
			case chao.SCALING_MODE_KEEP_RATIO:
				{
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
			case chao.SCALING_MODE_EXTEND:
				{
					chao.setCanvasScale(scale, scale);

					if (chao.baseScreenWidth * scale < window.innerWidth) {
						// extend the viewport horizontally
						var spareWidth = window.innerWidth - (chao.baseScreenWidth * scale);
						chao.screenWidth = chao.baseScreenWidth + (spareWidth / scale);
						chao.screenHeight = chao.baseScreenHeight;
					} else {
						// extend the viewport vertically
						var spareHeight = window.innerHeight - (chao.baseScreenHeight * scale);
						chao.screenWidth = chao.baseScreenWidth;
						chao.screenHeight = chao.baseScreenHeight + (spareHeight / scale);
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

	setCanvasScale(x, y) {
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

	getLoadingProgress() {
		var allData = chao.images.length + chao.sounds.length;
		var loadedData = 0;
		var i;

		for (i = 0; i < chao.images.length; ++i) {
			if (chao.images[i].ready) {
				loadedData++;
			}
		}

		for (i = 0; i < chao.sounds.length; ++i) {
			if (chao.sounds[i].ready) {
				loadedData++;
			}
		}

		return loadedData / allData;
	},

	getTimeDelta() {
		return chao.timeDelta * chao.timeScale;
	},

	getUnscaledDelta() {
		return chao.timeDelta;
	},

	makeRect(x, y, width, height) {
		return {
			x: x,
			y: y,
			width: width,
			height: height,

			intersects(rect2) {
				return !(rect2.x > this.x + this.width 
						|| rect2.x + rect2.width < this.x
						|| rect2.y > this.y + this.height
						|| rect2.y + rect2.height < this.y);
			},
		};
	},

	makeVector2(x, y) {
		return {
			x: x || 0,
			y: y || 0,

			set(x, y) {
				this.x = x;
				this.y = y;
			},

			compare(vector, epsilon) {
				epsilon = epsilon || 0.001;
				return Math.abs(this.x - vector.x) < epsilon &&
					Math.abs(this.y - vector.y) < epsilon;
			},

			toString() {
				var roundX = Math.round(1000 * this.x) / 1000;
				var roundY = Math.round(1000 * this.y) / 1000;
				return "" + roundX + "x" + roundY;
			},

			duplicate() {
				return chao.makeVector2(this.x, this.y);
			},

			add(vector) {
				this.x += vector.x;
				this.y += vector.y;
			},

			substract(vector) {
				this.x -= vector.x;
				this.y -= vector.y;
			},

			multiply(value1, value2) {
				if (typeof(value1) === "object") {
					this.x *= value1.x;
					this.y *= value1.y;
				} else if (value2 !== undefined) {
					this.x *= value1;
					this.y *= value2;
				} else {
					this.x *= value1;
					this.y *= value1;
				}
			},

			divide(value1, value2) {
				if (typeof(value1) === "object") {
					this.x /= value1.x;
					this.y /= value1.y;
				} else if (value2 !== undefined) {
					this.x /= value1;
					this.y /= value2;
				} else {
					this.x /= value1;
					this.y /= value1;
				}
			},

			getLength() {
				return Math.sqrt((this.x * this.x) + (this.y * this.y));
			},

			getNormalized() {
				var copy = this.duplicate();
				copy.normalize();
				return copy;
			},

			normalize() {
				var len = this.getLength();
				this.x /= len;
				this.y /= len;
			},

			rotate(degrees) {
				degrees = chao.deg2rad(degrees);
				var newX = this.x * Math.cos(degrees) - this.y * Math.sin(degrees);
				var newY = this.x * Math.sin(degrees) + this.y * Math.cos(degrees);
				this.x = newX;
				this.y = newY;
			},

			rotateAroundPoint(pointX, pointY, degrees) {
				degrees = chao.deg2rad(degrees);
				var s = Math.sin(degrees);
				var c = Math.cos(degrees);
				this.x -= pointX;
				this.y -= pointY;
				var newX = this.x * c - this.y * s;
				var newY = this.x * s + this.y * c;
				this.x = newX + pointX;
				this.y = newY + pointY;
			},

			log() {
				chao.log("" + Math.round(this.x * 100) / 100 + "x" + Math.round(this.y * 100) / 100);
			}
		};
	},

	makeTransformMatrix(x, y) {
		return {
			x: [1, 0],
			y: [0, 1],
			origin: [x || 0, y || 0],

			getDuplicate() {
				var newMatrix = chao.makeTransformMatrix(x, y);
				newMatrix.x = this.x;
				newMatrix.y = this.y;
				return newMatrix;
			},

			getMultiplied(parent) {
				var x0 = parent.x[0] * this.x[0] + parent.y[0] * this.x[1];
				var x1 = parent.x[1] * this.x[0] + parent.y[1] * this.x[1];
				var y0 = parent.x[0] * this.y[0] + parent.y[0] * this.y[1];
				var y1 = parent.x[1] * this.y[0] + parent.y[1] * this.y[1];

				var newMatrix = chao.makeTransformMatrix();
				newMatrix.origin[0] = parent.x[0] * this.origin[0] +
					parent.y[0] * this.origin[1] + parent.origin[0];
				newMatrix.origin[1] = parent.x[1] * this.origin[0] +
					parent.y[1] * this.origin[1] + parent.origin[1];
				newMatrix.x = [x0, x1];
				newMatrix.y = [y0, y1];

				return newMatrix;
			},

			getX() {
				return this.origin[0];
			},

			getY() {
				return this.origin[1];
			},

			setX(value) {
				this.origin[0] = value;
			},

			setY(value) {
				this.origin[1] = value;
			},

			getScaleX() {
				return Math.sqrt((this.x[0] * this.x[0]) + (this.y[0] * this.y[0]));
			},

			getScaleY() {
				return Math.sqrt((this.x[1] * this.x[1]) + (this.y[1] * this.y[1]));
			},

			setScaleX(value) {
				var currentScale = this.getScaleX();
				this.x[0] = (this.x[0] / currentScale) * value;
				this.y[0] = (this.y[0] / currentScale) * value;
			},

			setScaleY(value) {
				var currentScale = this.getScaleY();
				this.x[1] = (this.x[1] / currentScale) * value;
				this.y[1] = (this.y[1] / currentScale) * value;
			},

			getRotation() {
				return chao.rad2deg(Math.atan2(this.x[1], this.x[0]));
			},

			setRotation(value) {
				var rads = chao.deg2rad(value);
				var scaleX = this.getScaleX();
				var scaleY = this.getScaleY();
				var cr = Math.cos(rads);
				var sr = Math.sin(rads);
				this.x[0] = cr * scaleX;
				this.y[0] = -sr * scaleX;
				this.x[1] = sr * scaleY;
				this.y[1] = cr * scaleY;
			},


		}
	},

	// Points - All the points shaping the polygon.
	// Can be array of Vector2s (see makeVector2()) or just a simple array built like this: [x1, y1, x2, y2, ...].
	makePolygon(points) {
		if (!Array.isArray(points) || points.length < 1) {
			chao.log("makePolygon: points param is not an array or has no elements. :(");
			return;
		}

		var i;

		if (typeof points[0] != "object") {
			var newPoints = [];
			for (i = 0; i < points.length / 2; ++i) {
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

		for (i = 0; i < points.length; ++i) {
			if (points[i].x < left) left = points[i].x;
			if (points[i].x > right) right = points[i].x;
			if (points[i].y < top) top = points[i].y;
			if (points[i].y > bottom) bottom = points[i].y;
		}

		return {
			points: points,
			left: left,
			right: right,
			top: top,
			bottom: bottom,

			intersects(otherPoly) {
				var polys = [this, otherPoly];
				var i1, pi, point, projected;
				for (var i = 0; i < polys.length; ++i) {
					var polygon = polys[i];

					for (i1 = 0; i1 < polygon.points.length; i1++) {
						var i2 = (i1 + 1) % polygon.points.length;
						var p1 = polygon.points[i1];
						var p2 = polygon.points[i2];

						var normal = chao.makeVector2(p2.y - p1.y, p1.x - p2.x);

						var minA = null,
							maxA = null;
						for (pi = 0; pi < this.points.length; ++pi) {
							point = this.points[pi];
							projected = normal.x * point.x + normal.y * point.y;
							if (minA === null || projected < minA)
								minA = projected;
							if (maxA === null || projected > maxA)
								maxA = projected;
						}

						var minB = null,
							maxB = null;
						for (pi = 0; pi < otherPoly.points.length; ++pi) {
							point = otherPoly.points[pi];
							projected = normal.x * point.x + normal.y * point.y;
							if (minB === null || projected < minB)
								minB = projected;
							if (maxB === null || projected > maxB)
								maxB = projected;
						}

						if (maxA < minB || maxB < minA)
							return false;
					}
				}
				return true;
			},

			isPointInside(point) {
				if (point.x < this.left || point.x > this.right || point.y < this.top || point.y > this.bottom) {
					return false;
				}

				var intersections = 0;
				var raycastOrigin = {
					x: this.left - 1,
					y: point.y
				};
				var pointsNum = this.points.length;
				var polyLineA;
				var polyLineB;

				for (var i = 0; i < pointsNum; ++i) {
					polyLineA = this.points[i];
					polyLineB = i === 0 ? this.points[pointsNum - 1] : this.points[i - 1];

					if (chao.getLinesIntersection(raycastOrigin, point, polyLineA, polyLineB) !== false) {
						intersections++;
					}
				}

				return intersections & 1 == 1;
			},


		};
	},

	areLinesIntersecting(line1a, line1b, line2a, line2b) {
		var det = (line1b.x - line1a.x) * (line2b.y - line2a.y) -
			(line2b.x - line2a.x) * (line1b.y - line1a.y);

		if (det === 0) {
			return false;
		}

		var lambda = ((line2b.y - line2a.y) * (line2b.x - line1a.x) +
			(line2a.x - line2b.x) * (line2b.y - line1a.y)) / det;
		var gamma = ((line1a.y - line1b.y) * (line2b.x - line1a.x) +
			(line1b.x - line1a.x) * (line2b.y - line1a.y)) / det;
		return (lambda > 0 && lambda < 1) && (gamma > 0 && gamma < 1);
	},

	getLinesIntersection(line1a, line1b, line2a, line2b) {

		// Check if none of the lines are of length 0
		if ((line1a.x === line1b.x && line1a.y === line1b.y) || (line2a.x === line2b.x && line2a.y === line2b.y)) {
			return false;
		}

		denominator = ((line2b.y - line2a.y) * (line1b.x - line1a.x) - (line2b.x - line2a.x) * (line1b.y - line1a.y));

		// Lines are parallel
		if (denominator === 0) {
			return false;
		}

		var ua = ((line2b.x - line2a.x) * (line1a.y - line2a.y) - (line2b.y - line2a.y) * (line1a.x - line2a.x)) / denominator;
		var ub = ((line1b.x - line1a.x) * (line1a.y - line2a.y) - (line1b.y - line1a.y) * (line1a.x - line2a.x)) / denominator;

		// is the intersection along the segments
		if (ua < 0 || ua > 1 || ub < 0 || ub > 1) {
			return false;
		}

		// Return a object with the x and y coordinates of the intersection
		var x = line1a.x + ua * (line1b.x - x1);
		var y = line1a.y + ua * (line1b.y - line1a.y);

		return { x, y };
	},

	getRandom(max) {
		max -= 1;
		return Math.round(max * Math.random());
	},

	getRandomRange(min, max) {
		max -= min;
		return min + max * Math.random();
	},

	getRandiRange(min, max) {
		return Math.round(chao.getRandomRange(min, max));
	},

	coinFlip(successChance) {
		successChance = successChance || 50;
		return chao.getRandom(100) < successChance;
	},

	getRandomElement(array) {
		return array[chao.getRandom(array.length)];
	},

	rad2deg(radians) {
		return radians * (180.0 / Math.PI);
	},

	deg2rad(degrees) {
		return degrees * (Math.PI / 180.0);
	},

	clamp(value, min, max) {
		if (value < min) value = min;
		if (value > max) value = max;
		return value;
	},

	moveTowards(a, b, maxStep) {
		if (b > a) {
			a += maxStep;
			if (a > b) {
				a = b;
			}
		} else if (b < a) {
			a -= maxStep;
			if (a < b) {
				a = b;
			}
		}
		return a;
	},

	interpolate(a, b, v, interpolationType) {
		interpolationType = interpolationType || chao.INTERPOLATE_LINEAR;
		v = chao.clamp(v, 0.0, 1.0);

		switch (interpolationType) {
			case chao.INTERPOLATE_SMOOTH:
				{
					v = v * v * (3 - 2 * v);
					break;
				}
			case chao.INTERPOLATE_EASE_TO:
				{
					v = 1 - (1 - v) * (1 - v);
					break;
				}
			case chao.INTERPOLATE_EASE_FROM:
				{
					v = v * v;
					break;
				}
			case chao.INTERPOLATE_BOUNCE:
				{
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
			case chao.INTERPOLATE_ELASTIC:
				{
					var amplitude = 0.0;
					var period = 0.3;
					if (v === 0) {
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

		return (b * v) + (a * (1.0 - v));
	},

	interpolateVector(a, b, v, interpolationType) {
		return {
			x: chao.interpolate(a.x, b.x, v, interpolationType),
			y: chao.interpolate(a.y, b.y, v, interpolationType)
		};
	},

	setupLogTarget(htmlElementId) {
		chao.debugLogTarget = document.getElementById(htmlElementId);
		window.addEventListener("error", function(e) {
			var fa = e.filename.split("/");
			fa.reverse();
			chao.log("[" + fa[0] + ":" + e.lineno + ":" + e.colno + "] " + e.message);
		});
	},

	csvToArray(strData, strDelimiter) {
		// stolen from https://www.bennadel.com/blog/
		// eventually this will be used for translations
		strDelimiter = (strDelimiter || ",");
		var objPattern = new RegExp(
			(
				"(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +
				"(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +
				"([^\"\\" + strDelimiter + "\\r\\n]*))"
			), "gi");
		var arrData = [
			[]
		];
		var arrMatches = null;
		while (arrMatches = objPattern.exec(strData)) {
			var strMatchedDelimiter = arrMatches[1];
			if (
				strMatchedDelimiter.length &&
				(strMatchedDelimiter != strDelimiter)
			) {

				arrData.push([]);
			}

			if (arrMatches[2]) {
				var strMatchedValue = arrMatches[2].replace(
					new RegExp("\"\"", "g"), "\"");
			} else {
				var strMatchedValue = arrMatches[3];
			}

			arrData[arrData.length - 1].push(strMatchedValue);
		}
		return arrData;
	},

	log(thingie, logTrace) {
		if (chao.loggingEnabled) {
			if (chao.debugLogTarget) {
				chao.debugLogTarget.innerHTML += String(thingie).replace(/\n/g, "<br/>") + "<br/>";
			} else {
				logTrace ? console.trace(thingie) : console.log(thingie);
			}
		}
	},

	logHierarchy(entity) {
		var logString = chao.logEntity(entity, 0);
		chao.log(logString);
	},

	logEntity(entity, indent) {
		entity = entity || chao.getCurrentState().rootEntity;
		indent = indent || 0;

		var i;
		var entityLog = "";
		for (i = 0; i < indent; ++i) {
			entityLog += "-";
		}
		entityLog += entity.name;
		if (entity.components.length > 0) {
			entityLog += " (";
			for (i = 0; i < entity.components.length; ++i) {
				entityLog += entity.components[i].name;
				if (i < entity.components.length - 1) entityLog += ", ";
			}
			entityLog += ")";
		}

		entityLog += " p:" + Math.ceil(entity.x) + "x" + Math.ceil(entity.y);
		entityLog += " s:" + Math.ceil(entity.width) + "x" + Math.ceil(entity.height);

		if (!entity.foldInLog) {
			for (i = 0; i < entity.children.length; ++i) {
				entityLog += chao.logEntity(entity.children[i], indent + 1);
			}
		} else {
			entityLog += "\n";
			for (i = 0; i < indent + 1; ++i) {
				entityLog += "  ";
			}
			entityLog += "(...)";
		}

		return "\n" + entityLog;
	},

	installVisibilityHandler() {
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

			vendors.forEach(function(prefix) {
				if (document[prefix + "Hidden"] !== undefined) {
					document.hidden = function() {
						return document[prefix + "Hidden"];
					};
					hiddenVar = prefix + "visibilitychange";
				}
			});
		}

		if (hiddenVar) {
			document.addEventListener(hiddenVar, function(event) {
				if (document.hidden || event.type === "pause") {
					chao.onFocusChange(false);
				} else {
					chao.onFocusChange(true);
				}
			}, false);
		}

		window.onblur = function() {
			chao.onFocusChange(false);
		};
		window.onfocus = function() {
			chao.onFocusChange(true);
		};
	},

	helpers: {

		createSprite(parent, entityName, image, x, y) {
			var newSprite = (new Entity(entityName, x, y)).addComponent(new ComponentSprite(image));
			if (parent) {
				parent.add(newSprite.entity);
			}
			return newSprite;
		},

		createText(parent, entityName, x, y, font, text, size) {
			var newText = (new Entity(entityName, x, y)).addComponent(new ComponentText(font, text, size));
			if (parent) {
				parent.add(newText.entity);
			}
			return newText;
		},

		createButton(parent, entityName, x, y, image, imagePressed, font, fontSize, text) {
			var newButton = (new Entity(entityName, x, y)).addComponent(new ComponentButton(image));

			if (imagePressed) {
				newButton.setImagePressed(imagePressed);
			}

			if (font && fontSize) {
				text = text || "";
				newButton.setText(text, font, fontSize);
			}

			if (parent) {
				parent.add(newButton.entity);
			}

			return newButton;
		},

		createFpsCounter(parent, size) {
			size = size || 25;
			chao.countFPS = true;

			var textFPS = chao.helpers.createText(parent, "FPS counter", 0, 0, chao.font, "FPS", size);
			textFPS.backgroundColor = chao.makeColor(255, 255, 255, 100);
			textFPS.align = "right";

			var componentCounter = {
				name: "FPS Counter",
				textComponent: textFPS,
				update() {
					this.textComponent.text = "" + chao.currentFPS + " fps";
				}
			};
			textFPS.entity.addComponent(componentCounter);

			if (parent !== undefined) {
				textFPS.entity.alignToParent(1.0, 0.0, 1.0, 0.0, -5, 5);
			}

			return textFPS;
		},

		fadeEntityOut(entity, time, delay) {
			return ComponentTween.addTween(entity, "alpha", 1.0, 0.0,
				time || 0.25, chao.INTERPOLATE_LINEAR, chao.REPEAT_MODE_ONCE, delay || 0.0);
		},

		fadeEntityIn(entity, time, delay) {
			return ComponentTween.addTween(entity, "alpha", 0.0, 1.0,
				time || 0.25, chao.INTERPOLATE_LINEAR, chao.REPEAT_MODE_ONCE, delay || 0.0);
		},

		addBounceTween(entity, amplitude, time) {
			var tweenName = "BounceTween";
			entity.removeComponentsByName(tweenName);
			var newTween = ComponentTween.addTween(entity, "y",
				entity.y - amplitude / 2, entity.y + amplitude / 2,
				time, chao.INTERPOLATE_SMOOTH, chao.REPEAT_MODE_BOUNCE);
			newTween.name = tweenName;
			return newTween;
		},

		shake(entity, force, time, damped) {
			var shakerName = "Disposable Shake";

			var oldShake = entity.getComponentByName(shakerName);
			if (oldShake !== null) {
				entity.removeComponent(oldShake);
			}

			var newShake = new ComponentShake(force, time, damped);
			newShake.name = shakerName;
			newShake.disposable = true;
			entity.addComponent(newShake);
			newShake.shake();
		},

		createHierarchy(hierarchyData) {
			var i, j;
			var root = chao.getCurrentState().rootEntity;
			var entities = [];
			for (i = 0; i < hierarchyData.length; ++i) {
				var data = hierarchyData[i];
				var entity = new Entity(data.name);

				for (j = 0; j < data.components.length; ++j) {
					entity.addComponent(data.components[j]);
				}

				if (data.parent != undefined) {
					entities[data.parent].add(entity);
				} else {
					root.add(entity);
				}

				if (data.scaleX != undefined) {
					entity.scaleX = data.scaleX;
				}
				if (data.scaleY != undefined) {
					entity.scaleY = data.scaleY;
				}

				if (data.align != undefined) {
					entity.alignToParent(data.align[0], data.align[1], data.align[2],
						data.align[3], data.align[4], data.align[5], data.align[6]);
				} else {
					entity.x = data.x || 0;
					entity.y = data.y || 0;
				}

				entities.push(entity);
			}
		},
	}

};

function Entity(name, x, y) {
	this.name = name || "Entity";

	this.transformMatrix = chao.makeTransformMatrix(x, y);

	this.pivotX = 0.5;
	this.pivotY = 0.5;

	this.width = 0; // see also getWidth()
	this.height = 0; // see also getHeight()

	this.alpha = 1.0;

	this.anchor = {};

	this.children = [];
	this.components = [];
	this.removalQueuedComponents = [];
	this.parent = null;

	this.visible = true;
	this.paused = false;
	this.clickable = false;
	this.keepClickFocus = false;
	this.foldInLog = false;

	this.destroy = function() {
		var i;
		for (i = 0; i < this.components.length; ++i) {
			if (this.components[i].destroy) {
				this.components[i].destroy();
			}
		}

		for (i = 0; i < this.children.length; ++i) {
			this.children[i].destroy();
		}

		this.children = [];
		this.components = [];
	};

	this.draw = function() {
		if (!this.visible) {
			return;
		}

		var i;

		var componentsNum = this.components.length;
		for (i = 0; i < componentsNum; ++i) {
			if (this.components[i].draw) {
				this.components[i].draw();
			}
		}

		var childrenNum = this.children.length;
		for (i = 0; i < childrenNum; ++i) {
			if (this.children[i].draw) {
				this.children[i].draw();
			}
		}
	};

	this.update = function() {
		if (this.paused || !this.visible) {
			return;
		}

		var i;

		if (this.removalQueuedComponents.length > 0) {
			var compsNum = this.components.length;
			for (i = 0; i < this.removalQueuedComponents.length; ++i) {
				var component = this.removalQueuedComponents[i];
				if (component.remove) {
					component.remove();
				}
				this.components.splice(this.components.indexOf(component), 1);
			}
			this.removalQueuedComponents = [];
		}

		var componentsNum = this.components.length;
		for (i = 0; i < componentsNum; ++i) {
			if (this.components[i].update) {
				this.components[i].update();
			}
		}

		var childrenNum = this.children.length;
		for (i = 0; i < childrenNum; ++i) {
			if (this.children[i].update) {
				this.children[i].update();
			}
		}
	};

	this.add = function(childEntity) {
		if (childEntity.parent === undefined) {
			chao.log("The object you are trying to add as an entity is not an Entity.");
			chao.log(childEntity);
			return;
		}
		this.children.push(childEntity);
		childEntity.parent = this;
		return childEntity;
	};

	this.addWithComponent = function(childEntity, component) {
		if (typeof childEntity === "string" || childEntity instanceof String) {
			childEntity = new Entity(childEntity);
		}
		this.add(childEntity);
		if (childEntity) {
			childEntity.addComponent(component);
			return component;
		}
	};

	this.remove = function(childEntity) {
		if (childEntity.parent === this) {
			this.children.splice(this.children.indexOf(childEntity), 1);
			return childEntity;
		}
	};

	this.resize = function() {
		if (this.anchor.stretch) {
			this.stretchOnParent(true);
		}
		if (this.anchor.alignX !== undefined && this.anchor.anchorX !== undefined && this.anchor.pxOffsetX !== undefined) {
			this.alignToParentHorizontally(this.anchor.alignX, this.anchor.anchorX, this.anchor.pxOffsetX);
		}
		if (this.anchor.alignY !== undefined && this.anchor.anchorY !== undefined && this.anchor.pxOffsetY !== undefined) {
			this.alignToParentVertically(this.anchor.alignY, this.anchor.anchorY, this.anchor.pxOffsetY);
		}

		var i;
		var componentsNum = this.components.length;
		for (i = 0; i < componentsNum; ++i) {
			if (this.components[i].resize) {
				this.components[i].resize();
			}
		}

		var childrenNum = this.children.length;
		for (i = 0; i < childrenNum; ++i) {
			this.children[i].resize();
		}
	};

	this.addComponent = function(component) {
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
	};

	this.getComponentByName = function(componentName) {
		for (var i = 0; i < this.components.length; ++i) {
			var c = this.components[i];
			if (c.name === componentName && !this.isComponentQueuedForRemoval(c)) {
				return this.components[i];
			}
		}

		return null;
	};

	this.getComponentsByName = function(componentName) {
		var allComponents = [];

		for (var i = 0; i < this.components.length; ++i) {
			var c = this.components[i];
			if (c.name === componentName && !this.isComponentQueuedForRemoval(c)) {
				allComponents.push(this.components[i]);
			}
		}

		return allComponents;
	};

	this.getComponentInChildrenByName = function(componentName) {
		var foundComponent = this.getComponentByName(componentName);
		if (foundComponent !== null) {
			return foundComponent;
		}

		for (var i = 0; i < this.children.length; ++i) {
			foundComponent = this.children[i].getComponentInChildrenByName(componentName);
			if (foundComponent !== null) {
				return foundComponent;
			}
		}

		return null;
	};

	this.getComponentsInChildrenByName = function(componentName, outArray) {
		var i;
		outArray = outArray || [];

		var foundComponents = this.getComponentsByName(componentName);
		for (i = 0; i < foundComponents.length; ++i) {
			outArray.push(foundComponents[i]);
		}

		for (i = 0; i < this.children.length; ++i) {
			this.children[i].getComponentsInChildrenByName(componentName, outArray);
		}

		return outArray;
	};

	this.removeComponent = function(component) {
		if (component.entity === this) {
			if (!this.isComponentQueuedForRemoval(component)) {
				this.removalQueuedComponents.push(component);
			}
		} else {
			chao.log("Entity " + this + " have no such component: " + component);
		}
	};

	this.removeComponentByName = function(componentName) {
		this.removeComponent(this.getComponentByName(componentName));
	};

	this.removeComponentsByName = function(componentName) {
		for (;;) {
			var component = this.getComponentByName(componentName);
			if (!component) {
				break;
			}
			this.removeComponent(component);
		}
	};

	this.isComponentQueuedForRemoval = function(component) {
		return this.removalQueuedComponents.indexOf(component) != -1;
	};

	this.onClick = function() {
		var relativeX = chao.mouse.x - this.screenX;
		var relativeY = chao.mouse.y - this.screenY;
		for (var i = 0; i < this.components.length; ++i) {
			if (this.components[i].onClick) {
				this.components[i].onClick(relativeX, relativeY);
			}
		}
	};

	this.onMove = function() {
		var relativeX = chao.mouse.x - this.screenX;
		var relativeY = chao.mouse.y - this.screenY;
		for (var i = 0; i < this.components.length; ++i) {
			if (this.components[i].onMove) {
				this.components[i].onMove(relativeX, relativeY);
			}
		}
	};

	this.onCancel = function() {
		for (var i = 0; i < this.components.length; ++i) {
			if (this.components[i].onCancel) {
				this.components[i].onCancel();
			}
		}
	};

	this.onRelease = function() {
		var relativeX = chao.mouse.x - this.screenX;
		var relativeY = chao.mouse.y - this.screenY;
		for (var i = 0; i < this.components.length; ++i) {
			if (this.components[i].onRelease) {
				this.components[i].onRelease(relativeX, relativeY);
			}
		}
	};

	this.setPosition = function(x, y, screenCoordinates) {
		if (screenCoordinates === true) {
			this.screenX = x;
			this.screenY = y;
		} else {
			this.x = x;
			this.y = y;
		}
	};

	this.setPivot = function(x, y) {
		this.pivotX = x;
		this.pivotY = y;
	}

	this.setScale = function(x, y) {
		y = y || x;
		this.scaleX = x;
		this.scaleY = y;
	}

	this.stretchOnParent = function(setAnchor) {
		if (setAnchor === undefined) {
			setAnchor = true;
		}

		this.width = this.parent.width;
		this.height = this.parent.height;
		this.alignToParent();

		if (setAnchor) {
			this.anchor.stretch = true;
		}
	};

	// this one's the same as stretch but also sets pivot so coordinates are the same as screens.
	// (0x0 is top-right)
	this.makeFullscreen = function(setAnchor) {
		this.pivotX = this.pivotY = 0.0;
		this.stretchOnParent(setAnchor);
	};

	this.alignToParent = function(parentX, parentY, childX, childY, pxOffsetX, pxOffsetY, setAnchor) {
		if (setAnchor === undefined) {
			setAnchor = true;
		}
		this.alignToParentHorizontally(parentX, childX, pxOffsetX, setAnchor);
		this.alignToParentVertically(parentY, childY, pxOffsetY, setAnchor);
	};

	this.alignToParentHorizontally = function(parentX, childX, pxOffset, setAnchor) {
		if (setAnchor === undefined) {
			setAnchor = true;
		}
		parentX = parentX !== undefined ? parentX : 0.5;
		childX = childX !== undefined ? childX : 0.5;
		pxOffset = pxOffset || 0;

		if (this.parent !== null) {
			var prX = parentX - this.parent.pivotX;
			var crX = childX - this.pivotX;
			this.x = Math.ceil((this.parent.getWidth() * prX) - (this.getWidth() * crX));
			this.x += pxOffset;
		}

		if (setAnchor) {
			this.anchor.parentX = parentX;
			this.anchor.childX = childX;
			this.anchor.pxOffsetX = pxOffset;
		}
	};

	this.alignToParentVertically = function(parentY, childY, pxOffset, setAnchor) {
		if (setAnchor === undefined) {
			setAnchor = true;
		}
		parentY = parentY !== undefined ? parentY : 0.5;
		childY = childY !== undefined ? childY : 0.5;
		pxOffset = pxOffset || 0;

		if (this.parent !== null) {
			var prY = parentY - this.parent.pivotY;
			var crY = childY - this.pivotY;
			this.y = Math.ceil((this.parent.getHeight() * prY) - (this.getHeight() * crY));
			this.y += pxOffset;
		}

		if (setAnchor) {
			this.anchor.parentY = parentY;
			this.anchor.childY = childY;
			this.anchor.pxOffsetY = pxOffset;
		}
	};

	// mind that this one gets you just a copy of the thing
	this.getTransformMatrix = function() {
		if (this.parent === null) {
			return this.transformMatrix.getDuplicate();
		}
		return this.transformMatrix.getMultiplied(this.parent.getTransformMatrix());
	};

	this.getWidth = function() {
		return this.width * this.scaleX;
	};

	this.getHeight = function() {
		return this.height * this.scaleY;
	};

	this.isPointInside = function(x, y) {
		var sx = this.screenX;
		var sy = this.screenY;
		var sw = this.screenWidth;
		var sh = this.screenHeight;
		var vec = chao.makeVector2(x, y);
		vec.rotateAroundPoint(sx, sy, -this.screenRotation);
		x = vec.x - sx;
		y = vec.y - sy;

		return (x > -sw * this.pivotX &&
			x < sw * this.pivotX &&
			y > -sh * this.pivotY &&
			y < sh * this.pivotY);
	};

	this.getEntityAt = function(x, y) {
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

		if (this.clickable && this.isPointInside(x, y)) {
			return this;
		}

		return null;
	};

	this.isVisible = function() {
		if (this.parent !== null) {
			return this.visible && this.parent.isVisible();
		}
		return this.visible;
	};

	this.checkCollision = function(entity) {
		var thisPos = chao.makeVector2(this.screenX, this.screenY);
		var thisSize = chao.makeVector2(this.getWidth(), this.getHeight());
		var otherPos = chao.makeVector2(entity.screenX, entity.screenY);
		var otherSize = chao.makeVector2(entity.getWidth(), entity.getHeight());

		// first unholy wall of nopes
		var tl1 = chao.makeVector2(otherPos.x - otherSize.x * entity.pivotX, otherPos.y - otherSize.y * entity.pivotY);
		var tr1 = chao.makeVector2(otherPos.x + otherSize.x * (1 - entity.pivotX), otherPos.y - otherSize.y * entity.pivotY);
		var bl1 = chao.makeVector2(otherPos.x + otherSize.x * (1 - entity.pivotX), otherPos.y + otherSize.y * (1 - entity.pivotY));
		var br1 = chao.makeVector2(otherPos.x - otherSize.x * entity.pivotX, otherPos.y + otherSize.y * (1 - entity.pivotY));
		var tl2 = chao.makeVector2(thisPos.x - thisSize.x * this.pivotX, thisPos.y - thisSize.y * this.pivotY);
		var tr2 = chao.makeVector2(thisPos.x + thisSize.x * (1 - this.pivotX), thisPos.y - thisSize.y * this.pivotY);
		var bl2 = chao.makeVector2(thisPos.x + thisSize.x * (1 - this.pivotX), thisPos.y + thisSize.y * (1 - this.pivotY));
		var br2 = chao.makeVector2(thisPos.x - thisSize.x * this.pivotX, thisPos.y + thisSize.y * (1 - this.pivotY));

		// a "good enough" check for not rotated rects
		if (Math.abs(this.rotation) < 10.0 && Math.abs(entity.rotation) < 10.0) {
			return tl1.x < tr2.x && tr1.x > tl2.x && tl1.y < bl2.y && bl1.y > tl2.y;
		}

		// preliminary check if polygon counting is even worth the effort
		var vec = chao.makeVector2(thisPos.x - otherPos.x, thisPos.y - otherPos.y);
		var distMinSqrt = Math.pow(Math.max(thisSize.x, thisSize.y) + Math.max(otherSize.x, otherSize.y), 2);
		if (vec.x * vec.x + vec.y * vec.y > distMinSqrt) {
			return false;
		}

		// second, slightly less unholy wall of nopes
		tl1.rotateAroundPoint(otherPos.x, otherPos.y, entity.rotation);
		tr1.rotateAroundPoint(otherPos.x, otherPos.y, entity.rotation);
		bl1.rotateAroundPoint(otherPos.x, otherPos.y, entity.rotation);
		br1.rotateAroundPoint(otherPos.x, otherPos.y, entity.rotation);
		tl2.rotateAroundPoint(thisPos.x, thisPos.y, this.rotation);
		tr2.rotateAroundPoint(thisPos.x, thisPos.y, this.rotation);
		bl2.rotateAroundPoint(thisPos.x, thisPos.y, this.rotation);
		br2.rotateAroundPoint(thisPos.x, thisPos.y, this.rotation);
		var poly1 = chao.makePolygon([tl1, tr1, bl1, br1]);
		var poly2 = chao.makePolygon([tl2, tr2, bl2, br2]);

		return poly1.intersects(poly2);
	};
}
Entity.prototype = {
	get x() {
		return this.transformMatrix.getX();
	},
	set x(value) {
		this.transformMatrix.setX(value);
	},
	get y() {
		return this.transformMatrix.getY();
	},
	set y(value) {
		this.transformMatrix.setY(value);
	},
	get screenX() {
		return this.getTransformMatrix().getX();
	},
	set screenX(value) {
		this.transformMatrix.origin[0] += value - this.screenX;
	},
	get screenY() {
		return this.getTransformMatrix().getY();
	},
	set screenY(value) {
		this.transformMatrix.origin[1] += value - this.screenY;
	},
	get screenAlpha() {
		if (this.parent === null) {
			return this.alpha;
		}
		return this.alpha * this.parent.screenAlpha;
	},
	get scaleX() {
		return this.transformMatrix.getScaleX();
	},
	set scaleX(value) {
		this.transformMatrix.setScaleX(value);
	},
	get scaleY() {
		return this.transformMatrix.getScaleY();
	},
	set scaleY(value) {
		this.transformMatrix.setScaleY(value);
	},
	get screenScaleX() {
		return this.getTransformMatrix().getScaleX();
	},
	get screenScaleY() {
		return this.getTransformMatrix().getScaleY();
	},
	get rotation() {
		return this.transformMatrix.getRotation();
	},
	set rotation(value) {
		this.transformMatrix.setRotation(value);
	},
	get screenRotation() {
		return this.getTransformMatrix().getRotation();
	},
	set screenRotation(value) {
		this.rotation += value - this.screenRotation;
	},
	get screenWidth() {
		return this.width * this.screenScaleX;
	},
	get screenHeight() {
		return this.height * this.screenScaleY;
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
	this.imageFlippedX = null;
	this.imageFlippedY = null;
	this.imageFlippedXY = null;

	this.scrollFactorX = 1.0;
	this.scrollFactorY = 1.0;

	this.anims = [];
	this.currentAnim = -1;
	this.currentFrame = 0;
	this.animTimer = 0;
	this.animPaused = false;
	this.animFinished = false;

	this.ready = true;

	this.create = function() {
		this.setImage(this.imageKey, this.frameWidth, this.frameHeight);
	};

	this.draw = function() {
		var entity = this.entity;

		if (!this.image) {
			return;
		}

		if (!entity.visible) {
			return;
		}

		var anim = {
			key: "dummy",
			frames: [0],
			delay: 0,
			loop: true
		};

		var image = this.image;
		if (this.flipX && this.flipY) {
			if (!this.imageFlippedXY) {
				this.imageFlippedXY = chao.createFlippedImage(this.image, undefined, true, true);
			}
			image = this.imageFlippedXY;
		} else if (this.flipX) {
			if (!this.imageFlippedX) {
				this.imageFlippedX = chao.createFlippedImage(this.image, undefined, true, false);
			}
			image = this.imageFlippedX;
		} else if (this.flipY) {
			if (!this.imageFlippedY) {
				this.imageFlippedY = chao.createFlippedImage(this.image, undefined, false, true);
			}
			image = this.imageFlippedY;
		}

		if (this.currentAnim != -1) {
			anim = this.anims[this.currentAnim];
		}

		var parentMatrix = entity.parent.getTransformMatrix();
		parentMatrix.origin[0] *= this.scrollFactorX;
		parentMatrix.origin[1] *= this.scrollFactorY;
		var currentMatrix = entity.transformMatrix.getMultiplied(parentMatrix);

		var drawX = currentMatrix.origin[0] - (entity.screenWidth * entity.pivotX);
		var drawY = currentMatrix.origin[1] - (entity.screenHeight * entity.pivotY);
		var drawAlpha = entity.screenAlpha;
		if (drawAlpha > 1.0) drawAlpha = 1.0;

		var drawArea = {
			x: 0,
			y: 0,
			width: entity.width,
			height: entity.height
		};

		if (this.currentAnim != -1) {
			var framesNumX = image.width / entity.width;
			var frameX = anim.frames[this.currentFrame];
			var frameY = Math.floor(frameX / framesNumX);
			frameX -= frameY * framesNumX;

			drawArea.x = Math.ceil(frameX * entity.width);
			drawArea.y = Math.ceil(frameY * entity.height);

			if (this.flipX) {
				var maxFrameX = image.width - entity.width;
				drawArea.x = Math.abs(maxFrameX - drawArea.x);
			}
			if (this.flipY) {
				var maxFrameY = image.height - entity.height;
				drawArea.y = Math.abs(maxFrameY - drawArea.y);
			}
		}

		chao.drawImagePart(chao.canvas, image,
			drawX, drawY, drawArea, drawAlpha,
			entity.screenScaleX, entity.screenScaleY,
			entity.screenRotation,
			entity.pivotX, entity.pivotY);
	};

	this.update = function() {

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
	};

	this.setImage = function(image, frameWidth, frameHeight) {
		if (!image) {
			return;
		}

		this.image = chao.getImage(image);

		this.entity.width = frameWidth || this.image.width;
		this.entity.height = frameHeight || this.image.height;

		if (!this.image.ready && (!frameWidth || !frameHeight)) {
			this.ready = false;
		}
	};

	this.addAnim = function(key, frames, delay, loop) {
		this.anims.push({
			key: key,
			frames: frames,
			delay: delay,
			loop: loop,
		});
	};

	this.playAnim = function(key, force) {
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
	};

	this.getCurrentAnim = function() {
		if (this.currentAnim >= 0 && this.currentAnim < this.anims.length) {
			return this.anims[this.currentAnim];
		}

		return null;
	};

	this.setAnimPause = function(value) {
		this.animPaused = value;
	};
};

function ComponentFrame(image, cornerSize) {
	this.name = "Frame";
	this.entity = null;
	this.sourceImage = null;
	this.frameImage = null;
	this.lastSize = chao.makeVector2(-1, -1);

	this.create = function() {
		this.sourceImage = chao.getImage(image);
		this.updateImage();
	};

	this.draw = function() {
		var entity = this.entity;
		var drawX = entity.screenX - (entity.screenWidth * entity.pivotX);
		var drawY = entity.screenY - (entity.screenHeight * entity.pivotY);

		chao.drawImage(chao.canvas, this.frameImage,
			drawX, drawY,
			entity.screenAlpha,
			entity.screenScaleX, entity.screenScaleY,
			entity.screenRotation,
			entity.pivotX, entity.pivotY);
	};

	this.update = function() {
		var entity = this.entity;
		if (this.lastSize.x != entity.width || this.lastSize.y != entity.height) {
			this.lastSize.set(entity.width, entity.height);
			this.updateImage();
		}
	};

	this.updateImage = function() {
		var entity = this.entity;
		var minSize = cornerSize * 2;
		var newSize = chao.makeVector2(
			Math.max(minSize, entity.width),
			Math.max(minSize, entity.height));

		if (this.frameImage == null) {
			this.frameImage = chao.createImage(undefined, newSize.x, newSize.y);
		} else {
			chao.resizeImage(this.frameImage, newSize.x, newSize.y);
		}

		var frameImg = this.frameImage;
		var sourceImg = this.sourceImage;

		var doubleCorner = cornerSize * 2;
		var sourceBorderWidth = sourceImg.width - doubleCorner;
		var sourceBorderHeight = sourceImg.height - doubleCorner;
		var borderWidth = entity.width - doubleCorner;
		var borderHeight = entity.height - doubleCorner;
		var borderScaleX = borderWidth / sourceBorderWidth;
		var borderScaleY = borderHeight / sourceBorderHeight;

		var rectMid = chao.makeRect(cornerSize, cornerSize, sourceBorderWidth, sourceImg.height - doubleCorner);
		var rectTop = chao.makeRect(cornerSize, 0, sourceBorderWidth, cornerSize);
		var rectBottom = chao.makeRect(cornerSize, sourceImg.height - cornerSize, sourceBorderWidth, cornerSize);
		var rectLeft = chao.makeRect(0, cornerSize, cornerSize, sourceImg.height - doubleCorner);
		var rectRight = chao.makeRect(sourceImg.width - cornerSize, cornerSize, cornerSize, sourceImg.height - doubleCorner);
		var rectTL = chao.makeRect(0, 0, cornerSize, cornerSize);
		var rectTR = chao.makeRect(sourceImg.width - cornerSize, 0, cornerSize, cornerSize);
		var rectBL = chao.makeRect(0, sourceImg.height - cornerSize, cornerSize, cornerSize);
		var rectBR = chao.makeRect(sourceImg.width - cornerSize, sourceImg.height - cornerSize, cornerSize, cornerSize);

		this.drawFramePart(cornerSize, cornerSize, rectMid, borderScaleX, borderScaleY);
		this.drawFramePart(cornerSize, 0, rectTop, borderScaleX, 1.0);
		this.drawFramePart(cornerSize, frameImg.height - cornerSize, rectBottom, borderScaleX, 1.0);
		this.drawFramePart(0, cornerSize, rectLeft, 1.0, borderScaleY);
		this.drawFramePart(frameImg.width - cornerSize, cornerSize, rectRight, 1.0, borderScaleY);

		this.drawFramePart(0, 0, rectTL);
		this.drawFramePart(entity.width - cornerSize, 0, rectTR);
		this.drawFramePart(0, entity.height - cornerSize, rectBL);
		this.drawFramePart(entity.width - cornerSize, entity.height - cornerSize, rectBR);
	};

	this.drawFramePart = function(x, y, sourceRect, scaleX, scaleY) {
		chao.drawImagePart(this.frameImage, this.sourceImage, x, y, sourceRect, 1.0, scaleX || 1.0, scaleY || 1.0);
	};
};

/**
 * Text rendering component.
 * Use "\n" to break lines.
 * You can colorize parts of the text using color codes, eg. `2 is a color code for green
 * and `` removes the effect of the last color code.
 * Color codes are defined in colorCodes array in the chao namespace.
 * Example: "This is a text\nwith a `14yellow`` word inside." will create a
 * two-line text object with the "yellow" word colored yellow.
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

	this.create = function() {
		this._font = chao.getFont(this._font);
		if (chao.enableFontsLoadCheck) {
			this.ready = this._font.ready;
		}
		this.image = chao.createImage(undefined, 1, 1);
		this.changeText();
	};

	this.draw = function() {
		if (this.text === "") {
			return;
		}

		if (!this.ready && this.font.ready) {
			this.ready = true;
			this.changeText(); // Font that was previously not ready was finally loaded, so we need to redraw this image.
		}

		var entity = this.entity;
		var drawScaleX = this.flipX ? -entity.screenScaleX : entity.screenScaleX;
		var drawScaleY = this.flipY ? -entity.screenScaleY : entity.screenScaleY;
		var drawAlpha = entity.screenAlpha;
		var drawX = entity.screenX - (entity.screenWidth * entity.pivotX);
		var drawY = entity.screenY - (entity.screenHeight * entity.pivotY);

		chao.drawImage(chao.canvas, this.image,
			drawX, drawY,
			drawAlpha,
			drawScaleX, drawScaleY,
			entity.screenRotation,
			entity.pivotX, entity.pivotY);
	};

	this.changeText = function(text) {
		text = text || this.text;

		var i, j;
		var textLines = text.split("\n");
		var chunks = [];
		var rawLines = [];
		var colorStack = [];
		var currentColor = this.color;

		this.rawText = "";

		for (i = 0; i < textLines.length; ++i) {
			var currentChunk = "";
			chunks.push([]);

			for (j = 0; j < textLines[i].length; ++j) {
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
			for (j = 0; j < chunks[i].length; ++j) {
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
		for (i = 0; i < rawLines.length; ++i) {
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

		for (i = 0; i < chunks.length; ++i) {
			var currentX = 0;
			switch (this.align) {
				case "center":
					currentX = (longestLineSize - linesSizes[i]) / 2;
					break;
				case "right":
					currentX = longestLineSize - linesSizes[i];
			}
			for (j = 0; j < chunks[i].length; ++j) {
				var posY = -this.size * 0.25 + (i * this.size);
				if (!chao.smoothing) {
					currentX = Math.round(currentX);
					posY = Math.round(posY);
				}

				chao.drawText(this.image,
					this.font,
					chunks[i][j].text,
					currentX, posY,
					this.size,
					chunks[i][j].color,
					"left",
					this.outlineColor,
					this.outlineSize);

				currentX += chao.getTextSize(this.image, chunks[i][j].text).width;
			}
		}
	};

	this.isNumber = function(c) {
		return "0123456789".indexOf(c) !== -1;
	};

}
ComponentText.prototype = {
	// This is a serious mess, even by the messiness of all the other things here. Is there a better way of doing this?
	get text() {
		return this._text;
	},
	set text(newText) {
		if (newText !== this.text) {
			this._text = newText;
			this.changeText();
		}
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

		switch (newAlign) {
			case "center":
				this.entity.pivotX = 0.5;
				break;
			case "left":
				this.entity.pivotX = 0.0;
				break;
			case "right":
				this.entity.pivotX = 1.0;
				break;
		}

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
		this.changeText();
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

	this.onPress = chao.makeSignal();
	this.onHold = chao.makeSignal();
	this.onReleased = chao.makeSignal();

	this.create = function() {
		this.setImage(this.imageKey);
		this.entity.clickable = true;
	};

	this.update = function() {
		if (!this.entity.visible) {
			return;
		}

		var mouseOver = this.isAbove(chao.mouse.x, chao.mouse.y);
		var buttonAlpha = 1.0;

		if (mouseOver && !this.disabled) {
			if (chao.mouse.justReleased) {
				this.pressed = false;
				buttonAlpha = 1.0;
				this.onReleased.fire(this);
				// hacky supress any other releases
				// could do something like Godot's set_input_as_handled here
				chao.mouse.justReleased = false;
			}

			if (chao.mouse.pressed) {
				buttonAlpha = 0.5;

				if (!this.pressed) {
					this.onPress.fire(this);
				}
				this.onHold.fire(this);

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
	};

	this.setImage = function(key) {
		if (this.sprite) {
			this.entity.remove(this.sprite.entity);
		}

		this.imageKey = key;

		this.sprite = this.entity.addWithComponent("Button Image", new ComponentSprite(this.imageKey));
		this.sprite.entity.clickable = false;

		// Update Entity's size to be the same as button's sprite
		this.entity.width = this.sprite.entity.width;
		this.entity.height = this.sprite.entity.height;
	};

	this.setImagePressed = function(key) {
		if (this.spritePressed) {
			this.entity.remove(this.spritePressed.entity);
		}

		this.spritePressed = this.entity.addWithComponent("Button Image Pressed", new ComponentSprite(key));
		this.spritePressed.entity.clickable = false;
		this.spritePressed.entity.visible = false;
	};

	this.setText = function(text, font, size, color) {
		if (!this.text) {
			this.text = this.entity.addWithComponent("Button Text", new ComponentText(font, text, size));
			this.text.align = "left";
			this.text.color = color || "#000000";
			this.text.entity.clickable = false;
			this.entity.add(this.text.entity);
		} else {
			if (font) this.text.font = font;
			if (text) this.text.text = text;
			if (size) this.text.size = size;
			if (color) this.text.colot = color;
		}

		this.text.entity.alignToParent();

		return this.text;
	};

	this.isAbove = function(x, y) {
		if (!this.entity.visible) {
			return false;
		}

		return chao.getCurrentState().rootEntity.getEntityAt(x, y) === this.entity;
	};
}

function ComponentCamera() {
	this.name = "Camera";
	this.entity = null;

	this.trackedEntity = null;
	this.trackingSpeed = 4.0;

	this.offsetX = 0;
	this.offsetY = 0;

	this.bounds = {
		x: 0,
		y: 0,
		width: -1,
		height: -1
	};

	this.slideTweens = [];

	this.update = function() {
		if (this.trackedEntity === null) {
			this.clampToBounds(this.entity);
			return;
		}

		var cameraPos = this.getCameraTargetPosition();

		this.entity.x = chao.interpolate(this.entity.x, cameraPos.x, chao.timeDelta * this.trackingSpeed);
		this.entity.y = chao.interpolate(this.entity.y, cameraPos.y, chao.timeDelta * this.trackingSpeed);
	};

	this.follow = function(entity, trackingSpeed) {
		this.removeSlideTweens();
		this.trackedEntity = entity;
		this.trackingSpeed = trackingSpeed || this.trackingSpeed;
		if (this.trackingSpeed <= 0) {
			this.trackingSpeed = chao.FPS;
		}
	};

	this.unfollow = function() {
		this.trackedEntity = null;
	};

	this.snapToPosition = function(x, y) {
		this.entity.x = x;
		this.entity.y = y;
	};

	this.snapToFollowed = function() {
		var cameraPos = this.getCameraTargetPosition();
		this.snapToPosition(cameraPos.x, cameraPos.y);
	};

	this.slideToPosition = function(x, y, time, interpolationType, callback) {
		interpolationType = interpolationType !== undefined ? interpolationType : chao.INTERPOLATE_SMOOTH;

		this.removeSlideTweens();
		this.unfollow();

		x = -x + chao.screenWidth / 2;
		y = -y + chao.screenHeight / 2;

		this.slideTweens.push(ComponentTween.addTween(this.entity, "x",
			this.entity.x, x, time, interpolationType, chao.REPEAT_MODE_ONCE, 0, callback));
		this.slideTweens.push(ComponentTween.addTween(this.entity, "y",
			this.entity.y, y, time, interpolationType, chao.REPEAT_MODE_ONCE));
	};

	this.removeSlideTweens = function() {
		for (var i = 0; i < this.slideTweens.length; ++i) {
			ComponentTween.removeTween(this.slideTweens[i]);
		}
		this.slideTweens = [];
	};

	this.getVisibleRect = function() {
		return chao.makeRect( -this.entity.x, -this.entity.y, chao.screenWidth, chao.screenHeight);
	};

	this.setBounds = function(x, y, width, height) {
		this.bounds.x = x;
		this.bounds.y = y;
		this.bounds.width = width;
		this.bounds.height = height;
	};

	this.resetBounds = function() {
		this.setBounds(0, 0, -1, -1);
	};

	this.isRectVisible = function(rect) {
		return this.getVisibleRect().intersects(rect);
	};

	this.clampToBounds = function(cameraPos) {
		if (this.bounds.width > 0) {
			cameraPos.x = -chao.clamp(-cameraPos.x, this.bounds.x, (this.bounds.x + this.bounds.width) - chao.screenWidth);
		}
		if (this.bounds.height > 0) {
			cameraPos.y = -chao.clamp(-cameraPos.y, this.bounds.y, (this.bounds.y + this.bounds.height) - chao.screenHeight);
		}
	};

	this.getCameraTargetPosition = function() {
		var targetPosOffset = {
			x: chao.screenWidth / 2 - this.trackedEntity.screenX,
			y: chao.screenHeight / 2 - this.trackedEntity.screenY
		};

		var cameraPos = {
			x: this.entity.x + targetPosOffset.x,
			y: this.entity.y + targetPosOffset.y
		};

		this.clampToBounds(cameraPos);

		return cameraPos;
	}
}

function ComponentTween(varName, from, to, time, interpolationType, repeatMode, delay, finishCallback) {
	this.name = "Tween";
	this.entity = null;

	this.target = null;
	this.varName = varName;
	this.from = from;
	this.to = to;
	this.lifetime = time !== undefined ? time : 1;
	this.interpolationType = interpolationType !== undefined ? interpolationType : chao.INTERPOLATE_LINEAR;
	this.repeatMode = repeatMode !== undefined ? repeatMode : chao.REPEAT_MODE_ONCE;
	this.delay = delay || 0;
	this.finishCallback = finishCallback;

	this.finished = false;
	this.useUnscaledTime = false;

	this.timer = 0;
	this.direction = 1;

	this.create = function() {
		this.target = this.target || this.entity;
	};

	this.update = function() {
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
				case chao.REPEAT_MODE_ONCE:
					{
						this.timer = this.lifetime;
						this.finished = true;
						if (this.finishCallback) {
							this.finishCallback.call(this, this);
						}
						this.entity.removeComponent(this);
						break;
					}
				case chao.REPEAT_MODE_LOOP:
					{
						this.timer = 0.0;
						if (this.finishCallback) {
							this.finishCallback.call(this, this);
						}
						break;
					}
				case chao.REPEAT_MODE_BOUNCE:
					{
						this.timer = 0.0;
						this.direction = this.direction == 1 ? -1 : 1;
						if (this.finishCallback) {
							this.finishCallback.call(this, this);
						}
					}
			}
		}

		var v = this.timer / this.lifetime;
		if (this.direction < 0) {
			v = 1 - v;
		}
		this.updateVar(v);
	};

	this.updateVar = function(progress) {
		this.target[this.varName] = chao.interpolate(this.from, this.to, progress, this.interpolationType);
	};

}

ComponentTween.addTween = function(targetEntity, varName, from, to, time, interpolationType, repeatMode, delay, finishCallback) {
	return targetEntity.addComponent(
		new ComponentTween(varName, from, to,
			time, interpolationType, repeatMode, delay, finishCallback)
	);
};

ComponentTween.removeTween = function(tween, finish) {
	if (tween.finished) {
		return;
	}
	if (finish) {
		tween.updateVar(1);
	}
	tween.entity.removeComponent(tween);
};

ComponentTween.removeTweensFromEntity = function(targetEntity, finish) {
	var tweensToRemove = targetEntity.getComponentsByName("Tween");
	for (var i = 0; i < tweensToRemove.length; ++i) {
		this.removeTween(tweensToRemove[i], finish);
	}
};

ComponentTween.removeAllTweens = function(finish) {
	var allTweens = chao.findComponents("Tween");
	var n = allTweens.length;
	for (var i = 0; i < n; ++i) {
		var tween = allTweens[i];
		this.removeTween(tween, finish);
	}
};

function ComponentParticles(image) {
	this.name = "Particles";
	this.entity = null;

	this.emitting = false;

	this.amount = 1;
	this.lifetime = 1.0;
	this.explosiveness = 0.0;
	this.useUnscaledTime = false;
	this.oneShot = false;
	this.disposable = false;
	this.useLocalCoords = true;
	this.emissionShapeSize = 0.0;

	this.velocity = chao.makeVector2(0, 0);
	this.velocityRandomness = chao.makeVector2(0, 0); // percentwise, 0-1
	this.velocitySpread = 0.0; // in degrees 0-360
	this.acceleration = chao.makeVector2(0, 0);
	this.velocityDamping = chao.makeVector2(0, 0);
	this.scaleVel = chao.makeVector2(0, 0);
	this.scaleAcc = chao.makeVector2(0, 0);
	this.rotationVel = 0;
	this.rotationAcc = 0;

	this.fadeOutStartTime = 0.8; // percentwise, 0-1

	this.create = function() {
		image = chao.getImage(image);
		this.particles = [];
	};

	this.update = function() {
		var entity = this.entity;
		var i;
		var deadParticles = [];
		var delta = this.useUnscaledTime ? chao.getUnscaledDelta() : chao.getTimeDelta();

		// spawning new particles
		if (this.emitting) {
			var interval = this.lifetime / this.amount;


			this.timer += delta;

			do {
				var nextEmit = interval * this.emittedAmount * (1.0 - this.explosiveness);

				if (this.timer >= nextEmit) {
					this.emittedAmount++;

					var newTransform = chao.makeTransformMatrix(
						chao.getRandomRange(-this.emissionShapeSize, this.emissionShapeSize),
						chao.getRandomRange(-this.emissionShapeSize, this.emissionShapeSize),
					);
					if (!this.useLocalCoords) {
						newTransform.origin[0] += entity.screenX;
						newTransform.origin[1] += entity.screenY;
					}

					var newVel = this.velocity.duplicate();
					var rand = chao.makeVector2(this.velocityRandomness.x / 2, this.velocityRandomness.y / 2);
					newVel.x += this.velocity.x * chao.getRandomRange(-rand.x, rand.x);
					newVel.y += this.velocity.y * chao.getRandomRange(-rand.y, rand.y);
					newVel.rotate(chao.getRandomRange(-this.velocitySpread / 2, this.velocitySpread / 2));

					var newParticle = {
						transform: newTransform,
						vel: newVel,
						scaleVel: this.scaleVel.duplicate(),
						rotationVel: this.rotationVel,
						timer: 0.0
					};

					this.particles.push(newParticle);

					if (this.emittedAmount >= this.amount) {
						this.emitting = false;
					}
				}
			} while (this.timer >= nextEmit && this.emitting)

		} else {
			if (this.particles.length <= 0) {
				if (this.disposable) {
					entity.removeComponent(this);
				} else if (!this.oneShot) {
					chao.log("uh?");
					this.play();
				}
				return;
			}
		}

		// upadting particles
		for (i = 0; i < this.particles.length; ++i) {
			var particle = this.particles[i];

			particle.timer += delta;
			if (particle.timer >= this.lifetime) {
				deadParticles.push(particle);
				continue;
			}

			particle.vel.x += this.acceleration.x * delta;
			particle.vel.y += this.acceleration.y * delta;
			particle.vel.x = chao.moveTowards(particle.vel.x, 0, this.velocityDamping.x * delta);
			particle.vel.y = chao.moveTowards(particle.vel.y, 0, this.velocityDamping.y * delta);
			particle.transform.origin[0] += particle.vel.x * delta;
			particle.transform.origin[1] += particle.vel.y * delta;

			var rot = particle.transform.getRotation() + (particle.rotationVel * delta);
			particle.transform.setRotation(rot);

			var scale = chao.makeVector2(particle.transform.getScaleX(), particle.transform.getScaleY());
			particle.scaleVel.x += this.scaleAcc.x * delta;
			particle.scaleVel.y += this.scaleAcc.y * delta;
			scale.x += particle.scaleVel.x * delta;
			scale.y += particle.scaleVel.y * delta;
			particle.transform.setScaleX(scale.x);
			particle.transform.setScaleY(scale.y);
		}

		for (i = 0; i < deadParticles.length; ++i) {
			this.particles.splice(this.particles.indexOf(deadParticles[i]), 1);
		}
	};

	this.draw = function() {
		var entity = this.entity;
		var i;
		var n = this.particles.length;
		var entityTransform = entity.getTransformMatrix();
		var drawAlpha = entity.screenAlpha;

		for (i = 0; i < n; ++i) {
			var particle = this.particles[i];
			var transform = particle.transform;

			if (this.useLocalCoords) {
				transform = particle.transform.getMultiplied(entityTransform);
			}

			var drawScaleX = transform.getScaleX();
			var drawScaleY = transform.getScaleY();
			var screenWidth = image.width * drawScaleX;
			var screenHeight = image.height * drawScaleY;
			var drawX = transform.origin[0] - (screenWidth * 0.5);
			var drawY = transform.origin[1] - (screenHeight * 0.5);

			var thisAlpha = drawAlpha;
			var fadeOutThreshold = this.lifetime * this.fadeOutStartTime;
			if (particle.timer > fadeOutThreshold) {
				var v = (particle.timer - fadeOutThreshold) / (this.lifetime - fadeOutThreshold);
				thisAlpha *= 1.0 - v;
			}

			chao.drawImage(chao.canvas, image, drawX, drawY, thisAlpha,
				drawScaleX, drawScaleY, transform.getRotation(),
				0.5, 0.5);
		}
	};

	this.play = function() {
		this.emittedAmount = 0;
		this.timer = this.timerLast = 0.0;
		this.emitting = true;
	};

	this.stop = function(immediately) {
		if (immediately) {
			this.particles = [];
		}
		this.emitting = false;
	}
}

function ComponentShake(force, time, damped) {
	this.name = "Shake";
	this.entity = null;

	this.damped = damped;
	this.force = force || 0.0;
	this.duration = time || 0.0;
	this.useUnscaledTime = false;
	this.timer = 0.0;

	this.disposable = false;

	this.entityPosition = chao.makeVector2();
	this.shakenPosition = chao.makeVector2();

	this.update = function() {
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

			// Put this component at the end if it's not already.
			// So we can take the position changes made by other components into account.
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
			if (this.shakenPosition.x != this.entity.x) {
				this.entityPosition.x = this.entity.x;
			}
			if (this.shakenPosition.y != this.entity.y) {
				this.entityPosition.y = this.entity.y;
			}

			var xChange = chao.getRandom(range * 2) - range;
			var yChange = chao.getRandom(range * 2) - range;

			this.entity.x = this.shakenPosition.x = this.entityPosition.x + xChange;
			this.entity.y = this.shakenPosition.y = this.entityPosition.y + yChange;
		}
	};

	this.shake = function(force, time, damped) {
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
	};
}

function ComponentYSort() {
	this.name = "Y Sort";

	this.update = function() {
		let objs = this.entity.children;
		let n = objs.length;
		for (let i = 0; i < n; ++i) {
			for (let j = 0; j < n - i - 1; ++j) {
				if (objs[j].y > objs[j + 1].y) {
					let tempChild = objs[j];
					objs[j] = objs[j + 1];
					objs[j + 1] = tempChild;
				}
			}
		}
	};
}

function ComponentCollider(shape, isKinematic) {
	// Watch out not to name anything else like this.
	this.name = "ChaoCollider"
	this.otherBodies = [];
	this.shape = shape;
	this.isKinematic = isKinematic == undefined ? true : false;

	this.onCollide = chao.makeSignal( /**ComponentCollider*/ );

	this.lastPos = chao.makeVector2();

	this.create = function() {
		var entity = this.entity;

		this.remove = this.destroy;
		this.lastPos.set(entity.x, entity.y);

		this.otherBodies = chao.findComponents(this.name);
		for (let i = 0; i < this.otherBodies.length; ++i) {
			this.otherBodies[i].otherBodies.push(this);
		}
	};

	this.destroy = function() {
		for (let i = 0; i < this.otherBodies.length; ++i) {
			this.otherBodies[i].splice(this.otherBodies[i].indexOf(this), 1);
		}
	};

	this.update = function() {
		var entity = this.entity;
		var lastPos = this.lastPos;

		if (Math.abs(entity.x - lastPos.x) >= 1 || Math.abs(entity.y - lastPos.y) >= 1) {
			var thisPos = this.shape.getPosition(entity.x, entity.y);
			var thisLastPos = this.shape.getPosition(lastPos.x, lastPos.y);
			var moveVec = chao.makeVector2(lastPos.x - entity.x, lastPos.y - entity.y);
			var moveVecNormalized = moveVec.getNormalized();
			var thisPosDiff = {
				x: Math.ceil(Math.abs(thisLastPos.x - thisPos.x)),
				y: Math.ceil(Math.abs(thisLastPos.y - thisPos.y))
			}

			for (let i = 0; i < this.otherBodies.length; ++i) {
				var other = this.otherBodies[i];
				var otherPos = other.shape.getPosition(other.entity.x, other.entity.y);
				var colX = false;
				var colY = false;

				if (this.shape.name == "circle" && other.shape.name == "circle") {
					var maxDist = this.shape.radius + other.shape.radius;

					var vecX = chao.makeVector2(otherPos.x - thisPos.x, otherPos.y - thisLastPos.y);
					var distX = vecX.getLength();

					colX = distX < maxDist;

					var vecY = chao.makeVector2(otherPos.x - thisPos.x, otherPos.y - thisPos.y);
					var distY = vecY.getLength();

					colY = distY < maxDist;

				} else if (this.shape.name == "rect" && other.shape.name == "rect") {
					var thisHalfSize = this.shape.getHalfSize();
					var otherHalfSize = other.shape.getHalfSize();
					var combinedHalfSizes = {
						x: thisHalfSize.x + otherHalfSize.x,
						y: thisHalfSize.y + otherHalfSize.y,
					};

					var vx = {
						x: Math.abs(thisPos.x - otherPos.x),
						y: Math.abs(thisLastPos.y - otherPos.y),
					};
					colX = vx.x < combinedHalfSizes.x && vx.y < combinedHalfSizes.y;

					var vy = {
						x: Math.abs(thisLastPos.x - otherPos.x),
						y: Math.abs(thisPos.y - otherPos.y),
					};
					colY = vy.x < combinedHalfSizes.x && vy.y < combinedHalfSizes.y;

				} else {
					if (this.shape.name == "circle") {
						colX = this.testRectCircleCollision(other.shape, this.shape,
							otherPos, chao.makeVector2(thisPos.x, thisLastPos.y));
						colY = this.testRectCircleCollision(other.shape, this.shape,
							otherPos, chao.makeVector2(thisLastPos.x, thisPos.y));
					} else {
						colX = this.testRectCircleCollision(this.shape, other.shape,
							chao.makeVector2(thisPos.x, thisLastPos.y), otherPos);
						colY = this.testRectCircleCollision(this.shape, other.shape,
							chao.makeVector2(thisLastPos.x, thisPos.y), otherPos);
					}
				}


				if (colX) {
					this.entity.x = this.lastPos.x;
					if (!other.isKinematic) {
						other.entity.x -= moveVecNormalized.x * thisPosDiff.x;
					}
				}

				if (colY) {
					this.entity.y = this.lastPos.y;
					if (!other.isKinematic) {
						other.entity.y -= moveVecNormalized.y * thisPosDiff.y;
					}
				}

				if (colX || colY) {
					this.fireCollisionSignal(other);
					other.fireCollisionSignal(this);
				}
			}

			this.lastPos.set(entity.x, entity.y);
		}

	};

	this.draw = function() {
		if (ComponentCollider.drawColliders) {
			var color = chao.makeColor(200, 50, 50);
			var pos = this.shape.getPosition(this.entity.screenX, this.entity.screenY);

			if (this.shape.name == "rect") {
				chao.drawRectFill(chao.canvas,
					pos.x - this.shape.width / 2,
					pos.y - this.shape.height / 2,
					this.shape.width, this.shape.height, color)
			} else {
				chao.drawCircleFill(chao.canvas, pos.x, pos.y,
					this.shape.radius, color);
			}
		}
	};

	this.fireCollisionSignal = function(withWhat) {
		this.onCollide.fire(withWhat);
	};

	this.testRectCircleCollision = function(shapeRect, shapeCircle, rectPos, circlePos) {
		// src: http://www.jeffreythompson.org/collision-detection/circle-rect.php
		var rectHalf = shapeRect.getHalfSize();
		var test = {
			x: circlePos.x,
			y: circlePos.y
		}

		if (circlePos.x < rectPos.x - rectHalf.x) {
			test.x = rectPos.x - rectHalf.x;
		} else if (circlePos.x > rectPos.x + rectHalf.x) {
			test.x = rectPos.x + rectHalf.x;
		}

		if (circlePos.y < rectPos.y - rectHalf.y) {
			test.y = rectPos.y - rectHalf.y;
		} else if (circlePos.y > rectPos.y + rectHalf.y) {
			test.y = rectPos.y + rectHalf.y;
		}

		var distVec = chao.makeVector2(circlePos.x - test.x, circlePos.y - test.y);

		return distVec.getLength() <= shapeCircle.radius;
	};

};
ComponentCollider.shapeRect = function(width, height, offsetX, offsetY) {
	this.name = "rect";
	this.width = width;
	this.height = height;
	this.offset = { x: offsetX || 0, y: offsetY || 0 };
	this.getPosition = function(entityPosX, entityPosY) {
		return chao.makeVector2(
			(entityPosX || 0) + this.offset.x,
			(entityPosY || 0) + this.offset.y
		);
	};
	this.getHalfSize = function() {
		return { x: this.width / 2, y: this.height / 2 };
	};
}
ComponentCollider.shapeCircle = function(radius, offsetX, offsetY) {
	this.name = "circle";
	this.radius = radius;
	this.offset = { x: offsetX || 0, y: offsetY || 0 };
	this.getPosition = function(entityPosX, entityPosY) {
		return chao.makeVector2(
			entityPosX + this.offset.x,
			entityPosY + this.offset.y
		);
	};
}
ComponentCollider.drawColliders = false;
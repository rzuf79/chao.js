package;

import flash.geom.Point;
import flixel.FlxG;
import flixel.FlxSprite;
import flixel.FlxState;
import flixel.FlxObject;
import flixel.text.FlxText;
import flixel.text.FlxBitmapText;
import flixel.ui.FlxButton;
import flixel.math.FlxMath;
import flixel.group.FlxGroup;
import flixel.math.FlxPoint;
import flixel.math.FlxRect;
import flixel.graphics.frames.FlxBitmapFont;

class Button extends Group{

	public  var image 					: FlxSprite;
	public 	var imagePressed 			: FlxSprite;
	public 	var text 					: FlxBitmapText;

	public 	var pressed 				: Bool;

	public 	var label 					: String;

	public 	var onPress 				: Button -> Void;
	public 	var onHold 					: Button -> Void;
	public 	var onRelease 				: Button -> Void;

	public 	var dimInactive 			: Bool;

	@:isVar public 	var width(get, set)			: Float = 0;
	@:isVar public 	var height(get, set)		: Float = 0;

	public function new(x : Float, y : Float, path : String) {

		super();

		label 				= "Button";

		image 				= new FlxSprite(0, 0, path);
		add(image);
		imagePressed 		= null;

		text 				= Reg.createText(" ", 0, 0, 0xffffff);
		text.alignment 		= FlxTextAlign.CENTER;
		text.autoSize 		= false;
		text.fieldWidth 	= Std.int(image.width);
		add(text);

		image.alpha 		= 1.0;
		pressed 			= false;

		onPress 			= null;
		onHold 				= null;
		onRelease 			= null;

		dimInactive 		= true;

		this.x = x;
		this.y = y;

		set_width(image.width);
		set_height(image.height);

	}


	public function onUpdate() {

		text.visible = visible;
		if(imagePressed != null){
			imagePressed.visible = visible;
		}

		if(!visible){
			return;
		}

		positionText();

		var mouseOver = isMouseAbove(); 
		var buttonAlpha = 1.0;

		if(mouseOver && active){

			if(FlxG.mouse.justReleased && pressed){

				pressed = false;
				buttonAlpha = 1.0;
				if(onRelease != null)
				{
					onRelease(this);
					// Sounds.playSound("plum");
				}
			}

			if(FlxG.mouse.pressed){
				buttonAlpha = 0.5;

				if(!pressed && onPress != null){
					onPress(this);
				}
				if(onHold != null)
				{
					onHold(this);
				}

				pressed = true;

			}else if (pressed){
				buttonAlpha = 1.0;
			}
		} else {
			buttonAlpha = (active || !dimInactive) ? 1.0 : 0.5;
			pressed = false;
		}

		if(imagePressed != null){
			image.visible 			= buttonAlpha > 0.5;
			imagePressed.visible 	= buttonAlpha <= 0.5;

		}else{
			image.alpha = buttonAlpha;
			text.alpha 	= buttonAlpha;
		}
		
	}


	public function isMouseAbove() : Bool{

		if(!visible){
			return false;
		}

		return FlxG.mouse.screenX > image.getScreenPosition().x && FlxG.mouse.screenX < image.getScreenPosition().x + image.width 
				&& FlxG.mouse.screenY > image.getScreenPosition().y && FlxG.mouse.screenY < image.getScreenPosition().y + image.height;
	}


	public function isAbove(x : Float, y: Float) : Bool{

		if(!visible){
			return false;
		}
		
		return x > image.getScreenPosition().x && x < image.getScreenPosition().x + image.width 
				&& y > image.getScreenPosition().y && y < image.getScreenPosition().y + image.height;
	}


	public function setImagePressed(path:String){
		if(imagePressed != null){
			remove(imagePressed);
		}

		imagePressed = new FlxSprite(0, 0, path);
		add(imagePressed);
	}

	public function setText(text:String){
		this.text.text = text;
		positionText();
	}


	public function positionText(){
		text.height = image.height;
		text.x = x;
		text.y = y + (image.height - text.height) / 2;
	}


	private function set_width(newWidth : Float) : Float{
		return width = newWidth;
	}


	private function set_height(newHeight : Float) : Float{
		return height = newHeight;
	}


	function get_width() {
	    return (width = image.width);
	}


	function get_height() {
	    return (height = image.height);
	}


}
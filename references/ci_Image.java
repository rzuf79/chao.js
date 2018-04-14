package com.turtles.cursedislands;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import com.badlogic.gdx.Gdx;
import com.badlogic.gdx.graphics.Texture;
import com.badlogic.gdx.graphics.g2d.SpriteBatch;

public class Image extends Renderable2D{
	
	protected 	Game 				game;
	
	protected 	Texture 			texture;
	
	public 		boolean				flipX;
	public 		boolean				flipY;
	
	public 		boolean 			blending; // set false for backgrounds, for faster performance
	
	private 	List<Anim> 			anims;
	private 	int 				currentAnim;
	private 	int 				currentFrame;
	private 	float 				animTimer;
	
	
	public Image(Game game, String texturePath, float x, float y){

		name 			= "Image";
		
		this.game 		= game;
		
		texture 		= new Texture(Gdx.files.internal(texturePath));
		
		this.x 			= x;
		this.y 			= y;
		
		width 			= texture.getWidth();
		height 			= texture.getHeight();
		
		alpha 			= 1.0f;
		scaleX 			= 1.0f;
		scaleY 			= 1.0f;
		
		rotation 		= 0.0f;
		
		flipX 			= false;
		flipY 			= false;
		
		visible 		= true;
		blending 		= true;
		
		anims 			= new ArrayList<Anim>();
		currentAnim 	= -1;
		currentFrame 	= 0;
		animTimer 		= 0.0f;
		
		addAnim("default", new int[] { 0 }, 0.0f, true);
		playAnim("default");

	}
	
	
	public void dispose(){
		super.dispose();
		
		texture.dispose();
	}
	
	
	@Override
	public void render(SpriteBatch batch, float x, float y, float alpha){
		
		if(!visible){
			return;
		}
		
		Anim anim = anims.get(currentAnim);
		
		if(currentFrame < anim.frames.length - 1 || anim.looped){
			animTimer += game.getTimeDelta();
		}
		if(animTimer >= anim.delay){
			animTimer -= anim.delay;
			
			currentFrame ++;
			if(currentFrame >= anim.frames.length){
				currentFrame = 0;
			}
		}
		
		if(blending){
			batch.enableBlending();
		}else{
			batch.disableBlending();
		}
		
		float drawX 	= this.x + x;
		float drawY 	= this.y + y;
		float drawAlpha = this.alpha * alpha;
		drawAlpha = drawAlpha > 1.0f ? 1.0f : drawAlpha; 
		
		batch.setColor(1.f, 1.f, 1.f, drawAlpha);
		
		batch.draw(texture, 
			drawX, drawY, width/2, height/2, 
			width, height, scaleX, scaleY, 
			rotation, 
			width*anim.frames[currentFrame], 0, 
			width, height, 
			anim.flipX || flipX, 
			anim.flipY || flipY);


		super.render(batch, x, y, alpha);
	}
	
	
	public void setTexture(String texturePath){
		texture 		= new Texture(Gdx.files.internal(texturePath));
		
		width 			= texture.getWidth();
		height 			= texture.getHeight();
	}
	
	
	public void configureAnimation(int width, int height){
		this.width 	= width;
		this.height	= height;
	}
	
	
	public void addAnim(String name, int[] frames, float delay, boolean loop){
		addAnim(name, frames,delay, loop, false, false);
	}
	
	
	public void addAnim(String name, int[] frames, float delay, boolean loop, boolean flipX, boolean flipY){
		Anim newAnim = new Anim();
		
		// delete any anim that has the same name
		for(int i = 0; i < anims.size(); ++i){
			if(Objects.equals(anims.get(i).name, name)){
				anims.remove(i);
				break;
			}
		}
		
		newAnim.name 	= name;
		newAnim.frames 	= frames;
		newAnim.delay 	= delay;
		newAnim.looped 	= loop;
		newAnim.flipX 	= flipX;
		newAnim.flipY 	= flipY;
		
		anims.add(newAnim);
	}
	
	
	public void playAnim(String name, boolean force){
		
		for(int i = 0; i < anims.size(); ++i){
			if(Objects.equals(anims.get(i).name, name)){
				if(currentAnim == i && !force){
					return;
				}

				currentAnim 	= i;
				currentFrame	= 0;
				animTimer 		= 0;
				return;
			}
		}
	
		Reg.log("This image has no anim named \"" + name + "\" :(");
	}
	
	
	public void playAnim(String name){
		playAnim(name, false);
	}
}
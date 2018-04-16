package com.turtles.cursedislands;

import java.util.ArrayList;
import java.util.List;

import com.badlogic.gdx.graphics.g2d.SpriteBatch;
import com.badlogic.gdx.math.MathUtils;

public class Renderable2D {

	public 	String 				name;

	public 	Renderable2D 		parent;
	public 	List<Renderable2D> 	children;

	public 	boolean 			visible;
	public 	boolean 			clickable;

	public 	float 				x;
	public 	float 				y;

	public 	int 				width;
	public 	int 				height;

	public 	float 				alpha;
	public 	float 				scaleX;
	public 	float 				scaleY;

	public 	float 				rotation;


	public Renderable2D() {
		name 				= "Renderable2D";
		parent 				= null;
		children 			= new ArrayList<Renderable2D>();

		clickable 			= false;
		visible 			= true;

		x 					= 0.0f;
		y 					= 0.0f;
		width 				= 0;
		height 				= 0;

		alpha 				= 1.0f;
		scaleX 				= 1.0f;
		scaleY 				= 1.0f;

	}

	
	public void dispose() {
		for (int i = 0; i < children.size(); ++i) {
			children.get(i).dispose();
		}
	}

	
	public void render(SpriteBatch batch, float x, float y, float alpha) {

		if (!visible) {
			return;
		}

		for (int i = 0; i < children.size(); ++i) {
			children.get(i).render(batch, this.x + x, this.y + y, this.alpha * alpha);
		}
	}

	
	public void update() {
		if (!visible) {
			return;
		}

		for (int i = 0; i < children.size(); ++i) {
			children.get(i).update();
		}
	}

	
	public void add(Renderable2D child) {
		children.add(child);
		child.parent = this;
	}

	
	public void remove(Renderable2D child) {
		for (int i = 0; i < children.size(); ++i) {
			if (children.get(i) == child) {
				children.remove(child);
				break;
			}
		}
	}
	

	public boolean isChild(Renderable2D child) {
		for (int i = 0; i < children.size(); ++i) {
			if (child == children.get(i)) {
				return true;
			}
		}

		return false;
	}

	
	public void moveToTop(Renderable2D child) {
		if (isChild(child)) {
			remove(child);
			add(child);
		}
	}

	
	public void alignToParent(float anchorX, float anchorY, float alignX, float alignY) {
		alignToParentHorizontally(anchorX, alignX);
		alignToParentVertically(anchorY, alignY);
	}
	
	
	public void alignToParentHorizontally(float anchorX, float alignX) {
		if (parent == null) {
			return;
		}

		x = MathUtils.ceil((parent.width * alignX) - (width * anchorX));
	}
	
	
	public void alignToParentVertically(float anchorY, float alignY) {
		if (parent == null) {
			return;
		}

		y = MathUtils.ceil((parent.height * alignY) - (height * anchorY));
	}

	
	public float getScreenX() {
		return parent != null ? x + parent.getScreenX() : x;
	}
	

	public float getScreenY() {
		return parent != null ? y + parent.getScreenY() : y;
	}

	
	public Renderable2D getFromPosition(float posX, float posY) {

		if (!visible) {
			return null;
		}

		Renderable2D child;
		for (int i = children.size() - 1; i >= 0; --i) {
			child = children.get(i).getFromPosition(posX, posY);

			if (child != null) {
				return child;
			}
		}

		float screenX = getScreenX();
		float screenY = getScreenY();

		if (clickable && posX >= screenX && posX <= screenX + width * scaleX && posY >= screenY
				&& posY <= screenY + height * scaleY) {
			return this;
		}

		return null;
	}

	
	protected void onClick() {
		//
	}
	

	protected void onHold() {
		//
	}

	
	protected void onRelease() {
		//
	}
	

	protected void onCancel() {
		//
	}
	
}
package com.daiana.br.objects;

import java.awt.Color;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.Rectangle;
import java.util.LinkedList;

import com.daiana_adventure.br.frameWork.GameObject;
import com.daiana_adventure.br.frameWork.ObjectId;
import com.daina_adbenture.br.window.Handler;

public class Player extends GameObject {
	
	private float width =40,height=90;
	private float gravity = 0.05f;
	private final float MAX_SPEED =10;
	private Handler handler;
	

	public Player(float x, float y,Handler handler, ObjectId id) {
		super(x, y, id);
		this.handler = handler;
		
	}

	@Override
	public void tick(LinkedList<GameObject> object) {
		x+=velX;
		y+=velY;
		
		if(falling || jump) {
			velY+=gravity;
			
			if(velY>MAX_SPEED) {
				velY = MAX_SPEED;
			}
			
		}
		Collision(object);
		
	}
	
	private void Collision(LinkedList<GameObject> object) {
		
		for(int i =0;i<handler.object.size();i++) {
			GameObject tempObject = handler.object.get(i);
			
			if(tempObject.getId() == ObjectId.Block) {
				
				if(getBoundsTop().intersects(tempObject.getBounds())) {
					y =tempObject.getY()+32;
					velY =0;
					
				}
				
				
				if(getBounds().intersects(tempObject.getBounds())) {
					y =tempObject.getY()-height;
					velY =0;
					falling=false;
					jump=false;
				}else 
					falling=true;
				
				if(getBoundsRight().intersects(tempObject.getBounds())) {
					x =tempObject.getX()-width;
					
					
				}
				
				if(getBoundsLeft().intersects(tempObject.getBounds())) {
					x =tempObject.getX()+35;
					
					
				}
				
			}
		}
		
	}

	@Override 
	public void render(Graphics g) {
		g.setColor(Color.blue);
		g.fillRect((int)x,(int)y,(int)width,(int)height);
		
		/*Graphics2D gd2 =(Graphics2D) g;
		gd2.setColor(Color.red);
		gd2.draw(getBounds());
		gd2.draw(getBoundsRight());
		gd2.draw(getBoundsLeft());
		gd2.draw(getBoundsTop());*/
		
		
	}

	@Override
	public Rectangle getBounds() {
		
		return new Rectangle((int) ((int)x+(width/2)-((width/2)/2)), (int) ((int)y+(height/2)), (int)width/2,(int)height/2);
	}
	
	public Rectangle getBoundsTop() {
		
		return new Rectangle((int) ((int)x+((width/2)-((width/2)/2))), (int)y, (int)width/2,(int)height/2);
	}
	
public Rectangle getBoundsRight() {
		
		return new Rectangle((int) ((int)x+width-5), (int)y+5, (int)5,(int)height-10);
	}

public Rectangle getBoundsLeft() {
	 
	return new Rectangle( (int)x,(int)y+5, (int)5, (int)height-10);
}



	
	

}

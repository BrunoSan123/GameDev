package com.daiana.br.objects;

import java.awt.Color;
import java.awt.Graphics;
import java.awt.Rectangle;
import java.util.LinkedList;

import com.daiana_adventure.br.frameWork.GameObject;
import com.daiana_adventure.br.frameWork.ObjectId;

public class Block extends GameObject {

	public Block(float x, float y, ObjectId id) {
		super(x, y, id);
		
	}

	@Override
	public void tick(LinkedList<GameObject> object) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void render(Graphics g) {
		g.setColor(Color.white);
		g.drawRect((int)x,(int)y,32,32);
		
		
	}

	public Rectangle getBounds() {
		return new Rectangle((int)x,(int)y,32,32);
	}
	@Override
	public float getX() {
		return x;
	}

	@Override
	public float getY() {
		
		return y;
	}

	@Override
	public void setX(float x) {
		this.velX =x;
		
	}

	@Override
	public void setY(float y) {
		this.y =y;
		
	}

	@Override
	public float getVelX() {
		
		return velX;
	}

	@Override
	public float getVelY() {
		
		return velY;
	}

	@Override
	public void setVelX(float velX) {
		this.velX =velX;
		
	}

	@Override
	public void setVelY(float velY) {
		this.velY =velY;
		
	}

	@Override
	public ObjectId getId() {
		// TODO Auto-generated method stub
		return id;
	}
	

}

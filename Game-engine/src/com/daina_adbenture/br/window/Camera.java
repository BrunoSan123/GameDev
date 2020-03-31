package com.daina_adbenture.br.window;

import com.daiana_adventure.br.frameWork.GameObject;

public class Camera {
	
	private float x,y;
	
	public Camera(float x, float y) {
		
		this.x= x;
		this.y =y;
	}
	
	public void tick(GameObject Player) {
		x = -Player.getX()+Jogo.WIDTH/2;
		
	}
	
	public void setX(float x) {
		this.x =x;
	}
	
	public void setY(float y) {
		this.y = y;
	}
	
	public float getX() {
		return x;
	}
	
	public float getY() {
		return y;
	}

}

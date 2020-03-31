package com.daina_adbenture.br.window;

import java.awt.Dimension;

import javax.swing.JFrame;

public class Janela {
	
	
	public Janela(int w,int h,String titulo, Jogo jogo) {
		
		jogo.setPreferredSize(new Dimension(w,h));
		jogo.setMaximumSize(new Dimension(w,h));
		jogo.setMinimumSize(new Dimension(w,h));
		
		JFrame frame = new JFrame(titulo);
		frame.add(jogo);
		frame.pack();
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frame.setResizable(false);
		frame.setLocationRelativeTo(null);
		frame.setVisible(true);
		
		jogo.start();
	}

}

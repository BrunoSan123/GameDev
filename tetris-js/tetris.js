// Gerador de  objetos

// criar pixels para o obejto

function criaPixel(nome)
{
	var pixel1 = document.createElement('DIV');
	pixel1.setAttribute('id', nome);
	pixel1.className='pixel';
	pixel1.setAttribute('class', 'pixel');
	document.getElementById("conteudo").appendChild(pixel1);
	document.getElementById(nome).style.top = '0px';
	document.getElementById(nome).style.left = '100px';
	document.getElementById(nome).style.backgroundColor =corPixel;

}

// move 20px para baqixo

function movePixelBaixo(pixel)
{
	document.getElementById(pixel).style.top = parseInt(document.getElementById(pixel).style.top)+20;

}

//move 20px para frente

function movePixelFrente(pixel)
{
	document.getElementById(pixel).style.left = parseInt(document.getElementById(pixel).style.left)+20;

}

// move 20px para traz

function movePixelAtraz(pixel)
{
	document.getElementById(pixel).style.left = parseInt(document.getElementById(pixel).style.left)-20;

}

// move 20px para cima

function movePixelCima(pixel)
{
	document.getElementById(pixel).style.top = parseInt(document.getElementById(pixel).style.top)-20;

}

// Variaveis de objetos

quantPixel = 0; //total de pixels inseridos
corPixel = "red";
temp1 = new Array(1);
temp2 = new Array(1); //matrizes para  criar objetos e  guardar temporariamente os nomes
temp3 = new Array(1);
temp4 = new Array(1);

tipoObj ="";  //Guarda o tipo do objeto{i.o.s.z.t.l}
movimento=1; // Guarda posição e  giro atual

// criar objeto 0

function criaO()
{

	quantPixel++;
	
  tipoObj = "O";
	temp1[0] = "p" + quantPixel;
	temp1[1] = criaPixel(temp1[0]);
	document.getElementById(temp1[0]).style.top ="0px";
	document.getElementById(temp1[0]).style.left = "80px";

	quantPixel++;
	temp2[0] = "p" + quantPixel;
	temp2[1] = criaPixel(temp2[0]);
	document.getElementById(temp2[0]).style.top ="0px";
	document.getElementById(temp2[0]).style.left = "100px";

	quantPixel++;
	temp3[0] = "p" + quantPixel;
	temp3[1] = criaPixel(temp3[0]);
	document.getElementById(temp3[0]).style.top ="20px";
	document.getElementById(temp3[0]).style.left = "80px";

	quantPixel++;
	temp4[0] = "p" + quantPixel;
	temp4[1] = criaPixel(temp4[0]);
	document.getElementById(temp4[0]).style.top ="20px";
	document.getElementById(temp4[0]).style.left = "100px";
}

// cria objeto s

function criaS()
{
   quantPixel++;
   tipoObj = "S";
   temp1[0] = "p" + quantPixel;
   temp1[1] = criaPixel(temp1[0]);
   document.getElementById(temp1[0]).style.top ="0px";
   document.getElementById(temp1[0]).style.left = "100px";

   quantPixel++;
   temp2[0] = "p" + quantPixel;
   temp2[1] = criaPixel(temp2[0]);
   document.getElementById(temp2[0]).style.top ="20px";
   document.getElementById(temp2[0]).style.left = "120px";

   quantPixel++;
   temp3[0] = "p" + quantPixel;
   temp3[1] = criaPixel(temp3[0]);
   document.getElementById(temp3[0]).style.top ="20px";
   document.getElementById(temp3[0]).style.left = "100px";

   quantPixel++
   temp4[0] = "p" + quantPixel;
   temp4[1] = criaPixel(temp4[0]);
   document.getElementById(temp4[0]).style.top ="20px";
   document.getElementById(temp4[0]).style.left = "80px";


}

// cria objeto z

function criaZ()
{

quantPixel++;
   tipoObj = "Z";
   temp1[0] = "p" + quantPixel;
   temp1[1] = criaPixel(temp1[0]);
   document.getElementById(temp1[0]).style.top ="0px";
   document.getElementById(temp1[0]).style.left = "80px";

   quantPixel++;
   temp2[0] = "p" + quantPixel;
   temp2[1] = criaPixel(temp2[0]);
   document.getElementById(temp2[0]).style.top ="20px";
   document.getElementById(temp2[0]).style.left = "100px";

   quantPixel++;
   temp3[0] = "p" + quantPixel;
   temp3[1] = criaPixel(temp3[0]);
   document.getElementById(temp3[0]).style.top ="20px";
   document.getElementById(temp3[0]).style.left = "100px";

   quantPixel++
   temp4[0] = "p" + quantPixel;
   temp4[1] = criaPixel(temp4[0]);
   document.getElementById(temp4[0]).style.top ="20px";
   document.getElementById(temp4[0]).style.left = "120px";

   }
   //cria I

   function criaI()
   {
   		quantPixel++;
   tipoObj = "I";
   temp1[0] = "p" + quantPixel;
   temp1[1] = criaPixel(temp1[0]);
   document.getElementById(temp1[0]).style.top ="0px";
   document.getElementById(temp1[0]).style.left = "100px";

   quantPixel++;
   temp2[0] = "p" + quantPixel;
   temp2[1] = criaPixel(temp2[0]);
   document.getElementById(temp2[0]).style.top ="20px";
   document.getElementById(temp2[0]).style.left = "100px";

   quantPixel++;
   temp3[0] = "p" + quantPixel;
   temp3[1] = criaPixel(temp3[0]);
   document.getElementById(temp3[0]).style.top ="40px";
   document.getElementById(temp3[0]).style.left = "100px";

   quantPixel++
   temp4[0] = "p" + quantPixel;
   temp4[1] = criaPixel(temp4[0]);
   document.getElementById(temp4[0]).style.top ="60px";
   document.getElementById(temp4[0]).style.left = "80px";
   }

   function criaT()
   {
   		quantPixel++;
   tipoObj = "T";
   temp1[0] = "p" + quantPixel;
   temp1[1] = criaPixel(temp1[0]);
   document.getElementById(temp1[0]).style.top ="0px";
   document.getElementById(temp1[0]).style.left = "100px";

   quantPixel++;
   temp2[0] = "p" + quantPixel;
   temp2[1] = criaPixel(temp2[0]);
   document.getElementById(temp2[0]).style.top ="20px";
   document.getElementById(temp2[0]).style.left = "80px";

   quantPixel++;
   temp3[0] = "p" + quantPixel;
   temp3[1] = criaPixel(temp3[0]);
   document.getElementById(temp3[0]).style.top ="20px";
   document.getElementById(temp3[0]).style.left = "100px";

   quantPixel++
   temp4[0] = "p" + quantPixel;
   temp4[1] = criaPixel(temp4[0]);
   document.getElementById(temp4[0]).style.top ="20px";
   document.getElementById(temp4[0]).style.left = "120px";
   }

   //CRIA OBJETO L

   function criaL()
   {

      quantPixel++;
   tipoObj = "L";
   temp1[0] = "p" + quantPixel;
   temp1[1] = criaPixel(temp1[0]);
   document.getElementById(temp1[0]).style.top ="0px";
   document.getElementById(temp1[0]).style.left = "100px";

   quantPixel++;
   temp2[0] = "p" + quantPixel;
   temp2[1] = criaPixel(temp2[0]);
   document.getElementById(temp2[0]).style.top ="20px";
   document.getElementById(temp2[0]).style.left = "100px";

   quantPixel++;
   temp3[0] = "p" + quantPixel;
   temp3[1] = criaPixel(temp3[0]);
   document.getElementById(temp3[0]).style.top ="40px";
   document.getElementById(temp3[0]).style.left = "100px";

   quantPixel++
   temp4[0] = "p" + quantPixel;
   temp4[1] = criaPixel(temp4[0]);
   document.getElementById(temp4[0]).style.top ="40px";
   document.getElementById(temp4[0]).style.left = "120px";
   }

   // desce o objeto atual 20px

   function descObj()
   {
 		movePixelBaixo(temp1[0]);
 		movePixelBaixo(temp2[0]);
 		movePixelBaixo(temp3[0]);
 		movePixelBaixo(temp4[0]);

   }

   //move para frente

   function moveFrenteObj()
   {
 		movePixelFrente(temp1[0]);
 		movePixelFrente(temp2[0]);
 		movePixelFrente(temp3[0]);
 		movePixelFrente(temp4[0]);

   }

   //move para traz

   function moveTrazObj()
   {
 		movePixelAtraz(temp1[0]);
 		movePixelAtraz(temp2[0]);
 		movePixelAtraz(temp3[0]);
 		movePixelAtraz(temp4[0]);

   }


   // GNA gerador de números aleatórios//////////////

   function geraObjRandom()
   {

 		var num1 = parseInt(Math.random() * 6);

 		switch (num1)
 		{

 				case 0:
 					criaI();
 				 	break;
 				case 1:
 					criaL();
 					break;
 				case 2:
 					criaO();
 					break;
 				case 3:
 					criaS();
 					break;
 				case 4:
 					criaT();
 					break;
 				case 5:
 					criaZ();
            }

   }

   // detector de colisões

   // verifica colisão de giro

  function verificaColPixel(nomePixel, tamanho, tipoMov)
  {

  	var px = 0;
  	var py = 0;
  	var XAlt = parseInt(document.getElementById(nomePixel).style.left);
  	var YAlt = parseInt(document.getElementById(nomePixel).style.top);

  	switch (tipoMov)
  	{

       case "frente":
       		XAlt += tamanho;
       		break;
       case "atraz":
       		XAlt -= tamanho;
       case "baixo":
       		YAlt += tamanho;
       case "cima":
       		YAlt -= tamanho;
      }

      if((XAlt<0) || (XAlt > 180) || (YAlt<0) || (YAlt > 380)) return true;
      for(b=1;b<(quantPixel-3);b++)
      {

      		px = parseInt(document.getElementById("p"+b).style.left);
      		py = parseInt(document.getElementById("p"+b).style.top);

      		if((px == XAlt) && (py == YAlt)) return true;

      }

  }

  // Gira o objeto I atual

  function giraI()
  {
  		switch(movimento)
  		{

  			case 1:
  				if(verificaColPixel(temp2[0],20,"cima"))
  					break;
  			    else if(verificaColPixel(temp2[0],20,"atraz"))
  			    	break;
  			    else if(verificaColPixel(temp3[0],40,"cima"))
  			    	break;
  			    else if(verificaColPixel(temp3[0],20,"frente"))
  			    	break;
  			    else if(verificaColPixel(temp4[0],60,"cima"))
  			    	break;
  			    else if(verificaColPixel(temp4[0],40,"frente"))
  			    	break;

  			    else
  			    {


  			    	movePixelCima(temp2[0]); // pixel 2
  			    	movePixelAtraz(temp2[0]);
  			    	movePixelCima(temp3[0]); //pixel 3
  			    	movePixelCima(temp3[0]);
  			    	movePixelFrente(temp3[0]);
  			    	movePixelCima(temp4[0]);  //pixel 4
  			    	movePixelCima(temp4[0]);
  			    	movePixelCima(temp4[0]);
  			    	movePixelFrente(temp4[0]);
  			    	movePixelFrente(temp4[0]);
  			    	movimento = 2;
  			    	break;
  			    }
  		    case 2:
  		    {
  		    		if(verificaColPixel(temp2[0],20,"baixo"))
  					break;
  			    else if(verificaColPixel(temp2[0],20,"frente"))
  			    	break;
  			    else if(verificaColPixel(temp3[0],40,"baixo"))
  			    	break;
  			    else if(verificaColPixel(temp3[0],20,"atraz"))
  			    	break;
  			    else if(verificaColPixel(temp4[0],60,"baixo"))
  			    	break;
  			    else if(verificaColPixel(temp4[0],40,"atraz"))
  			    	break;

  			    else
  			    {


  			    	movePixelBaixo(temp2[0]); // pixel 2
  			    	movePixelFrente(temp2[0]);
  			    	movePixelBaixo(temp3[0]); //pixel 3
  			    	movePixelBaixo(temp3[0]);
  			    	movePixelAtraz(temp3[0]);
  			    	movePixelBaixo(temp4[0]);  //pixel 4
  			    	movePixelBaixo(temp4[0]);
  			    	movePixelBaixo(temp4[0]);
  			    	movePixelAtraz(temp4[0]);
  			    	movePixelAtraz(temp4[0]);
  			    	movimento = 1;
  			    	break;


  		    }

  		}

  }
}

  function giraL()
  {
  		switch(movimento)
  		{

  			case 1:
  				if(verificaColPixel(temp1[0],40,"baixo"))
  					break;
  			    else if(verificaColPixel(temp1[0],20,"atraz"))
  			    	break;
  			    else if(verificaColPixel(temp2[0],20,"frente"))
  			    	break;
  			    else
  			    {


  			    	movePixelBaixo(temp1[0]);
  			    	movePixelBaixo(temp1[0]);
  			    	movePixelAtraz(temp1[0]);
  			    	movePixelFrente(temp2[0]);
  			    	movimento = 2;
  			    	break;
  			    }
  		    case 2:
  		    
  		    		if(verificaColPixel(temp3[0],20,"frente"))
  					break;
  			    else if(verificaColPixel(temp3[0],40,"cima"))
  			    	break;
  			    else if(verificaColPixel(temp1[0],20,"frente"))
  			    	break;
  			    else if(verificaColPixel(temp1[0],40,"cima"))
  			    	break;
  			    
  			    else
  			    {


  			    	movePixelFrente(temp2[0]); 
  			    	movePixelCima(temp2[0]);
  			    	movePixelCima(temp3[0]); 
  			    	movePixelFrente(temp3[0]);
  			    	movePixelCima(temp3[0]);
  			    	movePixelCima(temp4[0]);  
  			    	movimento = 3;
  			    	break;
              }
      
  	    case 3:
  		    	if(verificaColPixel(temp1[0],20,"atraz"))
  		    		break;
  		    	else if(verificaColPixel(temp1[0],40, "baixo"))
  		    		break;
  		    	else if(verificaColPixel(temp3[0],40, "atraz"))
  		    		break;
  		    	else if(verificaColPixel(temp3[0],20, "baixo"))
  		    		break;
  		    	else if(verificaColPixel(temp4[0],20, "cima"))
  		    		break;
  		    	else if(verificaColPixel(temp4[0],20, "atraz"))
  		    		break;
  		    	else
  		    	{
  		    		movePixelAtraz(temp1[0]);
  		    		movePixelBaixo(temp1[0]);
  		    		movePixelBaixo(temp1[0]);
  		    		movePixelAtraz(temp3[0]);
  		    		movePixelAtraz(temp3[0]);
  		    		movePixelBaixo(temp3[0]);
  		    		movePixelCima(temp4[0]);
  		    		movePixelAtraz(temp4[0]);
  		    		movimento = 4;
  		    		break;
  		    	}

  		    	case 4:
  		    		if(verificaColPixel(temp1[0], 40, "cima"))
  		    			break;
  		    		else if(verificaColPixel(temp1[0],20, "frente"))
  		    		break;
  		    	else if(verificaColPixel(temp2[0],20, "atraz"))
  		    		break;
  		    	else if(verificaColPixel(temp3[0],20, "frente"))
  		    		break;
  		    	else if(verificaColPixel(temp3[0],20, "baixo"))
  		    		break;
  		    	else if(verificaColPixel(temp4[0],20, "frente"))
  		    		break;
  		    	else if(verificaColPixel(temp4[0],20, "baixo"))
  		    		break;
  		    	else
  		    	{

  		    		movePixelCima(temp1[0]);
  		    		movePixelCima(temp1[0]);
  		    		movePixelFrente(temp1[0]);
  		    		movePixelAtraz(temp2[0]);
  		    		movePixelFrente(temp3[0]);
  		    		movePixelBaixo(temp3[0]);
  		    		movePixelFrente(temp4[0]);
  		    		movePixelBaixo(temp4[0]);
  		    		movimento = 1;
  		    		break;
  		    	}


  		}

  }

//Gira s

function giraS()
{
  switch (movimento)
  {
      case 1:
          if(verificaColPixel(temp3[0],20,"frente"))
            break;
          else if(verificaColPixel(temp4[0], 40,"cima"))
            break;
          else if(verificaColPixel(temp4[0], 20, "frente"))
            break;
          else
          {
            movePixelFrente(temp3[0]);
            movePixelCima(temp4[0]);
            movePixelCima(temp4[0]);
            movePixelFrente(temp4[0]);
            movimento = 2;
            break;
          }
      case 2:
      
          if(verificaColPixel(temp3[0],20,"atraz"))
            break;
          else if(verificaColPixel(temp4[0], 40,"baixo"))
            break;
          else if(verificaColPixel(temp4[0], 20, "atraz"))
            break;
          else
          {
            movePixelAtraz(temp3[0]);
            movePixelBaixo(temp4[0]);
            movePixelBaixo(temp[0]);
            movePixelAtraz(temp4[0]);
            movimento = 1;
          }
      
  }

}

// gira z atual

function giraZ()
{
  switch(movimento)
  {
    case 1:
        if(verificaColPixel(temp1[0],40,"atraz"))
          break;
        else if(verificaColPixel(temp4[0],40,"cima"));
        
        else
          {
            movePixelFrente(temp1[0]);
            movePixelFrente(temp1[0]);
            movePixelCima(temp4[0]);
            movePixelCima(temp4[0]);
            break;
          }
      case 2:
          if(verificaColPixel(temp1[0],40,"atraz"))
            break;
          else if(verificaColPixel(temp1[0],40,"baixo"));
          else
          {
            movePixelAtraz(temp1[0]);
            movePixelAtraz(temp1[0]);
            movePixelBaixo(temp4[0]);
            movePixelBaixo(temp4[0]);
            movimento = 1;
          }

          
  }
}

//Gira obejeto T
function giraT()
{
  switch(movimento)
  {
    case 1:
        if(verificaColPixel(temp4[0],20,"atraz"))
          break;
        else if(verificaColPixel(temp4[0],20,"baixo"))
          break;
        else
        {
          movePixelFrente(temp1[0]);
          movePixelBaixo(temp1[0]);
          movimento =2;
          break;
        }
    case 2:
        if(verificaColPixel(temp1[0],20,"frente"))
          break;
        else if(verificaColPixel(temp1[0], 20,"baixo"))
          break;
        else
        {
          movePixelFrente(temp1[0]);
          movePixelBaixo(temp1[0]);
          movimento = 3;
          break;
        }
    case 3:
        if(verificaColPixel(temp2[0],20,"cima"))
          break;
        else if(verificaColPixel(temp2[0],20,"frente"))
          break;
        else
        {
          movePixelCima(temp2[0]);
          movePixelFrente(temp2[0]);
          movimento = 4;
          break;
        }
    case 4:
        if(verificaColPixel(temp1[0],20,"cima"))
          break;
        else if(verificaColPixel(temp1[0],20,"atraz"))
          break;
        else if(verificaColPixel(temp2[0],20,"baixo"))
          break;
        else if(verificaColPixel(temp2[0],20,"atraz"))
          break;
        else if(verificaColPixel(temp4[0,20,"cima"]))
          break;
        else if(verificaColPixel(temp4[0],20,"frente"))
          break;
        else
        {
          movePixelCima(temp1[0]);
          movePixelAtraz(temp1[0]);
          movePixelBaixo(temp2[0]);
          movePixelAtraz(temp2[0]);
          movePixelCima(temp4[0]);
          movePixelCima(temp4[0]);
          movimento = 1;
          break;
        }
  
  } 

}

//Girador  do objeto atual
function giraObj()
{
  switch(tipoObj)
  {
    case "I":
      giraI();
    break;
    case "S":
      giraS();
      break;
    case "Z":
      giraZ();
      break;
    case "T":
      giraT();
      break;
    case "L":
      giraL();
      break;

  }
}

//variaveis para captura de  posição atual do objeto
poy = new Array(4);
pox = new Array(4);
for(b=1;b<=4;b++)
{
  poy[b] =0;
  pox[b] =0;
}

// captura de posição do objeto aual
function captaPosObj()
{

  pox[1] =parseInt(document.getElementById(temp1[0]).style.left);
  pox[2] =parseInt(document.getElementById(temp2[0]).style.left);
  pox[3] =parseInt(document.getElementById(temp3[0]).style.left);
  pox[4] =parseInt(document.getElementById(temp4[0]).style.left);

  poy[1] =parseInt(document.getElementById(temp1[0]).style.top);
  poy[2] =parseInt(document.getElementById(temp2[0]).style.top);
  poy[3] =parseInt(document.getElementById(temp3[0]).style.top);
  poy[4] =parseInt(document.getElementById(temp4[0]).style.top);


}

//verifica colisão do objeto com pixels abaixo
function verificaColBaixo()
{

  var px =0;
  var py =0;
  captaPosObj();
  for(c=1;c<=4;c++)
  {
    if(poy[c] = 380) return true;
  }
  for(b=1;b<(quantPixel-3);b++)
  {
    px = parseInt(document.getElementById("p"-b).style.left);
    py = parseInt(document.getElementById("p"-b).style.top);
    for(c=1;c<=4;c++)
    {
      if((pox[c]==px) && ((poy[c]+20)==py)) return true;
    }
  }
}

//verifica colisão do objeto com pixels a frente
function verificaColFrente()
{
  px=0;
  py=0;

  captaPosObj();
  for(c=1;c<=4;c++)
  {
    if(pox[c] == 180) return true;
  }
  for(c=1;c<(quantPixel-3);c++)
  {
    px = parseInt(document.getElementById("p"+c).style.left);
    py = parseInt(document.getElementById("p"+c).style.top);
    for(b=1;c<=4;b++)
    {
      if((poy[b] == py) && ((pox[b]+20)==px)) return true;
    }
  }
}

// vefica colisão pixels atraz
function verificaColAtraz()
{
  px=0;
  py=0;
  captaPosObj();
  for(c=1;c<=4;c++)
  {
    if(pox[c] ==0) return true;
  }
  for(c=1;c<(quantPixel-3);c++)
  {
    px=parseInt(document.getElementById("p"+c).style.left);
    py=parseInt(document.getElementById("p"+c).style.top);
    for(b=1;b<=4;b++)
    {
      if((poy[b] == py) && ((pox[b]-20) == px)) return true;
    }
  }
}

//limita e detecta colisões em eixo x
function limitMoveFrente()
{
  if(!verificaColFrente())
    moveFrenteObj();
}

function limitMoveAtraz()
{
  if(!verificaColAtraz())
    moveTrazObj();
}

// detector de linhas completas

// desce alguns pixels
function descePixels(posit)
{
 var px =0;
 var py =0;

 document.getElementById("score").innerHTML = parseInt(getElementById("score").innerHTML)+ 100;
 switch(parseInt(document.getElementById("score").innerHTML))
 {

    case 500:
        corPixel ="#000FF00";
        break;
    case 1000:
        corPixel = "#0000FF";
        break;
    case 1500:
        corPixel = "#FFFF00";
      case 2000:
          break;
          corPixel="#00FFF";
          break;
    case 2500:
        corPixel="#FF00FF";
        break;
    case 3000:
        corPixel="#C0C0C0";
          break;
    case 3500:
        corPixel="#FFFFFF";
          break;
    case 4000:
        alert("VOCE GANHOU!!!!!!!!");
        window.location.reload();
        break;
    }
    for(c=1;c<(quantPixel-3);c++)
    {
      px=parseInt(document.getElementById("p"+c).style.left);
      py=parseInt(document.getElementById("p"+c).style.top);

      if(py == posit)
      {
        document.getElementById("p"+c).style.top="400px";
        document.getElementById("p"+c).style.display="none";
      }
      if(py<posit) movePixelBaixo("p"+c);
    }

}

// detecta linha completa

function buscaLinhas()
{
  var totalX=0;
  for(f=380;f>0;f-=20)
  {
    totalX = 0;
    for(c=1;c<(quantPixel-3);c++)
    {
      py=parseInt(document.getElementById("p"+c).style.top);
      if(py==0) window.location.reload();
      if(py==f)totalX++
    }
    if(totalX == 10) descePixels(f);
  }
}


// função final

function play()
{
  buscaLinhas();
  if(!verificaColBaixo())
  {
    descObj();
  }
  else
  {
    if(downVar) clearInterval(timer2);
    downVar = false;
    movimento = 1;
    geraObjRandom();
  }
}

//controle pelo teclado

downVar=false;
function verificaTeclaPre(e)
{
  var codTecla;
  if(window.event)
    codTecla=window.event.keyCode;
  else
    if(e)
      codTecla=e.which;

    //verifica tecla
    switch(codTecla)
    {
      case 39:
          limitMoveFrente();
          break;
      case 37:
          limitMoveAtraz();
          break;
      case 38:
          giraObj();
          break;
      case 40:
          timer2=setInterval("play()",10);
          downVar=true;
    }
}

function verificaTeclaPre2(e)
{
  var codTecla;
  if(window.event)
    codTecla=window.event.keyCode;
  else
    if(e)
      codTecla=e.which;

    //verifica tecla

    switch(codTecla)
    {
      case 40:
          clearInterval(timer2)
          downVar=true;

    }
}


//carrega os eventos no botão

function redimen()
{
  tamanhoWin=document.body.clientWidth;
  tamanhoDisplay = document.getElementById("conteudo").clientWidth;
  tamanhobtPlay = document.getElementById("btPlay").clientWidth;
  document.getElementById("conteudo").style.left=parseInt(tamanhoWin/2)-parseInt(tamanhoDisplay/2);
  document.getElementById("pontos").style.left=parseInt(tamanhoWin/2)+parseInt(tamanhoDisplay/2)+10;
  document.getElementById("btPlay").style.left = parseInt(tamanhoWin/2)-parseInt(tamanhobtPlay/2)

}

function carrega()
{
  document.getElementById("btPlay").onclick = function()
  {
    geraObjRandom();
    timer1=setInterval("play()",1000);
    document.getElementById("btPlay").style.display="none";
    document.onkeydown=verificaTeclaPre;
    document.onkeyup=verificaTeclaPre2;
  }
  redimen();
}
window.onload=carrega;
window.onresize=redimen;



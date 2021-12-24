
var X=1440,
Y = 827,
Ycarro = Y/4+30 +128,
Xcarro = Y/2,
cond_policia=0,
Xcarro_inimigo=-240,
cond_rua =0,
grama_velo=0,
velocidade_carro,
tempo_velo=0,
tela=2,
rampa_random=0,
carro_tamanho=0,
barril_random=0,
y_barril_random=0,
y_barril=0,
random_bush=0,
y_bush=0,
y_bu=0,
random_house=0,
random_barraca=0,
tela_jogo = 1,
mis = 1,
y_bu_ = 0,
x_bu = 0,
x_velo_mis= 1440,
y_velo_mis=  300,
rota_velo_mis=0,
X_velo_car = -29,
cond_rotate=1;

function preload() {
  rua_reta_spite = loadImage('https://i.imgur.com/GsRf3o6.png');
  rua_curva = loadImage('https://i.imgur.com/dsTXaAR.png');
  pause = loadImage('https://i.imgur.com/pLDXhyw.png');
  rock = loadImage('https://i.imgur.com/FOk1YPh.png');
  carro1 = loadImage('https://i.imgur.com/ZXaTU19.png');
  carro2 = loadImage('https://i.imgur.com/2pUpl0a.png');
  grass_tile = loadImage('https://i.imgur.com/T9w4Ehl.png');
  play = loadImage('https://i.imgur.com/7i1ckst.png');
  rampa = loadImage('https://i.imgur.com/ecSk0iu.png');
  baril_img = loadImage('https://i.imgur.com/sHtuMYF.png');
  bush_img = loadImage('https://i.imgur.com/J8WtaV0.png');
  house_img = loadImage('https://i.imgur.com/VIZlffG.png');
  barraca_img = loadImage('https://i.imgur.com/n3yVxOq.png');
  queima_de_peneu_img = loadImage('https://i.imgur.com/6hlaOim.png');
  rua_em_apri = loadImage('https://i.imgur.com/xq3uFsA.png');
  start_img = loadImage('https://i.imgur.com/dFhdcWu.png');
  grass_img = loadImage('https://i.imgur.com/T9w4Ehl.png');
  rua_1_90 = loadImage('https://i.imgur.com/tew9eFa.png');
  rua_2_90 = loadImage('https://i.imgur.com/b78qPoQ.png');
  fim = loadImage('https://i.imgur.com/lTeVW96.png');
  window1 = loadImage('https://i.imgur.com/5nMoyKT.png');
}
function setup() {
  createCanvas(X,Y);
  velocidade_carro = 2;
}
function draw() {
if(tela === 1){
  image(play,X/2-150,Y/2-100,250,100)
}
if(tela===2){  
  switch (tela_jogo) {
    case 1: //misoes
      switch(mis){
        case 1:
          missao1()
        break
      }
    break;
    case 2: //mundo aberto
        grama(cond_rua,velocidade_carro);
        rua_reta(Y/4,cond_rua,velocidade_carro)
        if (cond_policia > 2){
          if(Xcarro_inimigo > Xcarro && Xcarro_inimigo < Xcarro+400){
            Xcarro_inimigo+=2.5;
          }else{
            Xcarro_inimigo+=4;
          }
          if(Xcarro_inimigo > 1439){
            cond_policia = 0
            Xcarro_inimigo = -240;
          }
        }
        if (key === 'w'||key === 'W'){if (keyIsPressed === true){cond_rua =1}}
    
        if (key === 's'||key === 'S'){
          if (keyIsPressed === true){
            Xcarro -=2;
          }
        }
        if (key === 'e'||key === 'E' ){
          if (keyIsPressed === true){
            cond_rua =0 
          }
        }
        if(Xcarro > 1394){
          Xcarro = 1395;
        }
        if(Xcarro < -10){
          Xcarro = -10;
        }
        if(Ycarro > 780){
          Ycarro = 780;
        }
        if(Ycarro < -10){
          Ycarro = -10;
        }
        if(cond_rua === 1){
          tempo_velo++;
          if  (velocidade_carro < 14){
            if(tempo_velo > 100){
              velocidade_carro = velocidade_carro+2;
              tempo_velo=0;
            }
          }
        }
        if(rampa_random === 9){
          //gatilho_rampa(velocidade_carro,400,cond_rua);//max350 min250
        }
        if(barril_random === 8){
          baril(velocidade_carro,y_barril_random,cond_rua,50)
        }
        if (random_bush === 4){
          if (y_bush === 2){
            y_bu = 500
          }
          if (y_bush === 1){
            y_bu = 200
          }
          bush(velocidade_carro,y_bu,cond_rua,60)
        }
        if (random_house === 2){
          house(cond_rua,velocidade_carro,350)
        }
        if (random_barraca === 4){
          barraca(cond_rua,velocidade_carro,120)
        }
        carro(Xcarro,Ycarro,carro_tamanho);
        //carro_inimigo(Xcarro_inimigo,250);
        break;
}}}


var rua_reta_1 =0,rua_reta_2=300,rua_reta_3=600,rua_reta_4=900,rua_reta_5=1200,rua_reta_6=1500;
function rua_reta(y,cond,velocidade){
  if (cond === 1){
    rua_reta_1-=velocidade
    rua_reta_2-=velocidade
    rua_reta_3-=velocidade
    rua_reta_4-=velocidade
    rua_reta_5-=velocidade
    rua_reta_6-=velocidade
  }

  if(rua_reta_1 <= -300){
    rua_reta_1 =1440;
    random_bush = Math.floor(Math.random() * (5 - 1)) + 1;
    y_bush = Math.floor(Math.random() * (3 - 1)) + 1;
  }
  if(rua_reta_2 <= -300){
    rua_reta_2 =1440;
    random_barraca = Math.floor(Math.random() * (7 - 1)) + 1;
  }
  if(rua_reta_3 <= -300){
    rua_reta_3 =1440;
  }
  if(rua_reta_4 <= -300){
    rua_reta_4 =1440;
    random_house = Math.floor(Math.random() * (3 - 1)) + 1;
  }
  if(rua_reta_5 <= -300){
    rua_reta_5 =1440;
  }
  if(rua_reta_6 <= -300){
    rua_reta_6 =1440;
    cond_policia = cond_policia + 1;
    rampa_random = Math.floor(Math.random() * (10 - 1)) + 1;
    barril_random = Math.floor(Math.random() * (10 - 1)) + 1;
    y_barril_random = Math.floor(Math.random() * (350 - 250)) + 250;
  }
  image(rua_reta_spite,rua_reta_1,y,300,320)
  image(rua_reta_spite,rua_reta_2,y,300,320)
  image(rua_reta_spite,rua_reta_3,y,300,320)
  image(rua_reta_spite,rua_reta_4,y,300,320)
  image(rua_reta_spite,rua_reta_5,y,300,320)
  image(rua_reta_spite,rua_reta_6,y,300,320)
}
function carro(x,y,grandeza){
  image(carro1,x, y, 235+grandeza,110+grandeza);
}
function GameUI(){
  image(pause,10,10,55,55)
}
function carro_inimigo(x,y){
  image(carro2,x,y,240,120)
}
var x_1 = 0,x_2 = 250,x_3 = 500,x_4 = 750,x_5 = 1000,x_6 = 1250,x_7 = 1500;
function grama(cond,velo){
  if(cond===1){
    x_1-=velo;
    x_2-=velo;
    x_3-=velo;
    x_4-=velo;
    x_5-=velo;
    x_6-=velo;
    x_7-=velo;
  }
  if(x_1 < -251){
    x_1= 1440;
  }
  if(x_2 < -251){
    x_2= 1438;
  }
  if(x_3 < -251){
    x_3= 1436;
  }
  if(x_4 < -251){
    x_4= 1439;
  }
  if(x_5 < -251){
    x_5= 1437;
  }
  if(x_6 < -251){
    x_6= 1435;
  }
  if(x_7 < -251){
    x_7= 1437;
  }
  //auto
  image(grass_tile,x_1,0,250,250)
  image(grass_tile,x_2,0,250,250)
  image(grass_tile,x_3,0,250,250)
  image(grass_tile,x_4,0,250,250)
  image(grass_tile,x_5,0,250,250)
  image(grass_tile,x_6,0,250,250)
  image(grass_tile,x_7,0,250,250)
  //baixo
  image(grass_tile,x_1,520,250,250)
  image(grass_tile,x_2,520,250,250)
  image(grass_tile,x_3,520,250,250)
  image(grass_tile,x_4,520,250,250) 
  image(grass_tile,x_5,520,250,250)
  image(grass_tile,x_6,520,250,250)
  image(grass_tile,x_7,520,250,250)
}
var Xrampa = 1440;
function gatilho_rampa(velocidade,Yrampa,cond){
  if(cond === 1){Xrampa-=velocidade}
  image(rampa,Xrampa,Yrampa,240,120)
  if (Xrampa <= -250){
    rampa_random = 0
    Xrampa = 1440
  }
  if (413 > Xrampa && 173 < Xrampa && Ycarro > Yrampa && 214 < Yrampa){
    carro_tamanho+= 10;
    if(carro_tamanho > 40){
      carro_tamanho = 40
    }
  }
}
var Xbarril = 1440;
function baril(velo_x,y,cond,tamanho){
  if (cond === 1){Xbarril -= velo_x}
  image(baril_img,Xbarril,y,tamanho,tamanho)
  if (Xbarril <= tamanho - tamanho - tamanho){
    barril_random = 0;
    Xbarril = 1440;
  }
}
var XBush = 1440;
function bush(velo_x,y,cond,tamanho){
  if(cond === 1){
    XBush -= velo_x;
  }
  image(bush_img,XBush,y,tamanho,tamanho)
  if (XBush <= tamanho - tamanho - tamanho){
    XBush = 1440;
    random_bush = 0;
  }
}
var Xhouse = 1440
function house(cond,x_velo,tamanho){
  if (cond === 1){
    Xhouse -= x_velo;
  }
  image(house_img,Xhouse,-200,tamanho,tamanho+100)//350 450
  if (Xhouse <= tamanho - tamanho - tamanho){
    Xhouse = 1440;
    random_house = 0; 
  }
}
var Xbarraca = 1440
function barraca(cond,x_velo,tamanho){
  if (cond === 1){
    Xbarraca -= x_velo;
  }
  image(barraca_img,Xbarraca,20,tamanho + 130,tamanho) // 120 250
  if (Xbarraca <= tamanho - tamanho - tamanho - 130){
    Xbarraca = 1440;
    random_barraca=0
  }
}
//auto X413 && Y334
//baixo X173 && Y214
//missoes
function missao1(){
  grass();
  move();
  image(rua_em_apri,1240,300,200,200);
  image(rua_curva,960,226,280,273);
  image(start_img,1220,300,50,200);
  image(rua_reta_spite,760,226,200,200);
  image(rua_reta_spite,379,226,200,200);
  image(rua_reta_spite,379-200,226,200,200);
  image(rua_reta_spite,379-400,226,200,200);
  image(rua_reta_spite,560,226,200,200);
  image(fim,79,226,50,200);
  image(bush_img,100,100,50,50);
  image(bush_img,300,700,50,50);
  image(bush_img,600,200,50,50);
  mis_fim(); 
  carro_mis(); 
}
function grass(){image(grass_img,0,0,200,200);image(grass_img,0,200,200,200);image(grass_img,200,200,200,200);image(grass_img,200,0,200,200);image(grass_img,400,0,200,200);image(grass_img,0,400,200,200);image(grass_img,400,400,200,200);image(grass_img,600,0,200,200);image(grass_img,600,600,200,200);image(grass_img,400,600,200,200);image(grass_img,200,600,200,200);image(grass_img,0,600,200,200);image(grass_img,200,400,200,200);image(grass_img,600,200,200,200);image(grass_img,400,200,200,200);image(grass_img,600,400,200,200);image(grass_img,800,0,200,200);image(grass_img,800,200,200,200);image(grass_img,800,400,200,200);image(grass_img,800,600,200,200);image(grass_img,1000,0,200,200);image(grass_img,1000,200,200,200);image(grass_img,1000,400,200,200);image(grass_img,1000,600,200,200);image(grass_img,1200,0,200,200);image(grass_img,1200,200,200,200);image(grass_img,1200,400,200,200);image(grass_img,1200,600,200,200);image(grass_img,1400,0,200,200);image(grass_img,1400,200,200,200);image(grass_img,1400,400,200,200);image(grass_img,1400,600,200,200);}
function move(){
  if (keyIsDown(87)){
    if(X_velo_car < -253){
      cond_rotate = 2;
    }
    X_velo_car--;
    x_velo_mis = x_velo_mis - 0.7;
  }
  if (keyIsDown(83)){
    X_velo_car++;
    x_velo_mis = x_velo_mis - 0.5;
  }
  if (keyIsDown(68)){
    if (cond_rotate === 1){
      rota_velo_mis = rota_velo_mis - 0.005;
    }
    if(cond_rotate === 2){
      rota_velo_mis = rota_velo_mis - 0.0015;
    }
  }
  if (keyIsDown(65)){
    if (cond_rotate === 1){
      rota_velo_mis = rota_velo_mis + 0.005;
    }
    if(cond_rotate === 2){
      rota_velo_mis = rota_velo_mis + 0.0015;
    }
  }
}
function mis_fim(){
  image(window1,100,100,100,100);
}
function carro_mis() {
  translate(x_velo_mis, y_velo_mis);
  rotate(rota_velo_mis);
  rect(X_velo_car,-29, 52, 52);
}

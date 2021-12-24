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
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
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
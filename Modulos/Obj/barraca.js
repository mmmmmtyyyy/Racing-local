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
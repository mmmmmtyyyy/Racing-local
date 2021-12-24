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
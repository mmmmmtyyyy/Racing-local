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
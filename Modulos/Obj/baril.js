function baril(velo_x,y,cond,tamanho){
    if (cond === 1){Xbarril -= velo_x}
    image(baril_img,Xbarril,y,tamanho,tamanho)
    if (Xbarril <= tamanho - tamanho - tamanho){
      barril_random = 0;
    Xbarril = 1440;
    }
}
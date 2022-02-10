n = 0;

var prc=0;

do
{
    prc=Math.floor(Math.random() * 3);   

}while(prc==0);


if (Nivel == 1) {
    function VecImagenes() {
        n = 0;
        this[n++] = "img/n1.png";
        this[n++] = "img/n2.png";
        this[n++] = "img/n3.png";
        this.N = n;
    }

    var Imagenes = new VecImagenes();

    for (var i = 0; i < 3; i++) {
        
        if(i+1 == prc)
        {
         src = Imagenes[NUM_IMAGENES-1];
        }
        else
        {
         src = Imagenes[Math.floor(Math.random() * Imagenes.N)];
        }
        document.write("<IMG SRC=" + src + " custom=" + NUM_IMAGENES + " id=" + src.substr(src.length - 5, 1) + " onclick=EventoClicImagen(this)>");
        
    }
}
if (Nivel == 2) {
    function VecImagenes() {
        n = 0;
        this[n++] = "img/n1.png";
        this[n++] = "img/n2.png";
        this[n++] = "img/n3.png";
        this[n++] = "img/n4.png";
        this[n++] = "img/n5.png";
        this[n++] = "img/n6.png";
        this.N = n;
    }
    var Imagenes = new VecImagenes();

    for (var i = 0; i < 3; i++) {
        
        if(i+1 == prc)
        {
         src = Imagenes[NUM_IMAGENES-1];
        }
        else
        {
         src = Imagenes[Math.floor(Math.random() * Imagenes.N)];
        }
        document.write("<IMG SRC=" + src + " custom=" + NUM_IMAGENES + " id=" + src.substr(src.length - 5, 1) + " onclick=EventoClicImagen(this)>");       
    }
}
if (Nivel == 3) {
    function VecImagenes() {
        n = 0;
        this[n++] = "img/n1.png";
        this[n++] = "img/n2.png";
        this[n++] = "img/n3.png";
        this[n++] = "img/n4.png";
        this[n++] = "img/n5.png";
        this[n++] = "img/n6.png";
        this[n++] = "img/n7.png";
        this[n++] = "img/n8.png";
        this[n++] = "img/n9.png";
        this.N = n;
    }
    var Imagenes = new VecImagenes();

    for (var i = 0; i < 3; i++) {   
        if(i+1 == prc)
        {
         src = Imagenes[NUM_IMAGENES-1];
        }
        else
        {
         src = Imagenes[Math.floor(Math.random() * Imagenes.N)];
        }
        document.write("<IMG SRC=" + src + " custom=" + NUM_IMAGENES + " id=" + src.substr(src.length - 5, 1) + " onclick=EventoClicImagen(this)>");
        
    }
}

/*Nivel=prompt('Ingrese el Nivel (1,2,3):   ','');   */

Nivel=1;
if (localStorage.clickcount == 0)
{
    Nivel=1;
}
if (localStorage.clickcount >= 5)
 {
    Nivel=2;     
        window.onload=inicio;
            function inicio(){
        document.getElementById("star1").style="display";
}
}
if (localStorage.clickcount >= 10)
 {
    Nivel=3;
        document.getElementById("star2").style="display";
 }
if (localStorage.clickcount >= 15)
 { 
    Nivel=3;
        document.getElementById("star3").style="display";
 }

if (localStorage.clickcount >= 16)
 {
    localStorage.clickcount = 0; 
    window.location = "video/feliz.mp4" 
}

var NUM_IMAGENES=0;
n=0

if ((Nivel==1))
{
    op=3
}
if ((Nivel==2))
{
    op=6
}
if ((Nivel==3))
{
    op=9         
}

op=op;
function VecImagenes()
{
n=0;
this[n++]="img/a.jpg";
this[n++]="img/b.jpg";
this[n++]="img/c.jpg";
this[n++]="img/d.jpg";
this[n++]="img/e.jpg";
this[n++]="img/f.jpg";
this[n++]="img/g.jpg";
this[n++]="img/h.jpg";
this.N=n;
}

var Imagenes=new VecImagenes();
var indice_=0;
do {
      indice_ = Math.floor((Math.random()) * Imagenes.N);
} while (indice_ == 0);

src= Imagenes[indice_] ;
cant=0;

posi = Math.ceil(Math.random()*op);
NUM_IMAGENES = posi;
for (var i = 0; i < posi; i++) 
{
   n += i;
document.write("<IMG SRC="+src+">");
cant+=i;
}




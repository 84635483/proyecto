var contar = 0;

/* localStorage.clickcount =1;*/

function EventoClicImagen(p_imagen)
{
    var NumSeleccionado = p_imagen.id;
    var NumBuscado=p_imagen.attributes.custom.value;

    if (NumSeleccionado != NumBuscado)
    {
        /*alert("Diferente: " + NumSeleccionado + ", " + NumBuscado);*/
        const music = new Audio('audio/oops.mp3');
        music.load();
        music.play();
    }
    else
    {
       /* alert("Iguales: " + NumSeleccionado + ", " + NumBuscado);
      /* const music = new Audio('audio/burbuja.mp3');
      /* music.load();
      /* music.play();       
     /* bandera='true';*/
      /*  alert(" a ver que se ve : " + localStorage.clickcount);     */
 
        location.href = "file:///D:/proyectoquenodeboperder/img.html"; 
        localStorage.clickcount = Number(localStorage.clickcount)+1;
    }

}



 
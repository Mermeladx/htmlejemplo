if (typeof(Worker) !== "undefined") {
    // hay soporte para los trabajadores web!
   // Mucho código.....
   } else {
   // No hay soporte para los trabajadores web..
   }

var i = 0;
function contador() {
i = i + 1;
postMessage(i);
 setTimeout("contador()",500);
}
contador();
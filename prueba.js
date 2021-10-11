var array = new Array(2);
var acumulador = 1;

for(var i=0; i<array.length;i++) {
    array[i] = new Array(2);
}

for(var i=0; i<array.length;i++) {
    for(var j=0; j<array[i].length;j++) {
        acumulador *= 2;
        array[i][j] = acumulador;
    }

}

document.write(array);
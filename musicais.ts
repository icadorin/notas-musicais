var notas = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
var maior = ['T', 'T', 's', 'T', 'T', 'T', 's']
var menor = ['T', 's', 'T', 'T', 'T', 'T', 's']
var vazia = []
var notasMaiores = []
var notasMenores = []
var pos = 0 
var ultimaPos = 0
var resultado = 0
var aux = 0
var aux2 = 0
var tamanho = notas.length
var entrada = 'A' //Valor de entrada do usuário

//Encontra a posição na array da nota que foi solicitada
for(var j = 0; j < tamanho; j++) {
    if (notas[j] == entrada) {
        pos = j
    }
}

//Para não alterar o valor de pos, uma nova variável é criada e recebe seu valor
ultimaPos = pos

//Resultado será usado como limite para o loop
resultado = tamanho - pos

//Adiciona as notas na array vazia
for(var k = 0; k < resultado; k++) {
    vazia[k] = notas[ultimaPos]
    ultimaPos++
}

//Adiciona as notas restantes
for(var p = 0; p < pos; p++) {
    vazia[resultado] = notas[p]
    resultado++
}

//Printa array
for(var l = 0; l < tamanho; l++) {
    console.log(vazia[l])
}

//Preenche a array com as notas que formam a escala maior
for(var i = 0; i < maior.length; i++) {
    if(maior[i] == 'T') {
        notasMaiores[aux] = vazia[aux2]
        aux++
        aux2+= 2
    } else {
        notasMaiores[aux] = vazia[aux2]
        aux++
        aux2++
    }
}

aux = 0
aux2 = 0

//Preenche a array com as notas que formam a escala menor
for(var y = 0; y < menor.length; y++) {
    if(menor[y] == 'T') {
        notasMenores[aux] = vazia[aux2]
        aux++
        aux2+=2
    } else {
        notasMenores[aux] = vazia[aux2]
        aux++
        aux2++
    }
}

//Printa array de escala maior
console.log("Notas maiores")
for(var d = 0; d < tamanho; d++) {
    console.log(notasMaiores[d])
}

//Printa array de escala menor
console.log("Notas Menores")
for(var e = 0; e < tamanho; e++) {
    console.log(notasMenores[e])
}

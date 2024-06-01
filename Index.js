let nome = document.getElementById("nomeInput").value;
let xpAcumulada = parseInt(document.getElementById("xpInput").value);
let nivel = "";


if (xpAcumulada < 1000) {
    nivel = "Ferro";
} else if (xpAcumulada >= 1001 && xpAcumulada <= 2000) {
    nivel = "Bronze";
} else if (xpAcumulada >= 2001 && xpAcumulada <= 5000) {
    nivel = "Prata";
} else if (xpAcumulada >= 5001 && xpAcumulada <= 7000) {
    nivel = "Ouro";
} else if (xpAcumulada >= 7001 && xpAcumulada <= 8000) {
    nivel = "Platina";
} else if (xpAcumulada >= 8001 && xpAcumulada <= 9000) {
    nivel = "Ascendente";
} else if (xpAcumulada >= 9001 && xpAcumulada <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}


var outputDiv = document.getElementById("output");
outputDiv.innerHTML = "O Herói de nome " + nome + " está no nível de " + nivel;
console.log("O Herói de nome " + nome + " está no nível de " + nivel);




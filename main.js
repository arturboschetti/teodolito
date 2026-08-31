import { calculo } from "./script.js";
import { db } from "./firebase.js";
import {
  ref,
  push,
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-database.js";

const distancia = document.getElementById("i1");
const angulo = document.getElementById("i2");
const alturaObservador = document.getElementById("i3");
const botaocalcular = document.getElementById("botao");
const resultado = document.getElementById("resposta");

botaocalcular.addEventListener("click", function () {
  const valorAngulo = Number(angulo.value);
  const valorAltura = Number(alturaObservador.value);
  const valorDistancia = Number(distancia.value);

  const resultadoCalculo = calculo(valorDistancia, valorAngulo, valorAltura);
  resultado.innerHTML = Number(resultadoCalculo.toFixed(2));

  push(ref(db, "calculos"), {
    distancia: valorDistancia,
    angulo: valorAngulo,
    alturaObservador: valorAltura,
    resultado: Number(resultadoCalculo.toFixed(2)),
    criadoEm: Date.now(),
  })
    .then(() => {
      console.log("Salvo no Realtime Database com sucesso!");
    })
    .catch((error) => {
      console.error("Erro ao salvar:", error);
    });
});

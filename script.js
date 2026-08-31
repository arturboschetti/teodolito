export function calculo(distancia, angulo, alturaObservador) {
  const anguloRadianos = angulo * (Math.PI / 180);
  return distancia / Math.tan(anguloRadianos) + alturaObservador;
}

function isPrimeMillerRabin(n, k) {
  if (n <= 1) return false;
  if (n <= 3) return true;

  if (n % 2 === 0) return false;

  const s = n - 1;
  let r = 0;
  while (s % 2 === 0) {
    s /= 2;
    r++;
  }

  for (let i = 0; i < k; i++) {
    const a = 2 + Math.floor(Math.random() * (n - 3));
    let x = BigInt(a) ** BigInt(s) % BigInt(n);
    if (x === 1 || x === n - 1) continue;

    for (let j = 0; j < r - 1; j++) {
      x = x ** 2n % BigInt(n);
      if (x === 1) return false;
      if (x === n - 1) break;
    }

    if (x !== n - 1) return false;
  }

  return true;
}

function calcularUltimoNumeroPrimo(n, k) {
  if (n < 2n) return null;

  if (n <= 3n) return n;

  if (n % 2n === 0n) n -= 2n;

  while (true) {
    if (isPrimeMillerRabin(n, k)) return n;
    n -= 2n;
  }
}

// Exemplo de uso:
const n = 5n ** 12n;
const k = 10; // Número de iterações para o Teste de Miller-Rabin
const startTime = Date.now();
const ultimoPrimo = calcularUltimoNumeroPrimo(n, k);
const endTime = Date.now();
const tempoExecucao = endTime - startTime;

console.log("O último número primo encontrado é:", ultimoPrimo.toString());
console.log("Tempo de execução:", tempoExecucao, "milissegundos");

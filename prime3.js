function calcularUltimoNumeroPrimo(n) {
  if (n < 2) {
    return null; // Não há primos menores que 2
  }

  if (n === 2) {
    return 2; // O único número primo menor que 2 é 2
  }

  const sieve = new Array(n + 1).fill(false);
  const limit = Math.ceil(Math.sqrt(n));

  for (let x = 1; x <= limit; x++) {
    for (let y = 1; y <= limit; y++) {
      const num = 4 * x * x + y * y;
      if (num <= n && (num % 12 === 1 || num % 12 === 5)) {
        sieve[num] = !sieve[num];
      }

      const num2 = 3 * x * x + y * y;
      if (num2 <= n && num2 % 12 === 7) {
        sieve[num2] = !sieve[num2];
      }

      const num3 = 3 * x * x - y * y;
      if (x > y && num3 <= n && num3 % 12 === 11) {
        sieve[num3] = !sieve[num3];
      }
    }
  }

  for (let x = 5; x <= limit; x++) {
    if (sieve[x]) {
      for (let y = x * x; y <= n; y += x * x) {
        sieve[y] = false;
      }
    }
  }

  for (let i = n; i >= 5; i--) {
    if (sieve[i]) {
      return i;
    }
  }

  return 2; // Se não encontrarmos nenhum primo maior que 2
}

// Exemplo de uso:
const n = Math.pow(5, 11);
const startTime = Date.now();
const ultimoPrimo = calcularUltimoNumeroPrimo(n);
const endTime = Date.now();
const tempoExecucao = endTime - startTime;

console.log("O último número primo encontrado é:", ultimoPrimo);
console.log("Tempo de execução:", tempoExecucao, "milissegundos");

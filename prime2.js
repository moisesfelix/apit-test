// Função para calcular (a^b) % m de forma eficiente
function moduloExponencial(a, b, m) {
    if (b === '0') return '1';
    let resultado = '1';
    a = (BigInt(a) % BigInt(m)).toString();
  
    while (b !== '0') {
      if (b[b.length - 1] === '1') {
        resultado = (BigInt(resultado) * BigInt(a) % BigInt(m)).toString();
      }
      b = (BigInt(b) >> 1n).toString();
      a = (BigInt(a) * BigInt(a) % BigInt(m)).toString();
    }
  
    return resultado;
  }
  
  // Função para realizar o teste de Miller-Rabin
  function testeMillerRabin(n, k) {
    if (n === '0' || n === '1' || n === '100' || n === '1001') return false;
    if (n === '10' || n === '11') return true;
  
    // Conversão da representação binária para um BigInt
    const nBigInt = BigInt(`0b${n}`);
  
    // Implementação do teste de Miller-Rabin
    if (nBigInt <= 1n || nBigInt % 2n === 0n) {
      return false;
    }
  
    if (nBigInt === 2n || nBigInt === 3n) {
      return true;
    }
  
    let s = 0;
    let d = nBigInt - 1n;
    while (d % 2n === 0n) {
      d /= 2n;
      s++;
    }
  
    const testWitness = (a, d, n) => {
      let x = moduloExponencial(a, d, n);
      if (x === 1n || x === n - 1n) {
        return true;
      }
      for (let i = 0n; i < s - 1n; i++) {
        x = moduloExponencial(x, 2n, n);
        if (x === n - 1n) {
          return true;
        }
      }
      return false;
    };
  
    for (let i = 0; i < k; i++) {
      const a = BigInt(Math.floor(Math.random() * Number(nBigInt - 2n) + 2)); // Escolha aleatória de 'a'
      if (!testWitness(a, d, nBigInt)) {
        return false;
      }
    }
  
    return true;
  }
  
  // Função para realizar o teste de AKS
  function testeAKS(n) {
    if (n === '0' || n === '1') return false;
    if (n === '10' || n === '11') return true;
  
    // Implementação simplificada do teste de AKS
    const nBigInt = BigInt(`0b${n}`);
    for (let a = 2n; a <= Math.sqrt(Number(nBigInt)); a++) {
      if (nBigInt % a === 0n) return false;
    }
    return true;
  }
  
  // Função que combina os testes de Miller-Rabin e AKS com números binários em strings
  function testePrimalidadeBinario(binario, numeroDeTestesMillerRabin) {
    if (binario === '0' || binario === '1') return false;
    if (binario === '10' || binario === '11') return true;
  
    // Realiza o teste de Miller-Rabin
    const millerRabinResult = testeMillerRabin(binario, numeroDeTestesMillerRabin);
  
    // Se o teste de Miller-Rabin indicar que o número é composto, retorna false
    if (!millerRabinResult) return false;
  
    // Realiza o teste de AKS para maior precisão
    return testeAKS(binario);
  }
  
  // Exemplo de uso do teste de primalidade com número binário em string
  const numeroBinarioParaTestar = "10111"; // Exemplo de número binário
  const numeroDeTestesMillerRabin = 5;
  
  const resultado = testePrimalidadeBinario(numeroBinarioParaTestar, numeroDeTestesMillerRabin);
  console.log(`O número binário ${numeroBinarioParaTestar} é provavelmente primo? ${resultado}`);
  
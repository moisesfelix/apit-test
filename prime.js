function calcularNumerosPrimos(n) {
  // Crie um array de booleanos para representar os números de 2 até n
  let primos = new Array(n + 1).fill(true);
  primos[0] = primos[1] = false; // 0 e 1 não são primos

  // Comece com o primeiro número primo, que é 2
  let p = 2;

  while (p * p <= n) {
    // Se primos[p] ainda for verdadeiro, ele é um número primo
    if (primos[p]) {
      // Marque todos os múltiplos de p como não primos
      for (let i = p * p; i <= n; i += p) {
        primos[i] = false;
      }
    }
    p++;
  }

  // Agora, 'primos' contém verdadeiro para números primos de 2 a n
  const numerosPrimos = [];
  for (let i = 2; i <= n; i++) {
    if (primos[i]) {
      numerosPrimos.push(i);
    }
  }

  return numerosPrimos;
}

// Exemplo de uso:
const n = Math.pow(5, 10); // Limite superior para encontrar números primos
const primosEncontrados = calcularNumerosPrimos(n);
function mAbc(_r = 1, a = "", b = "", c = "", d = "", e = "", f = 1) {
  function testAb(x, _C = 0, list = [], h = "", p = "") {
    let yy = rec(x);
    let m = x;
    let n = m % 5;
    let a = yy.a,
      ab,
      cd;

    //console.log(yy,m,x,n,a,ab,cd)

    try {
      ab = abc()[a.length - 1].repeat(a[a.length - 1]);
      //  h+=cd
      //cd=_a()[0].repeat(n)
    } catch (e) {
      list.push(cd);
      //console.log(a,ab,cd)
      cd = "";
    }

    //p+=cd

    function rec(u, a = []) {
      if (u <= 5) return { a, data: abc()[a.length] };
      a.push(u / 5);
      return rec(u / 5, a);
    }
    function _a() {
      return {
        0: "C",
        1: "S",
        2: "M",
        3: "K",
        4: "A",
      };
    }
    function abc() {
      let ch = [];
      for (let i = 97; i <= 122; i++) {
        ch.push(String.fromCharCode(i));
      }
      return ch;
    }
    p1 = qua(`0${ab}${"0".repeat(4)}`).C;
    //console.log(p2=qua(`0${cd}${"0".repeat(4)}`).C)
    d1 = x - p1;
    //console.log(d2=x-p2)
    //console.log(x,p1,p2)
    //console.log(d1,d2)

    if (x <= 5) {
      cd = _a()[_C].repeat(x);
      p += cd;
      //list.push(cd)
      list.push(cd ? cd : null);
      // alert (cd)
      //alert (p)
      //return {list,h,p}
      return { r: h + p };
    } else {
      list.push(ab ? ab : null);
    }

    return testAb(d1, _C, list, (h += ab), p);
  }

  function qua(u) {
    const n = ["", "C", "S", "M", "K", "A"];

    const ob = {
      A: [],
      K: [],
      M: [],
      S: [],
      C: [],
    };
    const nT = {
      C: 0,
      S: 0,
      M: 0,
      K: 0,
      A: 0,
    };

    u.split("0").forEach((u, ix) => {
      if (u) {
        //console.log(ix,u)
      }
      if (u) {
        for (let i in u) {
          x = u[i];
          //console.log(x,n[ix])
          //console.log(ix,n[ix],x)
          if (x === n[ix]) {
            ob[x].push(x);
          }

          if (isNaN(x) && x.charCodeAt(0) >= 97 && x.charCodeAt(0) <= 122) {
            const char = {};
            let z = 0;
            for (let i = 97; i <= 122; i++) {
              z++;
              ch = String.fromCharCode(i);
              if (ch === x) {
                char[ch] = 5 ** z;
                //return char
                break;
              }
            }

            nT[n[ix]] += char[x];
          }
        }
      }
    });

    return {
      ref: u,
      length: u.length,
      performance: performance.now() + "ms",
      C: nT["C"] + ob["C"].length,
      S: nT["S"] + ob["S"].length,
      M: nT["M"] + ob["M"].length,
      K: nT["K"] + ob["K"].length,
      A: nT["A"] + ob["A"].length,
    };
  }

  let r = `${_r == 1 ? "0" : _r}${testAb(a, 0).r}0${testAb(b, 1).r}0${
    testAb(c, 2).r
  }0${testAb(d, 3).r}0${testAb(e, 4).r}0`;
  if (!f) return r;

  ss = r.replace(/[CMASK]{5}/g, "a");
  for (let i = 97; i <= 122; i++) {
    // console.log(String.fromCharCode(i))
    //char=String.fromCharCode(i-1)
    reg = new RegExp(`[${String.fromCharCode(i - 1)}]{5}`, "g");
    ss = ss.replace(reg, String.fromCharCode(i));
    //console.log(ss,char)
    //break
  }

  return ss;
}
function dataToList(data) {
  function qua(u) {
    const n = ["", "C", "S", "M", "K", "A"];

    const ob = {
      A: [],
      K: [],
      M: [],
      S: [],
      C: [],
    };
    const nT = {
      C: 0,
      S: 0,
      M: 0,
      K: 0,
      A: 0,
    };

    u.split("0").forEach((u, ix) => {
      if (u) {
        //console.log(ix,u)
      }
      if (u) {
        for (let i in u) {
          x = u[i];
          //console.log(x,n[ix])
          //console.log(ix,n[ix],x)
          if (x === n[ix]) {
            ob[x].push(x);
          }

          if (isNaN(x) && x.charCodeAt(0) >= 97 && x.charCodeAt(0) <= 122) {
            const char = {};
            let z = 0;
            for (let i = 97; i <= 122; i++) {
              z++;
              ch = String.fromCharCode(i);
              if (ch === x) {
                char[ch] = 5 ** z;
                //return char
                break;
              }
            }

            nT[n[ix]] += char[x];
          }
        }
      }
    });

    return {
      ref: u,
      length: u.length,
      performance: performance.now() + "ms",
      C: nT["C"] + ob["C"].length,
      S: nT["S"] + ob["S"].length,
      M: nT["M"] + ob["M"].length,
      K: nT["K"] + ob["K"].length,
      A: nT["A"] + ob["A"].length,
    };
  }
  let l = data.split(0);
  let list = [];
  for (let i = 1; i <= l.length - 1; i += 5) {
    //  console.log(l[i+0],l[i+1],l[i+2],l[i+3],l[i+4])
    list.push([l[i + 0], l[i + 1], l[i + 2], l[i + 3], l[i + 4]]);
  }
  //console.log(list)
  //console.log(
  let res = list
    .map((i) => "0" + i.join(0) + "0")
    .map((i) => qua(i))
    .map((i) => [i.C, i.S, i.M, i.K, i.A])
    .flat(Infinity);
  //  )
  return res;
}

const primosEncontrados2 = primosEncontrados.map((p) => {
  const result = numberToabc3(p);
  const list = dataToList(result);
  console.log(
    JSON.stringify(result, null, 4),
    list,
    list.filter((i) => i).length,
    list.filter((i) => i).reduce((a, b) => a + b, 0),
    p,77777777777777777777777777
  );
});
console.log("foi");
function numberToabc3(sh, z = 1) {
  function getAbc(x) {
    let st = {};
    let St = {
      0: "0",
      1: "C",
      2: "S",
      3: "M",
      4: "K",
      5: "A",
      6: "C",
    };
    l = 0;
    for (let i = 0; i <= x; i++) {
      let n = 0;
      while (n < 5) {
        n++;
        l++;

        //	console.log(i,n,l)
        st[l] = St[n];
      }

      if (x == l) return st;
    }
  }
  function getLast(res) {
    return res[res.length - 3];
  }

  function recC(valorInicial, list = [], i = [], p = []) {
    result = valorInicial;
    list.push(result);
    //console.log(result)
    if (result <= 0) {
      return { list, i, p };
    }

    if (result % 2 == 0) {
      result = valorInicial / 2;
      p.push(result);
      //	console.log(result)

      return recC(result, list, i, p);
    } else {
      result = (valorInicial - 1) / 2;
      i.push(result);
      return recC(result, list, i, p);
      //	console.log(result)
    }
  }
  let St = getAbc(100);
  let list = recC(sh).list.reverse();

  res = "";
  let n = 0;

  t = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
  };

  result = [];

  list.forEach((i, ix) => {
    result.push(i % 2 != 0);

    if (i) {
      if (result[ix - 1] != result[ix]) {
        n++;
        res += "0" + St[n];
      } else {
        res += St[n];
      }
    }
    t[n] = isNaN(t[n]) ? 1 : +t[n] + 1;

    //		console.log(n,St[n],getLast(res),result[ix-1],i,result)
  });

  //console.log(res,n,t,result,St)

  if (z) {
    ss = res.replace(/[CMASK]{5}/g, "a");
    for (let i = 97; i <= 122; i++) {
      // console.log(String.fromCharCode(i))
      //char=String.fromCharCode(i-1)
      reg = new RegExp(`[${String.fromCharCode(i - 1)}]{5}`, "g");
      ss = ss.replace(reg, String.fromCharCode(i));
      //console.log(ss,char)
      //break
    }
    //ss=ss.replace('SS0M0K0A0','@')
    return ss + 0;
  } else {
    return res + 0;
  }
}

console.log(numberToabc3(Math.pow(5, 421)));
console.log(dataToList(numberToabc3(Math.pow(5,  421))).filter((i) => i));
console.log(dataToList(numberToabc3(Math.pow(5, 421))).filter((i) => i).length);
console.log(Math.pow(5, 421));

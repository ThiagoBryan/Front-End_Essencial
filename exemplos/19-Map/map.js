const lista = [
  { produto: "Açaí", valor: 3.0 },
  { produto: "Sorvete", valor: 2.0 },
  { produto: "Sundae", valor: 5.0 },
  { produto: "Picolé", valor: 0.5 },
];

const novaListaValoresAtualizados = lista.map((item) => {
  return { ...item, valor: (item.valor += 0.15) };
});

console.log(novaListaValoresAtualizados);

// ARRAYS

const carrinho = [
  { produto: "Playstation 5", valor: 4600 },
  { produto: "TV 43'", valor: 2000 },
  { produto: "Headphone", valor: 200 },
  { produto: "Controle", valor: 359 },
];

const total = carrinho.reduce((acumulador, produto) => {
  return acumulador + produto.valor;
}, 0);
console.log(total);

const produtosAplicarDesconto = carrinho.filter((produto) => {
  return produto.valor > 1000;
});

const listaComDesconto = produtosAplicarDesconto.map((produto) => {
  return { ...produto, valor: (produto.valor -= 50) };
});

console.log(produtosAplicarDesconto);
console.log(listaComDesconto);


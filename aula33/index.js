const pessoa = {
  nome: "Luiz",
  sobrenome: "Miranda",
  idade: 30,
  endereco: {
    rua: "Av Brasil",
    numero: 320,
  }
};

const { nome, sobrenime, ...resto } = pessoa;
console.log(nome, resto);

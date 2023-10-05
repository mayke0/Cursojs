// Global
function retornaFuncao(nome) {
    return function(sobrenome) {
      return nome + ' ' + sobrenome;
    };
  }
  
  function falaNome(nome) {
    const sobrenome = 'Miranda';
    console.log(nome, sobrenome);
  }
  
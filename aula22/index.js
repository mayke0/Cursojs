/*
Operador Lógicos
&& -> AND -> E -> Todas as expressões precisam ser verdadeiiras para retornar true
|| -> OR -> OU
! -> NOT -> NÂO
const expressaoANd = true && true && true && true;
const expressaoANd = false || false || false || false;
*/


const usuario = 'Luiz'; // form usuário digitou
const senha = '123456'; // form usuário digitou

const vaiLogar = usuario === 'Luiz' && senha === '123456'

console.log(vaiLogar);
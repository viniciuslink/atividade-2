/*A empresa Savinis, focada no desenvolvimento de software de alta performance, 
contratou você para realizar o desenvolvimento de um sistema de cadastro para 
eventos que será disponibilizado para o público, o que, até então, era realizado
 manualmente.
 
Esse sistema terá como função principal a divulgação dos eventos para a comunidade
 de desenvolvimento (grupo de pessoas que tem o intuito de compartilhar ideias, 
    projetos e conhecimentos) para que sejam consultados de forma eficiente.
 
Você será responsável por escolher qual técnica irá atender os seguintes 
requisitos:
 
-Se a data do evento for posterior à data atual, permitir o evento; senão, 
alertar que o cadastro não será permitido por data inválida.

-Se o participante for maior de 18 anos, permitir o cadastro; senão, alertar que 
o cadastro não é permitido pela idade.
-Listar participantes e palestrantes por evento.
-Enquanto a quantidade de participantes for inferior a 100, permitir cadastro; 
senão, alertar que o cadastro não será permitido por ter excedido o limite.
*/

//const dataatual = new Date();
//console.log(dataatual.get);
var dataevento=[13,03,2022];
const data =[14,03,2022];
var idade =17;
var participantes=[];

var participante =prompt("digite seu nome",undefined);
participantes.push(participante);
console.log(participantes);
document.getElementById(participantes);


/*const dataatual = new Date();
const dia = dataatual.getDate();
document.getElementById(dataatual.getDate());
console.log(dia);*/
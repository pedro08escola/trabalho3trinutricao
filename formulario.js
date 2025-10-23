//acessa o botao
var botaoAdicionar = document.querySelector("#adicionar-paciente");
//executa o codigo ao acionar o botao
botaoAdicionar.addEventListener('click', function(event){
event.preventDefault();

//acessa o formulario
var formulario = document.querySelector("#form-adiciona");
var paciente = buscaValoresFormulario(formulario)
var pacienteTr = criarTr(paciente);
var tabela = document.querySelector("#tabela-pacientes");
tabela.appendChild(pacienteTr);
});

function buscaValoresFormulario(formulario){
// Captura os valores digitados
var paciente = {
    
    nome: formulario.nome.value,
    peso: formulario.peso.value,
    altura: formulario.altura.value,
    gordura: formulario.gordura.value,
    imc: calcularIMC(formulario.peso.value, formulario.altura.value)
}
return paciente;
}

function criarTr(paciente){

//Cria as tas <tr>
var pacienteTr = document.createElement("tr");
pacienteTr.classList.add("paciente");

//Cria as tas <td>
var nomeTd = criarTd(paciente.nome, "info-nome");
var pesoTd = criarTd(paciente.nome, "info-peso");
var alturaTd = criarTd(paciente.nome, "info-altura");
var gorduraTd = criarTd(paciente.nome, "info-gordura");
var imcTd = criarTd(paciente.nome, "info-imc");

//aiciona o conteudo que adicionou no formulario para mostrar ao usuário
pacienteTr.appendChild(nomeTd);
pacienteTr.appendChild(pesoTd);
pacienteTr.appendChild(alturaTd);
pacienteTr.appendChild(gorduraTd);
pacienteTr.appendChild(imcTd);

return pacienteTr
}

function criarTd(dado, classe){
const td = document.createElement("td");
td.textContent = dado;
td.classList.add("classe");
return td;
}

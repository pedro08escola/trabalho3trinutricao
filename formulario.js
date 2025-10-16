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

//é pra criar a tag tr da tabela 
var pacienteTr = document.createElement("tr");

//é pra criar a tag td da tabela 
var nomeTd = document.createElement("td");
var pesoTd = document.createElement("td");
var alturaTd = document.createElement("td");
var gorduraTd = document.createElement("td");
var imcTd = document.createElement("td");

//adiciona os valores as tags criadas
nomeTd.textContent = paciente.nome;
pesoTd.textContent = paciente.peso;
alturaTd.textContent = paciente.altura;
gorduraTd.textContent = paciente.gordura;
imcTd.textContent = paciente.imc;

//aiciona o conteudo que adicionou no formulario para mostrar ao usuário
pacienteTr.appendChild(nomeTd);
pacienteTr.appendChild(pesoTd);
pacienteTr.appendChild(alturaTd);
pacienteTr.appendChild(gorduraTd);
pacienteTr.appendChild(imcTd);

return pacienteTr
}





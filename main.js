// muda o nome a partir do seletor de classe
var pacientes = document.querySelector(".subtitulo");
pacientes.textContent = "Meus Pacientes";
var nutricao = document.querySelector(".titulo");
nutricao.textContent = "Pedro Nutrição";

//acessar a tag tr -menos o  paciente Paulo
var paciente = document. querySelector("#primeiro-paciente");

// Seleciona o conteúdo do peso da tag
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

//Seleciona o conteúdo altura da tag
var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

//calcula o imc
var imc = peso/ (altura*altura);

// acessa e altera o imc
var tdImc = paciente.querySelector(".info-imc");
tdImc.textContent = imc;

if(peso < 0 || peso > 1000){
alert("Peso inválido");


}
if(altura < 0 || altura > 3.00){
    alert("Altura inválido");
    
}

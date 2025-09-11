// muda o nome a partir do seletor de classe
var subtitulo = document.querySelector(".subtitulo");
subtitulo.textContent = "Meus Pacientes";
var nutricao = document.querySelector(".titulo");
nutricao.textContent = "Pedro Nutrição";

//acessar a tag tr -menos o  paciente Paulo
var pacientes = document.querySelectorAll(".paciente");
for(var i =0; i < pacientes.length; i++){
var paciente = pacientes[i];


    // Seleciona o conteúdo do peso da tag
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

//Seleciona o conteúdo altura da tag
var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

//calcula o imc
var imc = peso/ (altura * altura);
imc = imc.toFixed(2);

// variáveis com valor true
var pesoValido = true;
var alturaValida =  true;

if(pesoValido && alturaValida){
    // acessa e altera o imc
    var tdImc = paciente.querySelector(".info-imc");
    tdImc.textContent = imc;
    }

    if(peso <= 0 || peso >= 1000){
        var pesoValido = false;
        tdImc.textContent = "peso inválido";
        }

if(altura < 0 || altura > 3.00){
    var alturaValida = false;
    tdImc.textContent = "altura inválida";
}


}
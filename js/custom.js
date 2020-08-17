// FUNÇÃO PARA VERIFICAÇÃO DE INPUTS VAZIOS
function empty(v){
  if(v == null || v == 0 || v == '' || v==""){
    return true;
  }else{
    return false;
  }
}

const btnSubmit = document.getElementById('btnSubmit');
btnSubmit.addEventListener(
  'click', enviarDados, false
);

function enviarDados(event) {
  // validador de email
  var validar = new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);
  
  event.preventDefault();

  var recipient_name = document.getElementById("nome").value
  var recipient_email = document.getElementById("email").value
  var cep = document.getElementById("cep").value
  var address = document.getElementById("rua").value
  var address_number = document.getElementById("numero").value
  var address_complement = document.getElementById("complemento").value
  var neighborhood = document.getElementById("bairro").value
  var city = document.getElementById("cidade").value
  var data = document.getElementById("data").value

  // VALIDAR NOME
  if(empty(recipient_name)) {
    document.getElementById("msgEmail").innerHTML="E-mail pag-seguro *";
    document.getElementById("msgCep").innerHTML="CEP *";
    document.getElementById("msgRua").innerHTML="Rua *";
    document.getElementById("msgNumero").innerHTML="Numero *";
    document.getElementById("msgBairro").innerHTML="Bairro *";
    document.getElementById("msgCidade").innerHTML="Cidade *";
    document.getElementById("msgData").innerHTML="Data *";
    document.getElementById("msgNome").innerHTML="<font color='red'>Nome inválido</font>"
    return false
  } 
  // VALIDAR EMAIL
  else if(empty(recipient_email) || !validar.test(recipient_email)) {
    document.getElementById("msgNome").innerHTML="Nome Completo *";
    document.getElementById("msgCep").innerHTML="CEP *";
    document.getElementById("msgRua").innerHTML="Rua *";
    document.getElementById("msgNumero").innerHTML="Numero *";
    document.getElementById("msgBairro").innerHTML="Bairro *";
    document.getElementById("msgCidade").innerHTML="Cidade *";
    document.getElementById("msgData").innerHTML="Data *";
    document.getElementById("msgEmail").innerHTML="<font color='red'>Email inválido</font>"
    return false
  }
  // VALIDAR CEP
  else if(empty(cep) || cep.length < 8) {
    document.getElementById("msgNome").innerHTML="Nome Completo *";
    document.getElementById("msgEmail").innerHTML="E-mail pag-seguro *";
    document.getElementById("msgRua").innerHTML="Rua *";
    document.getElementById("msgNumero").innerHTML="Numero *";
    document.getElementById("msgBairro").innerHTML="Bairro *";
    document.getElementById("msgCidade").innerHTML="Cidade *";
    document.getElementById("msgData").innerHTML="Data *";
    document.getElementById("msgCep").innerHTML="<font color='red'>CEP inválido</font>"
    return false
  }
  // VALIDAR RUA 
  else if(empty(address)) {
    document.getElementById("msgNome").innerHTML="Nome Completo *";
    document.getElementById("msgEmail").innerHTML="E-mail pag-seguro *";
    document.getElementById("msgNumero").innerHTML="Numero *";
    document.getElementById("msgBairro").innerHTML="Bairro *";
    document.getElementById("msgCidade").innerHTML="Cidade *";
    document.getElementById("msgData").innerHTML="Data *";
    document.getElementById("msgCep").innerHTML="CEP *";
    document.getElementById("msgRua").innerHTML="<font color='red'>Rua inválida</font>"
    return false
  } 
  // VALIDAR NÚMERO
  else if(empty(address_number)) {
    document.getElementById("msgNome").innerHTML="Nome Completo *";
    document.getElementById("msgEmail").innerHTML="E-mail pag-seguro *";
    document.getElementById("msgCep").innerHTML="CEP *";
    document.getElementById("msgBairro").innerHTML="Bairro *";
    document.getElementById("msgCidade").innerHTML="Cidade *";
    document.getElementById("msgData").innerHTML="Data *";
    document.getElementById("msgRua").innerHTML="Rua *";
    document.getElementById("msgNumero").innerHTML="<font color='red'>N° inválido</font>"
    return false
  }
  // VALIDAR BAIRRO 
  else if(empty(neighborhood)) {
    document.getElementById("msgNome").innerHTML="Nome Completo *";
    document.getElementById("msgEmail").innerHTML="E-mail pag-seguro *";
    document.getElementById("msgCep").innerHTML="CEP *";
    document.getElementById("msgRua").innerHTML="Rua *";
    document.getElementById("msgCidade").innerHTML="Cidade *";
    document.getElementById("msgData").innerHTML="Data *";
    document.getElementById("msgNumero").innerHTML="Numero *";
    document.getElementById("msgBairro").innerHTML="<font color='red'>Bairro inválido</font>"
    return false
  }
  // VALIDAR CIDADE 
  else if(empty(city)) {
    document.getElementById("msgNome").innerHTML="Nome Completo *";
    document.getElementById("msgEmail").innerHTML="E-mail pag-seguro *";
    document.getElementById("msgCep").innerHTML="CEP *";
    document.getElementById("msgRua").innerHTML="Rua *";
    document.getElementById("msgNumero").innerHTML="Numero *";
    document.getElementById("msgData").innerHTML="Data *";
    document.getElementById("msgBairro").innerHTML="Bairro *";
    document.getElementById("msgCidade").innerHTML="<font color='red'>Cidade inválida</font>"
    return false
  } 
  // VALIDAR DATA
  else if(empty(data)) {
    document.getElementById("msgNome").innerHTML="Nome Completo *";
    document.getElementById("msgEmail").innerHTML="E-mail pag-seguro *";
    document.getElementById("msgCep").innerHTML="CEP *";
    document.getElementById("msgRua").innerHTML="Rua *";
    document.getElementById("msgNumero").innerHTML="Numero *";
    document.getElementById("msgBairro").innerHTML="Bairro *";
    document.getElementById("msgCidade").innerHTML="Cidade *";
    document.getElementById("msgData").innerHTML="<font color='red'>Data inválida</font>"
    return false
  }
  alert("Agendamento feito com sucesso");

  // ENVIAR OS DADOS PARA firebase.js
  create({recipient_name, recipient_email, cep, address, address_number, address_complement,neighborhood, city, data}, 'clientes');
}
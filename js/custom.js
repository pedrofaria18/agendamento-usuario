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
  
  event.preventDefault();

  var nome = document.getElementById("nome").value
  var email = document.getElementById("email").value
  var cep = document.getElementById("cep").value
  var rua = document.getElementById("rua").value
  var numero = document.getElementById("numero").value
  var complemento = document.getElementById("complemento").value
  var bairro = document.getElementById("bairro").value
  var cidade = document.getElementById("cidade").value
  var data = document.getElementById("data").value

  if(empty(nome)) {
    document.getElementById("msgEmail").innerHTML="E-mail pag-seguro *";
    document.getElementById("msgCep").innerHTML="CEP *";
    document.getElementById("msgRua").innerHTML="Rua *";
    document.getElementById("msgNumero").innerHTML="Numero *";
    document.getElementById("msgBairro").innerHTML="Bairro *";
    document.getElementById("msgCidade").innerHTML="Cidade *";
    document.getElementById("msgData").innerHTML="Data *";
    document.getElementById("msgNome").innerHTML="<font color='red'>Nome inválido</font>"
    return false
  } else if(empty(email)) {
    document.getElementById("msgNome").innerHTML="Nome Completo *";
    document.getElementById("msgCep").innerHTML="CEP *";
    document.getElementById("msgRua").innerHTML="Rua *";
    document.getElementById("msgNumero").innerHTML="Numero *";
    document.getElementById("msgBairro").innerHTML="Bairro *";
    document.getElementById("msgCidade").innerHTML="Cidade *";
    document.getElementById("msgData").innerHTML="Data *";
    document.getElementById("msgEmail").innerHTML="<font color='red'>Email inválido</font>"
    return false
  } else if(empty(cep) || cep.length < 8) {
    document.getElementById("msgNome").innerHTML="Nome Completo *";
    document.getElementById("msgEmail").innerHTML="E-mail pag-seguro *";
    document.getElementById("msgRua").innerHTML="Rua *";
    document.getElementById("msgNumero").innerHTML="Numero *";
    document.getElementById("msgBairro").innerHTML="Bairro *";
    document.getElementById("msgCidade").innerHTML="Cidade *";
    document.getElementById("msgData").innerHTML="Data *";
    document.getElementById("msgCep").innerHTML="<font color='red'>CEP inválido</font>"
    return false
  } else if(empty(rua)) {
    document.getElementById("msgNome").innerHTML="Nome Completo *";
    document.getElementById("msgEmail").innerHTML="E-mail pag-seguro *";
    document.getElementById("msgNumero").innerHTML="Numero *";
    document.getElementById("msgBairro").innerHTML="Bairro *";
    document.getElementById("msgCidade").innerHTML="Cidade *";
    document.getElementById("msgData").innerHTML="Data *";
    document.getElementById("msgCep").innerHTML="CEP *";
    document.getElementById("msgRua").innerHTML="<font color='red'>Rua inválida</font>"
    return false
  } else if(empty(numero)) {
    document.getElementById("msgNome").innerHTML="Nome Completo *";
    document.getElementById("msgEmail").innerHTML="E-mail pag-seguro *";
    document.getElementById("msgCep").innerHTML="CEP *";
    document.getElementById("msgBairro").innerHTML="Bairro *";
    document.getElementById("msgCidade").innerHTML="Cidade *";
    document.getElementById("msgData").innerHTML="Data *";
    document.getElementById("msgRua").innerHTML="Rua *";
    document.getElementById("msgNumero").innerHTML="<font color='red'>N° inválido</font>"
    return false
  } else if(empty(bairro)) {
    document.getElementById("msgNome").innerHTML="Nome Completo *";
    document.getElementById("msgEmail").innerHTML="E-mail pag-seguro *";
    document.getElementById("msgCep").innerHTML="CEP *";
    document.getElementById("msgRua").innerHTML="Rua *";
    document.getElementById("msgCidade").innerHTML="Cidade *";
    document.getElementById("msgData").innerHTML="Data *";
    document.getElementById("msgNumero").innerHTML="Numero *";
    document.getElementById("msgBairro").innerHTML="<font color='red'>Bairro inválido</font>"
    return false
  } else if(empty(cidade)) {
    document.getElementById("msgNome").innerHTML="Nome Completo *";
    document.getElementById("msgEmail").innerHTML="E-mail pag-seguro *";
    document.getElementById("msgCep").innerHTML="CEP *";
    document.getElementById("msgRua").innerHTML="Rua *";
    document.getElementById("msgNumero").innerHTML="Numero *";
    document.getElementById("msgData").innerHTML="Data *";
    document.getElementById("msgBairro").innerHTML="Bairro *";
    document.getElementById("msgCidade").innerHTML="<font color='red'>Cidade inválida</font>"
    return false
  } else if(empty(data)) {
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
  create({nome, email, cep, rua, numero, cidade, data}, 'clientes');
}
function enviarDados() {
  var nome = document.getElementById("nome")
  var email = document.getElementById("email")
  var cep = document.getElementById("cep")
  var rua = document.getElementById("rua")
  var numero = document.getElementById("numero")
  var bairro = document.getElementById("bairro")
  var cidade = document.getElementById("cidade")
  var data = document.getElementById("data")
  if(nome.value == "") {
    document.getElementById("msgEmail").innerHTML="E-mail pag-seguro *";
    document.getElementById("msgCep").innerHTML="CEP *";
    document.getElementById("msgRua").innerHTML="Rua *";
    document.getElementById("msgNumero").innerHTML="Numero *";
    document.getElementById("msgBairro").innerHTML="Bairro *";
    document.getElementById("msgCidade").innerHTML="Cidade *";
    document.getElementById("msgData").innerHTML="Data *";
    document.getElementById("msgNome").innerHTML="<font color='red'>Nome inválido</font>"
    return false
  } else if(email.value == "") {
    document.getElementById("msgNome").innerHTML="Nome Completo *";
    document.getElementById("msgCep").innerHTML="CEP *";
    document.getElementById("msgRua").innerHTML="Rua *";
    document.getElementById("msgNumero").innerHTML="Numero *";
    document.getElementById("msgBairro").innerHTML="Bairro *";
    document.getElementById("msgCidade").innerHTML="Cidade *";
    document.getElementById("msgData").innerHTML="Data *";
    document.getElementById("msgEmail").innerHTML="<font color='red'>Email inválido</font>"
    return false
  } else if(cep.value == "") {
    document.getElementById("msgNome").innerHTML="Nome Completo *";
    document.getElementById("msgEmail").innerHTML="E-mail pag-seguro *";
    document.getElementById("msgRua").innerHTML="Rua *";
    document.getElementById("msgNumero").innerHTML="Numero *";
    document.getElementById("msgBairro").innerHTML="Bairro *";
    document.getElementById("msgCidade").innerHTML="Cidade *";
    document.getElementById("msgData").innerHTML="Data *";
    document.getElementById("msgCep").innerHTML="<font color='red'>CEP inválido</font>"
    return false
  } else if(rua.value == "") {
    document.getElementById("msgNome").innerHTML="Nome Completo *";
    document.getElementById("msgEmail").innerHTML="E-mail pag-seguro *";
    document.getElementById("msgNumero").innerHTML="Numero *";
    document.getElementById("msgBairro").innerHTML="Bairro *";
    document.getElementById("msgCidade").innerHTML="Cidade *";
    document.getElementById("msgData").innerHTML="Data *";
    document.getElementById("msgCep").innerHTML="CEP *";
    document.getElementById("msgRua").innerHTML="<font color='red'>Rua inválida</font>"
    return false
  } else if(numero.value == "") {
    document.getElementById("msgNome").innerHTML="Nome Completo *";
    document.getElementById("msgEmail").innerHTML="E-mail pag-seguro *";
    document.getElementById("msgCep").innerHTML="CEP *";
    document.getElementById("msgBairro").innerHTML="Bairro *";
    document.getElementById("msgCidade").innerHTML="Cidade *";
    document.getElementById("msgData").innerHTML="Data *";
    document.getElementById("msgRua").innerHTML="Rua *";
    document.getElementById("msgNumero").innerHTML="<font color='red'>N° inválido</font>"
    return false
  } else if(bairro.value == "") {
    document.getElementById("msgNome").innerHTML="Nome Completo *";
    document.getElementById("msgEmail").innerHTML="E-mail pag-seguro *";
    document.getElementById("msgCep").innerHTML="CEP *";
    document.getElementById("msgRua").innerHTML="Rua *";
    document.getElementById("msgCidade").innerHTML="Cidade *";
    document.getElementById("msgData").innerHTML="Data *";
    document.getElementById("msgNumero").innerHTML="Numero *";
    document.getElementById("msgBairro").innerHTML="<font color='red'>Bairro inválido</font>"
    return false
  } else if(cidade.value == "") {
    document.getElementById("msgNome").innerHTML="Nome Completo *";
    document.getElementById("msgEmail").innerHTML="E-mail pag-seguro *";
    document.getElementById("msgCep").innerHTML="CEP *";
    document.getElementById("msgRua").innerHTML="Rua *";
    document.getElementById("msgNumero").innerHTML="Numero *";
    document.getElementById("msgData").innerHTML="Data *";
    document.getElementById("msgBairro").innerHTML="Bairro *";
    document.getElementById("msgCidade").innerHTML="<font color='red'>Cidade inválida</font>"
    return false
  } else if(data.value == "") {
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
}
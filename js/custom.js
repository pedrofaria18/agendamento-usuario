// FUNÇÃO PARA VERIFICAÇÃO DE INPUTS VAZIOS
function empty(v){
  if(v == null || v == 0 || v == '' || v==""){
    return true;
  }else{
    return false;
  }
}

// FUNÇÃO PARA VERIFICAÇÃO DE CPF
function validarCPF(cpf) {	
	cpf = cpf.replace(/[^\d]+/g,'');	
	if(cpf == '') return true;	
	// Elimina CPFs invalidos conhecidos	
	if (cpf.length != 11 || 
		cpf == "00000000000" || 
		cpf == "11111111111" || 
		cpf == "22222222222" || 
		cpf == "33333333333" || 
		cpf == "44444444444" || 
		cpf == "55555555555" || 
		cpf == "66666666666" || 
		cpf == "77777777777" || 
		cpf == "88888888888" || 
		cpf == "99999999999")
			return true;		
	// Valida 1o digito	
	add = 0;	
	for (i=0; i < 9; i ++)		
		add += parseInt(cpf.charAt(i)) * (10 - i);	
		rev = 11 - (add % 11);	
		if (rev == 10 || rev == 11)		
			rev = 0;	
		if (rev != parseInt(cpf.charAt(9)))		
			return true;		
	// Valida 2o digito	
	add = 0;	
	for (i = 0; i < 10; i ++)		
		add += parseInt(cpf.charAt(i)) * (11 - i);	
	rev = 11 - (add % 11);	
	if (rev == 10 || rev == 11)	
		rev = 0;	
	if (rev != parseInt(cpf.charAt(10)))
		return true;		
	return false;   
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
  var cpf = document.getElementById("cpf").value
  var recipient_email = document.getElementById("email").value
  var cep = document.getElementById("cep").value
  var address = document.getElementById("rua").value
  var address_number = document.getElementById("numero").value
  var address_complement = document.getElementById("complemento").value
  var neighborhood = document.getElementById("bairro").value
  var city = document.getElementById("cidade").value
  var data = document.getElementById("data").value
  var schedule = document.getElementById("horario").value

  // VALIDAR NOME
  if(empty(recipient_name)) {
    document.getElementById("msgEmail").innerHTML="E-mail pag-seguro *";
    document.getElementById("msgCep").innerHTML="CEP *";
    document.getElementById("msgRua").innerHTML="Rua *";
    document.getElementById("msgNumero").innerHTML="Numero *";
    document.getElementById("msgBairro").innerHTML="Bairro *";
    document.getElementById("msgCidade").innerHTML="Cidade *";
    document.getElementById("msgData").innerHTML="Data para recebimento do kit *";
    document.getElementById("msgHorario").innerHTML="Horário para recebimento do kit *";
    document.getElementById("msgCpf").innerHTML="CPF *";
    document.getElementById("msgNome").innerHTML="<font color='red'>Nome inválido</font>";
    return false
  } 
  // VALIDAR CPF
  else if(empty(cpf) || validarCPF(cpf)) {
    document.getElementById("msgNome").innerHTML="Nome Completo *";
    document.getElementById("msgCep").innerHTML="CEP *";
    document.getElementById("msgRua").innerHTML="Rua *";
    document.getElementById("msgNumero").innerHTML="Numero *";
    document.getElementById("msgBairro").innerHTML="Bairro *";
    document.getElementById("msgCidade").innerHTML="Cidade *";
    document.getElementById("msgData").innerHTML="Data para recebimento do kit *";
    document.getElementById("msgHorario").innerHTML="Horário para recebimento do kit *";
    document.getElementById("msgEmail").innerHTML="E-mail pag-seguro *";
    document.getElementById("msgCpf").innerHTML="<font color='red'>CPF inválido</font>";
    return false
  }
  // VALIDAR EMAIL
  else if(empty(recipient_email) || !validar.test(recipient_email)) {
    document.getElementById("msgNome").innerHTML="Nome Completo *";
    document.getElementById("msgCpf").innerHTML="CPF *";
    document.getElementById("msgCep").innerHTML="CEP *";
    document.getElementById("msgRua").innerHTML="Rua *";
    document.getElementById("msgNumero").innerHTML="Numero *";
    document.getElementById("msgBairro").innerHTML="Bairro *";
    document.getElementById("msgCidade").innerHTML="Cidade *";
    document.getElementById("msgData").innerHTML="Data para recebimento do kit *";
    document.getElementById("msgHorario").innerHTML="Horário para recebimento do kit *";
    document.getElementById("msgEmail").innerHTML="<font color='red'>Email inválido</font>"
    return false
  }
  // VALIDAR CEP
  else if(empty(cep) || cep.length < 8) {
    document.getElementById("msgNome").innerHTML="Nome Completo *";
    document.getElementById("msgCpf").innerHTML="CPF *";
    document.getElementById("msgEmail").innerHTML="E-mail pag-seguro *";
    document.getElementById("msgRua").innerHTML="Rua *";
    document.getElementById("msgNumero").innerHTML="Numero *";
    document.getElementById("msgBairro").innerHTML="Bairro *";
    document.getElementById("msgCidade").innerHTML="Cidade *";
    document.getElementById("msgData").innerHTML="Data para recebimento do kit *";
    document.getElementById("msgHorario").innerHTML="Horário para recebimento do kit *";
    document.getElementById("msgCep").innerHTML="<font color='red'>CEP inválido</font>"
    return false
  }
  // VALIDAR RUA 
  else if(empty(address)) {
    document.getElementById("msgNome").innerHTML="Nome Completo *";
    document.getElementById("msgCpf").innerHTML="CPF *";
    document.getElementById("msgEmail").innerHTML="E-mail pag-seguro *";
    document.getElementById("msgNumero").innerHTML="Numero *";
    document.getElementById("msgBairro").innerHTML="Bairro *";
    document.getElementById("msgCidade").innerHTML="Cidade *";
    document.getElementById("msgData").innerHTML="Data para recebimento do kit *";
    document.getElementById("msgCep").innerHTML="CEP *";
    document.getElementById("msgHorario").innerHTML="Horário para recebimento do kit *";
    document.getElementById("msgRua").innerHTML="<font color='red'>Rua inválida</font>"
    return false
  } 
  // VALIDAR NÚMERO
  else if(empty(address_number)) {
    document.getElementById("msgNome").innerHTML="Nome Completo *";
    document.getElementById("msgCpf").innerHTML="CPF *";
    document.getElementById("msgEmail").innerHTML="E-mail pag-seguro *";
    document.getElementById("msgCep").innerHTML="CEP *";
    document.getElementById("msgBairro").innerHTML="Bairro *";
    document.getElementById("msgCidade").innerHTML="Cidade *";
    document.getElementById("msgData").innerHTML="Data para recebimento do kit *";
    document.getElementById("msgRua").innerHTML="Rua *";
    document.getElementById("msgHorario").innerHTML="Horário para recebimento do kit *";
    document.getElementById("msgNumero").innerHTML="<font color='red'>N° inválido</font>"
    return false
  }
  // VALIDAR BAIRRO 
  else if(empty(neighborhood)) {
    document.getElementById("msgNome").innerHTML="Nome Completo *";
    document.getElementById("msgCpf").innerHTML="CPF *";
    document.getElementById("msgEmail").innerHTML="E-mail pag-seguro *";
    document.getElementById("msgCep").innerHTML="CEP *";
    document.getElementById("msgRua").innerHTML="Rua *";
    document.getElementById("msgCidade").innerHTML="Cidade *";
    document.getElementById("msgData").innerHTML="Data para recebimento do kit *";
    document.getElementById("msgNumero").innerHTML="Numero *";
    document.getElementById("msgHorario").innerHTML="Horário para recebimento do kit *";
    document.getElementById("msgBairro").innerHTML="<font color='red'>Bairro inválido</font>"
    return false
  }
  // VALIDAR CIDADE 
  else if(empty(city)) {
    document.getElementById("msgNome").innerHTML="Nome Completo *";
    document.getElementById("msgCpf").innerHTML="CPF *";
    document.getElementById("msgEmail").innerHTML="E-mail pag-seguro *";
    document.getElementById("msgCep").innerHTML="CEP *";
    document.getElementById("msgRua").innerHTML="Rua *";
    document.getElementById("msgNumero").innerHTML="Numero *";
    document.getElementById("msgData").innerHTML="Data para recebimento do kit *";
    document.getElementById("msgBairro").innerHTML="Bairro *";
    document.getElementById("msgHorario").innerHTML="Horário para recebimento do kit *";
    document.getElementById("msgCidade").innerHTML="<font color='red'>Cidade inválida</font>"
    return false
  } 
  // VALIDAR DATA
  else if(empty(data)) {
    document.getElementById("msgNome").innerHTML="Nome Completo *";
    document.getElementById("msgCpf").innerHTML="CPF *";
    document.getElementById("msgEmail").innerHTML="E-mail pag-seguro *";
    document.getElementById("msgCep").innerHTML="CEP *";
    document.getElementById("msgRua").innerHTML="Rua *";
    document.getElementById("msgNumero").innerHTML="Numero *";
    document.getElementById("msgBairro").innerHTML="Bairro *";
    document.getElementById("msgCidade").innerHTML="Cidade *";
    document.getElementById("msgHorario").innerHTML="Horário para recebimento do kit *";
    document.getElementById("msgData").innerHTML="<font color='red'>Data inválida</font>"
    return false
  }
  // VALIDAR HORÁRIO
  else if(empty(schedule)) {
    document.getElementById("msgNome").innerHTML="Nome Completo *";
    document.getElementById("msgCpf").innerHTML="CPF *";
    document.getElementById("msgEmail").innerHTML="E-mail pag-seguro *";
    document.getElementById("msgCep").innerHTML="CEP *";
    document.getElementById("msgRua").innerHTML="Rua *";
    document.getElementById("msgNumero").innerHTML="Numero *";
    document.getElementById("msgBairro").innerHTML="Bairro *";
    document.getElementById("msgCidade").innerHTML="Cidade *";
    document.getElementById("msgData").innerHTML="Data para recebimento do kit *";
    document.getElementById("msgHorario").innerHTML="<font color='red'>Horário inválido</font>";
    return false
  }
  alert("Agendamento feito com sucesso");

  // ENVIAR OS DADOS PARA firebase.js
  create({recipient_name, cpf, recipient_email, cep, address, address_number, address_complement,neighborhood, city, schedule}, data);
}
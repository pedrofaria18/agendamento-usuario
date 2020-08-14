function limpa_formulário_cep() {
  document.getElementById('rua').value=("");
  document.getElementById('bairro').value=("");
  document.getElementById('cidade').value=("");
}

function meu_callback(conteudo) {
  if (!("erro" in conteudo)) {
    document.getElementById('rua').value=(conteudo.logradouro);
    document.getElementById('bairro').value=(conteudo.bairro);
    document.getElementById('cidade').value=(conteudo.localidade);
  } else {
    limpa_formulário_cep();
  }
}
      
function pesquisacep(valor) {
  var cep = valor.replace(/\D/g, '');

  if (cep != "") {
    var validacep = /^[0-9]{8}$/;

    if(validacep.test(cep)) {
      document.getElementById('rua').value="...";
      document.getElementById('bairro').value="...";
      document.getElementById('cidade').value="...";

      var script = document.createElement('script');
      script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';
      document.body.appendChild(script);

    } else {
      limpa_formulário_cep();
    }
  } else {
    limpa_formulário_cep();
  }
};
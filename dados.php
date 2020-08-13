<!DOCTYPE html>
<html lang="pt_br">
<head>
  <meta charset="UTF-8">
  <title>Dados</title>
</head>
<body>

<?php
  $nome = $_POST["nome"];
  $email = $_POST["email"];
  $cep = $_POST["cep"];
  $rua = $_POST["rua"];
  $numero = $_POST["numero"];
  $complemento = $_POST["complemento"];
  $bairro = $_POST["bairro"];
  $cidade = $_POST["cidade"];
  $data = $_POST["data"];

  $endereco = get_endereco($cep);

  function get_endereco($cep){
    $url = "http://viacep.com.br/ws/$cep/xml/";
    $xml = simplexml_load_file($url);
    return $xml;
  }
  ?>

  <div>
    <h3>Dados Pessoais</h3>
    <p>Nome completo: <?php echo !empty($nome) ? "{$nome}" : "Favor digitar seu nome"; ?></p>
    <p>Email: <?php echo (!empty($email) and filter_var($email, FILTER_VALIDATE_EMAIL)) ? "{$email}" : "Favor digitar seu email ou um email válido"; ?></p>
  </div>
  <div>
    <h3>Endereço de entrega</h3>
    <p>CEP: <?php echo (strlen($cep) >= 8 and strlen($cep) <= 8 and filter_var($cep, FILTER_VALIDATE_INT)) ? "{$endereco->cep}": "Preencha o campo cep somente com números ou um cep válido.";?></p>
    <p>Rua: <?php echo ($endereco->logradouro); ?></p>
    <p>Número: <?php echo ($numero); ?></p>
    <p>Complemento: <?php echo ($complemento); ?></p>
    <p>Bairro: <?php echo ($endereco->bairro); ?></p>
    <p>Cidade: <?php echo ($endereco->localidade); ?></p>
  </div>
  <div>
    <h3>Data de recebimento</h3>
    <p>Data: <?php echo !empty($data) ? "{$data}" : "Favor digitar a data"; ?></p>
  </div>
</body>
</html>


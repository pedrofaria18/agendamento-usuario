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
  ?>

  <div>
    <h3>Dados Pessoais</h3>
    <p>Nome completo: <?php echo $nome ?></p>
    <p>Email: <?php echo $email ?></p>
  </div>
  <div>
    <h3>Endereço de entrega</h3>
    <p>CEP: <?php echo $cep ?></p>
    <p>Rua: <?php echo $rua ?></p>
    <p>Número: <?php echo $numero ?></p>
    <p>Complemento: <?php echo $complemento ?></p>
    <p>Bairro: <?php echo $bairro ?></p>
    <p>Cidade: <?php echo $cidade ?></p>
  </div>
  <div>
    <h3>Data de recebimento</h3>
    <p>Data: <?php echo $data ?></p>
  </div>
</body>
</html>


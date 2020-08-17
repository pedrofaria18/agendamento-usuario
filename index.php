<!doctype html>
<html lang="pt_br">
  <head>
    <title>Agendamento</title>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="css/style.css">
    <link href="http://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.3.0/css/datepicker.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  </head>
  <body>

    <h1>AGENDAMENTO</h1>

    <form action="#" method="post">
      <section class="dados">
        <legend>Dados Pessoais</legend>

        <div class="form-group">
          <label id="msgNome" for="nome">Nome Completo *</label>
          <input type="text" class="form-control" id="nome" name="nome">
        </div>
        <div class="form-group">
          <label id="msgEmail" for="email">E-mail pag-seguro *</label>
          <input type="email" class="form-control" id="email" name="email">
        </div>
      </section>

      <section class="endereco">
        <legend>Endereço para entrega</legend>

        <div class="form-group">
          <label id="msgCep" for="cep">CEP *</label> 
          <input type="text" class="form-control" id="cep" name="cep" onblur="pesquisacep(this.value);">
        </div>
        <section class="rua_numero_complemento">
          <div class="form-group">
            <label id="msgRua" for="rua">Rua *</label>
            <input type="text" class="form-control" id="rua" name="rua">
          </div>
          <div class="form-group">
            <label id="msgNumero" for="numero">Número *</label>
            <input type="text" class="form-control" id="numero" name="numero">
          </div>
          <div class="form-group">
            <label for="complemento">Complemento</label>
            <input type="text" class="form-control" id="complemento" name="complemento">
          </div>
        </section>
        <section class="bairro_cidade">
          <div class="form-group">
            <label id="msgBairro" for="bairro">Bairro *</label>
            <input type="text" class="form-control" id="bairro" name="bairro">
          </div>
          <div class="form-group">
            <label id="msgCidade" for="cidade">Cidade *</label>
            <input type="text" class="form-control" id="cidade" name="cidade">
          </div>
        </section>
      </section>

      <section class="data">
        <legend>Data</legend>

        <div class="form-group">
          <label id="msgData" for="data">Data para recebimento do kit (somente aos sábados) *</label>
          <input class="form-control" data-provide="datepicker" name="data" id="data"/> 
        </div>
        <div class="form-group">
  
          <label id="msgHorario" for="horario">Horário para recebimento do kit *</label>
          <select id="horario" name="horario" class="form-control">
            <option selected></option>
            <option value="manha">MANHÃ</option>
            <option value="tarde">TARDE</option>
          </select>
        </div>
      </section>

      <button type="submit" id="btnSubmit" class="btn btn-primary">Enviar</button>
    </form>
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.3.0/js/bootstrap-datepicker.js"></script>

    <script src="https://www.gstatic.com/firebasejs/3.3.0/firebase.js"></script>

    <script src="js/firebase.js"></script>
    <script src="js/date.js"></script>
    <script src="js/cep.js"></script>
    <script src="js/custom.js?<? rand(1,9999999) ?>"></script>
  </body>
</html>
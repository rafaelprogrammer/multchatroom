module.exports.iniciaChat = function(application, req, resp){

  var dadosForm = req.body;

  req.assert('apelido', 'Nome ou apelido é obrigatório').notEmpty();
  req.assert('apelido', 'Nome ou apelido deve conter entre 3 e 15 carateres').len(3,15);

  var erros = req.validationErrors();

  if(erros){
    resp.render('index',{validacao: erros});
    return;
  }

  resp.render('chat');
}

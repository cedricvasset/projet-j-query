$(function(){
  $('#commande').hide();
  $('#panier').click(function(){
    $('#basket').show();
  });
  $('#close').click(function(){
    $('#basket').hide();
  });
  $('#closex').click(function(){
    $('#basket').hide();
  });
//ajout des hide et show sur les boutons PC Fixe, PC Portables, Tablettes(par steph)
$('#PCFixe').click(function(){
  $('.fixe').show();
  $('.portable').hide();
  $('.tab').hide();
  $('.accueil').hide();
});
$('#PCPortable').click(function(){
  $('.portable').show();
  $('.fixe').hide();
  $('.tab').hide();
  $('.accueil').hide();
});
$('#Tab').click(function(){
  $('.fixe').hide();
  $('.portable').hide();
  $('.tab').show();
  $('.accueil').hide();
});
//fonction qui ajoute une ligne
$('.ajout').click(function(){
$('#commande').clone().appendTo($('.modal-body'));

})
//ajouter du contenu des articles
$('#ajoutf1').click(function(){
  $('#commande').show();
$('#fixe1').clone().appendTo($('.articlename'));
$('#prixfixe1').clone().appendTo($('.price'));
});
$('#ajoutf2').click(function(){
$('#fixe2').clone().appendTo($('.articlename'));
$('#prixfixe2').clone().appendTo($('.price'));
});



});

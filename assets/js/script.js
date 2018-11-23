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
});
//ajouter du contenu des articles
$('#ajoutf1').click(function(){
  $('#commande').show();
$('#fixe1').clone().appendTo($('.modal-body'));
$('#prixfixe1').clone().appendTo($('.modal-body'));

});
$('#ajoutf2').click(function(){
    $('#commande').show();
$('#fixe2').clone().appendTo($('.modal-body'));
$('#prixfixe2').clone().appendTo($('.modal-body'));
});
// calcul prix Panier
$('option').click(function(){
  $('.soustotal').empty();
var select = $('#select').val();
var prix = parseInt($('#prixfixe1').text());
var result = (select*prix);
$('.soustotal').append(result);
$('.total').empty();
$('.total').append(result);

});
});

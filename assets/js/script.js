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
  var basket = $(this).parent().clone();
  console.log(basket);
$('.modal-body').append((basket));
  $('.modal-body .img').remove();
  $('.modal-body .ajout').remove();
  $('.modal-body .quantity').show();
  $('.modal-body a').show();

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
consol.log(result);
});
});

$(function(){
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
});

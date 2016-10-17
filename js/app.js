$(document).foundation()

$('[data-toggle-dia]').click(function(ev) {
  var panel = $(this).data('toggleDia');
  $('#lineup-tabs').foundation('selectTab', panel);
});

var $offCanvas = $('#offCanvas');
var $sticky = $('#sticky');

$offCanvas.find('li').click(function(ev) {
  $offCanvas.foundation('close');
  setTimeout(function() {
    $sticky.css('left', '0px');
  }, 300);
});

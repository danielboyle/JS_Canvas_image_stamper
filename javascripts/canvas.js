$(function() {
  var canvas = $('canvas')[0],
      ctx = canvas.getContext('2d'),
      method;

  var drawing_methods = {
    square: function(e) {
      var side = 30,
          x = e.offsetX - (side / 2),
          y = e.offsetY - (side / 2);

      ctx.fillRect(x, y, side, side);
    },
    circle: function(e) {
      var radius = 15,
          x = e.offsetX - (radius / 2),
          y = e.offsetY - (radius / 2);

      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI);
      ctx.fill();
      ctx.closePath();
    }
  };

  $('.drawing-method').on('click', function(e) {
    e.preventDefault();
    var $e = $(this),
        class_name = 'active';

    $e.closest('ul').find('.' + class_name).removeClass(class_name);
    $e.addClass(class_name);
    method = $e.attr('data-method');
  }).eq(0).click();

  $('canvas').on('click', function(e) {
    drawing_methods[method](e);
  });
});
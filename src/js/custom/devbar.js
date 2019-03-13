
(function () {

  //grid width and height
  var bw = 2400;
  var bh = 2400;
  
  //size of canvas
  var cw = bw + 1;
  var ch = bh + 1;

  var canvas = $('<canvas/>').addClass('grid').attr({width: cw, height: ch}).appendTo('body');

  var context = canvas.get(0).getContext("2d");

  function drawBoard(){
      for (var x = 0; x <= bw; x += 8) {

          context.moveTo(0.5 + x, 0);
          context.lineTo(0.5 + x, bh);
      }

      for (var x = 0; x <= bh; x += 8) {
          context.moveTo(0, 0.5 + x);
          context.lineTo(bw, 0.5 + x);
      }

      context.strokeStyle = "red";
      context.lineWidth = .25;
      context.stroke();
  }

  drawBoard();

})();


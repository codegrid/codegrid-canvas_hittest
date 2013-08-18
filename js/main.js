(function(){

  var canvas = document.createElement('canvas');
  // var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var map = document.getElementById("map");
  var img = document.createElement('img');
  var href = map.getAttribute('data-href');
  canvas.width = Number(map.getAttribute('data-width'));
  canvas.height = Number(map.getAttribute('data-height'));
  img.src = map.getAttribute('data-test');

  function hitTest(x, y, img) {
    ctx.drawImage(img, 0, 0);
    var px = ctx.getImageData(x, y, 1, 1);
    var red = px.data[0];
    return red < 128;
  }

  map.addEventListener('touchstart', function(e) {
    var pageX = e.touches[0].pageX;
    var pageY = e.touches[0].pageY;
    var baseX = this.offsetLeft;
    var baseY = this.offsetTop;
    var x = pageX - baseX;
    var y = pageY - baseY;

    if (hitTest(x, y, img)) {
      location.href = href;
    }
  });

}());


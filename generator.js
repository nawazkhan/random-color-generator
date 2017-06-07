ChangeBodyColor();

function ChangeBodyColor () {
  var stop = false;
  document.body.style.backgroundColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
  var startTimer = setTimeout(function() {
  stop = true;
  clearInterval(startTimer);
  }, 10000);

  changeColor();

  function changeColor () {
    var clearId = setTimeout(function() {
      if (stop) {
        clearInterval(clearId);
        return;
      }
     document.body.style.backgroundColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
     changeColor();
    }, 1000);
  }
}

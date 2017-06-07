ChangeBodyColor();

function ChangeBodyColor () {
  var colors = ['red', 'green', 'blue', 'lightblue', 'lightgreen', 'pink', 'yellow', 'black', 'violet'];
  var stop = false;
  document.body.style.backgroundColor = 'maroon';
  var startTimer = setTimeout(function() {
  stop = true;
  clearInterval(startTimer);
  }, 10000);

  var rand, i = 0;
  changeColor();

  function changeColor () {
    var clearId = setTimeout(function() {
      if (stop) {
        clearInterval(clearId);
        return;
      }

      i++;
      rand = Math.floor(Math.random() * (colors.length - i));
      console.log('rand num: ', rand);

      if (rand < colors.length - i) {
       document.body.style.backgroundColor = colors[rand];
        colors[rand] = colors[colors.length - i];
      } else {
       document.body.style.backgroundColor = colors[rand];
      }
      changeColor();
    }, 1000);
    }
}

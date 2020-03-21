//diable the play button untill numbers are shown.
function init() {
  document.getElementById("play").disabled = true;
}

//play function evaluates if you are pressing the numbers in order.
function play() {
  document.getElementById("play").disabled = true;
	gameOver = false;
  score = 0;
  for (var i = 0; i < 10; i++) {
    document.getElementById(i).style.color = "black";
  }
  document.getElementById('score').innerHTML = "Score : " + 0;
}
var check = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var c = 0;
var score = 0;
var gameOver = false;

function showagain(idx) {
  if (gameOver == false) {
    c = 0;
    if (document.getElementById(idx).style.color == "white") {
      score = 0;
      return;
    }

    for (var i = 0; i < idx; i++) {
      if (check[i] == 1) {
        c++;
      }
    }
    if (c == idx) {
      document.getElementById(idx).style.color = "white";
      check[idx] = 1;
      score++;
      document.getElementById('score').innerHTML = "Score : " + score;
    } else {
      gameOver = true;
      document.getElementById(idx).style.color = "white";
      document.getElementById(idx).style.backgroundColor = "red";
			check = [];
      alert("Game Over!");

    }
  }
}

//Shows the numbers at random places on screen.
function show() {
	gameOver = false;
  score = 0;
  var l = 0;
  var t = 0;
  var oldl = l;
  var oldt = t;
  var tt = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var ll = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (var i = 0; i < 10; i++) {
    var fl = 0;
    while (1) {
      fl = 0;
      l = (Math.floor(Math.random() * 1000)) % 1000 + 101;
      t = (Math.floor(Math.random() * 1000)) % 450 + 101;
      //alert(l + "and " + t + "and " + oldl + " " + oldt);
      for (var j = 0; j < i; j++) {
        oldt = tt[j];
        oldl = ll[j];
        //alert(l + "and " + t + "and " + oldl + " " + oldt);
        if ((l < (oldl - 100)) || (t > (oldt + 100)) || (t < (oldt - 100)) || (l > (oldl + 100))) {
          fl++;
        }
      }
      if (fl == i || i == 0) {
        //alert("success");
        break;
      }
    }
    tt[i] = t;
    ll[i] = l;
    var bxid = i;
    document.getElementById(bxid).style.left = l;
    document.getElementById(bxid).style.backgroundColor = "black";
    document.getElementById(bxid).style.color = "white";
    document.getElementById(bxid).style.width = "80px";
    document.getElementById(bxid).style.height = "80px";
    document.getElementById(bxid).style.top = t;
    document.getElementById(bxid).style.position = "absolute";
  }

  //enable the play button
  document.getElementById("play").disabled = false;
}

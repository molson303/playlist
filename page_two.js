var a = document.getElementById("pic4")
var b = document.getElementById("pic5")
var c = document.getElementById("pic6")
var d = document.getElementById("pic7")
var e = document.getElementById("pic8")
var button = document.getElementById('buttoncolor2')

httpRequest = new XMLHttpRequest();
var container = document.getElementById("pic4")

document.addEventListener('DOMContentLoaded', function() {
    event.preventDefault();
  httpRequest.onreadystatechange = function(){
if (httpRequest.readyState === 4) {
  if(httpRequest.status < 400) {
    var objectOne = JSON.parse(httpRequest.responseText);
      for (var i = 0; i < objectOne.results.length; i++) {
        var oneA = objectOne.results[0].cover_art;
          a.innerHTML = '<img src=images/' + oneA + '>'
        var twoB = objectOne.results[1].cover_art;
          b.innerHTML = '<img src=images/' + twoB + '>'
        var threeC = objectOne.results[2].cover_art;
          c.innerHTML = '<img src=images/' + threeC + '>'
        var fourD = objectOne.results[3].cover_art;
          d.innerHTML = '<img src=images/' + fourD + '>'
        var fiveE = objectOne.results[4].cover_art;
          e.innerHTML = '<img src=images/' + fiveE + '>'



      

          }
        }
      }

    }


httpRequest.open('GET', 'https://lit-fortress-6467.herokuapp.com/object');
httpRequest.send();

})

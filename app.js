var album1 = document.getElementById('pic1pos')
var album2 = document.getElementById('pic2pos')
var album3 = document.getElementById('pic3pos')
var httpRequest = new XMLHttpRequest();
var container = document.getElementById("pic1pos")



document.addEventListener('DOMContentLoaded', function() {
  event.preventDefault();
httpRequest.onreadystatechange = function(){
   var bucket = []
      if (httpRequest.readyState === 4) {
         if(httpRequest.status < 400) {
           var object = JSON.parse(httpRequest.responseText);
           for (var i = 0; i < object.results.length; i++) {
             //was line 18 needed?
             bucket.push(object.results[i].cover_art)
             var one = Math.floor(Math.random()*object.results.length);
             var two = Math.floor(Math.random()*object.results.length);
             var three = Math.floor(Math.random()*object.results.length);
             album1.innerHTML = '<img src=images/' + object.results[one].cover_art + '>'
             album2.innerHTML = '<img src=images/' + object.results[two].cover_art + '>'
             album3.innerHTML = '<img src=images/' + object.results[three].cover_art + '>'
             //no container was ever used on this. content was pushed directly back
             //to the existing node. CHANGE ALL TO CONTAINER TO SEE WHAT HAPPENS



            }
           }
         }
       }

     httpRequest.open('GET', 'https://lit-fortress-6467.herokuapp.com/object');
     httpRequest.send();



}, false);

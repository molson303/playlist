
var clear = document.getElementById('buttoncolor1')
var submit = document.getElementById('buttoncolor2')
var container = document.getElementById("pic4")
var bucket = document.getElementById('textboxarea')
httpRequest = new XMLHttpRequest();

document.addEventListener('DOMContentLoaded', function() {
    event.preventDefault();
  httpRequest.onreadystatechange = function(){
if (httpRequest.readyState === 4) {
  if(httpRequest.status < 400) {
    var objectOne = JSON.parse(httpRequest.responseText).results;

function clicker(pics){
  pics.addEventListener('click', function(){
  var newNode = document.createElement('div')
  bucket.appendChild(newNode)
  newNode.innerHTML = pics.id
  })
}

objectOne.forEach(function(x,i){
var choices = document.createElement('img');
choices.classList.add('coverPics');
choices.id = objectOne[i].artist + ": " + objectOne[i].title
container.appendChild(choices);
choices.src = "images/" + objectOne[i].cover_art;
clicker(choices);
          })
        }
      }
    }
httpRequest.open('GET', 'https://lit-fortress-6467.herokuapp.com/object');
httpRequest.send();
})

clear.addEventListener("click", function(){
bucket.innerHTML = "";
})

submit.addEventListener("click", function(){
  var postRequest = new XMLHttpRequest();
  postRequest.onreadystatechange = function(){
    if (postRequest.readyState === 4) {
      if(postRequest.status < 400) {
      }
    }
    var postelement = (postRequest.responseText)
    bucket.innerHTML = "You just made a " + postelement;

  }
  postRequest.open('POST',  'https://lit-fortress-6467.herokuapp.com/post', true);
  postRequest.send();
})

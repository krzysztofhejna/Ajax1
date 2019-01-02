'use strict';
var url = 'http://api.icndb.com/jokes/random';
var button = document.getElementById('get-joke');
var paragraph = document.getElementById('joke');

function getJoke() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.addEventListener('load', function(){
    var response = JSON.parse(xhr.response);
    if (!response.value.joke) {
      paragraph.innerHTML = 'Server response not found';
      return;
    };
    paragraph.innerHTML = response.value.joke;
  });
  xhr.send();
}

document.addEventListener('DOMContentLoaded', function () {
  getJoke();
  button.addEventListener('click', function(){
    getJoke();
  });
});


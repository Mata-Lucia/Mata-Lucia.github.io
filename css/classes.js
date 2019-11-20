function addColor() {
    var color = document.getElementsByClassName('blue');
    for(i = 0; i < color.length; i++) {
      color[i].style.color = 'blue';
    }
  }

  function addStyle() {
    document.getElementById("article2").style.color = "white";
    document.getElementById("article2").style.backgroundColor = "blue";
    document.getElementById("article2").style.border = "black";
  }

  function toggleClass() {
    var article = document.getElementById("article3");
    article.classList.toggle("classStyle");
  }

  function changeStyle() {
    var article4 = document.getElementById("article4");
    article4.setAttribute('style', 'background-color:grey;');
  }

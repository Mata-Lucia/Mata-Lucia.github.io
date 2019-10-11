function loadDoc(url, cFunction) {
    var xhttp;
    xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        cFunction(myArr);
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  }
  
  function myFunction(arr) {
    document.getElementById("demo").innerHTML = '<h2>Disney Movies</h2>';
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
      out += '<a href="' + arr[i].url + '">' + 
      arr[i].display + '</a><br>';
    }
    document.getElementById("demo").innerHTML = out;
  }

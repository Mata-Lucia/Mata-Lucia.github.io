// Function example //

function doInputOutput(){
  var temp = parseFloat(document.getElementById("temperature").value)
  var windS = parseFloat(document.getElementById("windspeed").value)
  var windC = windChill(temp, windS);
  document.getElementById("functiondemo").innerHTML = windC;
}

function windChill(tempF, speed){
   var result = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16)
                 + 0.4275 * tempF * Math.pow(speed, 0.16);
   return result
}

// Conditional statement example //

function weekend () {
    var now = new Date();
    var dayOfWeek = now.getDay();

    var answer 
    if (dayOfWeek == "0"  || dayOfWeek == "6") {
        answer = "It's the weekend!";
    }
      else {
        answer = "It's a week day!";
      }

      document.getElementById('weekenddemo').innerHTML = answer;
}

// Loop example // 

function timesTable() {
    var multiplier = 1
    var multiplicant = 5
    var output = ""

    while (multiplier <=12) {
      output += multiplicant + " x " + multiplier + " = " +
         (multiplicant*multiplier) + "<br>";
      multiplier++;
    }

    document.getElementById('outputDiv').innerHTML = output;
  }

  // Loop example 2 //

  function colors() {
    var colors = ['Blue', 'Yellow', 'Pink', 'Green', 'Purple', 'Black'];
    var i = 0;
    var len = colors.length;
    var output2 = "";
    
    for (i = 0; i < len; i++) {
      output2 += colors[i] + "<br>";
    }
    document.getElementById('outputDiv2').innerHTML = output2;
  }

  // Array example // 

  function wrapper()  {
    var list = [1, 2, 3, 4, 5, 6];
    var ends = addEnds(list);
    document.getElementById("arraydemo").innerHTML = ends;
  }

  function addEnds(list) {
    var first = list[0];
    var last = list[list.length-1];
    var sum = first + last;
    return sum;
  }
  
  // Associative Array example // 
  function associative() {
    array={'key1':'Hello',
           'key2':function(){alert("Hello!");}};
    var method = array['key2'];
    alert(method);
  }
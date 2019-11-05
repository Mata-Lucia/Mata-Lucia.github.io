// Literal constructor

var pet = {
    species: "cat",
    name: "Tommy",
    age: "2 years old",
    color: "orange",
    // Creates a method of a function
    message: function() {
        return 'Hi my name is ' + this.name;
    }
};

document.getElementById("pet").innerHTML = pet.message();

// Contructor function

function Pet(species, name, age, color) {
    this.species = species;
    this.name = name;
    this.age = age;
    this.color = color;
}

// Instance of object
var mypet = new Pet("cat", "Tommy", "2 years old", "orange");
//document.getElementById("pet2").innerHTML = mypet.name;

// Print all the values using a loop
var txt = " ";
var x;

for (x in mypet) {
   txt += mypet[x] + ', ';
}
document.getElementById("pet2").innerHTML = txt;

// Methods
// Change to uppercase
document.getElementById("pet3").innerHTML = mypet.name.toUpperCase();
// Displays keys
document.getElementById("pet4").innerHTML = Object.keys(mypet);
// Displays keys and avalues
document.getElementById("pet5").innerHTML = Object.entries(mypet);

//Form

function personbuilder() {
    var name = document.getElementById("firstname").value;
    var city = document.getElementById("city").value;
    var color = document.getElementById("color").value;

    var person = {
        firstname: name,
        city: city,
        color: color,
        message: function() {
            return "Hello " + this.firstname + "! You live in " + this.city + " and your favorite color is " + this.color;}
    };
    
    document.getElementById("person").innerHTML = person.message();
}
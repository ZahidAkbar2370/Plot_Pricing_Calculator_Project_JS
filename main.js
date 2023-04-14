function fllorOfHouse(val) {
  document.getElementById('fllorOfHouse').value = val;
  // document.getElementById('fllorOfHouse').value = val;
}

function apartmentFloor(val){
  document.getElementById('apartmentFloor').value = val;
}

function numberOfRoom(number){

var btns = document.getElementsByClassName("radio");
for (var i = 0; i < btns.length; i++) {
btns[i].addEventListener("click", function() {
var current = document.getElementsByClassName("active");
current[0].className = current[0].className.replace(" active", "");
this.className += " active";
});
}
}


function total(val) {
  document.getElementById('total').value = val;
  // document.getElementById('fllorOfHouse').value = val;
}

function kitchen(val) {
  document.getElementById('kitchen').value = val;
  // document.getElementById('fllorOfHouse').value = val;
}


function getDate(){
  var today = new Date();

document.getElementById("date").value = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);


}


function undergound(val){

  var inputValue = document.getElementById("selectedArea").innerHTML = val + " X";


  document.getElementById("location").style.display = "none";
  document.getElementById("location1").style.display = "none";
  document.getElementById("location2").style.display = "none";
  document.getElementById("location3").style.display = "none";

  document.getElementById("selectedArea").style.display = "block";

 $("#exampleModal").modal("hide");


}


function showSelectedArea() {

  document.getElementById("location").style.display = "block";
  document.getElementById("location1").style.display = "block";
  document.getElementById("location2").style.display = "block";
  document.getElementById("location3").style.display = "block";

  document.getElementById("selectedArea").style.display = "none";
}

function calculateValues(){
  var calculation = document.getElementById("calculatedValue").innerHTML = Math.floor(Math.random(1,10));
}
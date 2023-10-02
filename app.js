function getNum(num){
    document.getElementById('result').value += num;
}

function clearNum(){
    document.getElementById('result').value = '';
}

function removeNumb(){
    var res = document.getElementById('result').value; 
    document.getElementById('result').value = document.getElementById('result').value.slice(0,res.length-1)
}

function getResults(){
    document.getElementById('result').value = eval(document.getElementById('result').value);
} 
function sqrt(){
    document.getElementById("ro").innerHTML = Math.sqrt("val");
    
}
function radians() {
    display.value = display.value * (Math.PI / 180);
  }
  function factorial() {
    var input = document.getElementById('result').value;
    if (!isNaN(input) && input >= 0) {
        var num = parseInt(input);
        var result = 1;
        for (var i = 2; i <= num; i++) {
            result *= i;
        }
        document.getElementById('result').value = result;
    } else {
        alert("Invalid input for factorial. Please enter a non-negative integer.");
    }
}
function degree() {
    var inputField = document.getElementById('result');
    var input = inputField.value;

    if (!isNaN(input)) {
        var degrees = parseFloat(input);
        var radians = degrees * (Math.PI / 180);
        inputField.value = radians;
    } else {
        inputField.value = "Invalid input. Please enter a valid number.";
    }
}



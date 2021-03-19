// Calculate total height
function totalHeight() {
    var a = document.getElementById("inches").value;
    var b = document.getElementById("feets").value;
    return (a*b*2.54);
    
    
}
// raise height to the power of 2
function exponentHeight(){
    return(totalHeight()**2);
}

// calculate the bmi with the formula mass/height^2
function bmi() {
    var c = document.getElementById("mass").value;
    return (c/exponentHeight()+"kg/m^2");
}
// display the bmi
function func() {
    document.getElementById("display").innerHTML=bmi();
}

// calculate the calories with the formula bmr*1.2
function calOries() {
    var bmr = document.getElementById("bmr").value;
    var calories= bmr * 1.2;
    document.getElementById("display2").innerHTML= calories+"J";
    
}

// Calculate age
function ageCalc(){
    var a = document.getElementById("y1").value;
    var b = document.getElementById("y2").value;
    if (b>a){
        var c = b - a;
    
    } else{
        var c = "Please enter the correct year of birth"
    }
    document.getElementById("display3").innerHTML=c;
}

// Calculate total height for age
function totHeight(){
    var a = document.getElementById("inches2").value;
    var b = document.getElementById("feets2").value;
    return (a*b*2.54);
    
}

// Calculate ideal weight
function iWeight(){
    var gender = document.getElementById("g").value.toUpperCase();
    if (gender=="F"){
        return (totHeight() - 105);
    } else if (gender=="M"){
        return (totHeight() - 101);
    };

}
// display calculate ideal weight
function disiWeight(){
    document.getElementById("display4").innerHTML=iWeight()+"N";
}

// result for bmi entered
function healthyWeight(){
    var hw = document.getElementById("hweight").value;
    if (hw <= 18.5){
        return "Underweight";
    } else if (hw<=24.9){
        return "Ideal";
    } else if (hw <=29.9){
        return "Overweight";
    } else{
        return "Obesity";
    }

}

// display result for healthy weight
function dishWeight(){
    document.getElementById("display5").innerHTML=healthyWeight();
}

// To Open one toggle at a time
// a. select all details elements
const All_Details = document.querySelectorAll('details');

// b. open one toggle at a time
All_Details.forEach(deet=>{
  deet.addEventListener('toggle', toggleOpenOneOnly)
})

// c. if one toggle is newly opened close the currently opened toggle.
function toggleOpenOneOnly(e) {
  if (this.open) {
    All_Details.forEach(deet=>{
      if (deet!=this && deet.open) deet.open = false
    });
  }
}
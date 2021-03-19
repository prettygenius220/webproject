<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Let's calculate</title>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap" rel="stylesheet">
    <script>
      *{
    text-decoration: none;
    font-family: "Poppins", Calibri;
}

body{
    background-color: blue;
    padding: 20px;
    margin: 20px;
    color: white;
}
/* All buttons effects */
button{
    border-radius: 10px;
    font-size: large;
    font-weight: bold;
    width: 15%;
    height: 10%;
    background-color: purple;
    outline: none;
    color: whitesmoke;
    margin-top: 2%;
    box-shadow: 2px 2px 5px violet;
}


b{
    color: pink;
}

/* All inputs effect */
input{
    border: none;
    border-bottom: 1px solid black;
    padding: 2%;
    margin-top: 1%;
    margin-right: 4%;
    height: 4%;
    background-color: grey;
    font-size: large;
    color: white;
    outline: none;
    box-shadow: 3px 3px 5px grey;
    cursor: pointer;
    
}

/* All details et summary effects */
details > summary{
    cursor: pointer;
    outline: none;
}


::placeholder{
    color: white;
}

@media(max-width:650px){
    input{
        margin-bottom: 4%;
        padding: 5%;
    }
    button{
        width: 50%;
        height: 10%;
    }

   /* the homepage */
    .welcm{
        width: 80%;
        padding: 4%;
    }
}
  </script>
</head>
<body>
  <div class="welcm">
     <h1 id="2"> You're here</h1>
  <p>Welcome, on our page you could calculate your BMI, Ideal Weight, Healthy Weight, Age and Calories <br>Simply enter the required data and press the button to see the magic <br> Up for some maths? Yes, so let's Get to work!  </p>
  </div>
   
   <div class="calcm">
        <details id="d1" ontoggle="">
            <summary>Calculate BMI</summary>
            
   <input type="number" name="height1a" id="inches" placeholder="height in inches">
                <input type="number" name="height1b" id="feets" placeholder="height in feets">
                <input type="number" name="mass1" id="mass" placeholder="mass in kilograms">
                <br>
                <button onclick="func()">Result</button>
                <p id="display"></p>
           
   </details>

   <details id="d2" >
            <summary>Calculate Calories</summary>
            <p>BMR stands for Basal Metabolic Rate</p> 
            <br>
            <input type="number" name="bmr" id="bmr" placeholder="enter BMR">
            <button onclick="calOries()">Result</button>
            <p id="display2"></p>
        </details>

   <details id="d3">
            <summary>Calculate Age</summary>
            <input type="number" name="year1" id="y1" placeholder="Enter year of birth">
            <input type="number" name="year2" id="y2" placeholder="Enter current year">
            <br>
            <button onclick="ageCalc()">Result</button>
            <p id="display3"></p>
        </details>

   <details id="d4">
            <summary>Calculate Ideal Weight</summary>
            <input type="text" id="g" placeholder="Enter Gender(F/M)" >
            <input type="number" id="inches2" placeholder="Height in inches">
            <input type="number" id="feets2" placeholder="Height in feets">
            <button  onclick="disiWeight()">Result</button>
            <p id="display4"></p>
        </details>

   <details id="d5">
            <summary>Calculate Healthy Weight</summary>
            <p>BMI stands for Body Mass index and can be calculated above.</p>
            <input type="number" name="rweight" id="hweight" placeholder="Enter BMI">
            <button onclick="dishWeight()">Result</button>
            <p id="display5"></p>
        </details>
    </div>

   <script">
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
    return (c/exponentHeight());
}
// display the bmi
function func() {
    document.getElementById("display").innerHTML=bmi();
}

// calculate the calories with the formula bmr*1.2
function calOries() {
    var bmr = document.getElementById("bmr").value;
    var calories= bmr * 1.2;
    document.getElementById("display2").innerHTML= calories;
    
}

// Calculate age
function ageCalc(){
    var a = document.getElementById("y1").value;
    var b = document.getElementById("y2").value;
    var c = b - a;
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
    document.getElementById("display4").innerHTML=iWeight();
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
    </script>
</body>
</html>

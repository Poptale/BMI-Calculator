let height = document.querySelector(".your-height");
let weight = document.querySelector(".your-weight");
let calculate = document.querySelector(".calculate");
let bmiScore = document.querySelector(".your-bmi");
let yourCategory = document.querySelector(".your-category");

let score = "";

calculate.addEventListener("click", () => {
    score = weight.value/(height.value*height.value);
    bmiScore.innerHTML = Math.floor(score);
    checking();
    emptyScore();
    console.log(weight.value);
    console.log(height.value);
    console.log(score);
})

function emptyScore() {
    if(height.value === "") {
        yourCategory.innerHTML = "Enter your height";
        bmiScore.innerHTML = "Enter your height";
        yourCategory.style.color = "white";
    } else if (weight.value === ""){
        yourCategory.innerHTML = "Enter your weight";
        bmiScore.innerHTML = "Enter your weight";
        yourCategory.style.color = "white";
    }
}

function checking() {
    if( score < 18 ) {
        yourCategory.innerHTML = "Underweight";
        yourCategory.style.color = "red";
    } else if ( score > 25 ) {
        yourCategory.innerHTML = "Overweight";
        yourCategory.style.color = "red";
    } else {
        yourCategory.innerHTML = "Normal";
        yourCategory.style.color = "#44ff00";
    }
}
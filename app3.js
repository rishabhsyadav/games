// select variable 
const countElement = document.getElementById("count");

const increasebtn = document.getElementById("increase")
const resetbtn = document.getElementById("reset");
const decreasebtn = document.getElementById("decrease");

// count variable 
let count = 0 ;

// increase button 
increasebtn.addEventListener("click" , function()  {
count++;
countElement.textContent= count;
});

// decrese button 
decreasebtn.addEventListener("click" , function() {
    count--;
    countElement.textContent = count;
});

//reset button
resetbtn.addEventListener ("click", function() {
    count = 0;
    countElement.textContent = count;
});
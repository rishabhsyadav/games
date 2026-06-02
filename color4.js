// // Select elements
// const button = document.getElementById("btn");
// const colorBox = document.querySelector(".color-box");
// const colorCode = document.getElementById("colorCode");

// // Hex color characters
// const letters = "0123456789ABCDEF";

// // Function to generate random color
// function generateColor() {
//   let color = "#";

//   // Generate 6 random characters
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }

//   // Change box color
//   colorBox.style.backgroundColor = color;

//   // Show color code
//   colorCode.textContent = color;

//   // Change page background
//   document.body.style.backgroundColor = color;
// }

// // Button click event
// button.addEventListener("click", generateColor);

 // select elements 
 const colorBox =document.querySelector(".color-box");
 const colorCode = document.getElementById("colorCode");
 const button = document.getElementById("btn");

 // hfx color character 
 const letters = "0123456789ABCDEF";

 // FUNCTION 
 function generateColor() {
    let color= "#";

// appliying condititon 
for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
}
 
// change color box 
colorBox.style.backgroundColor = color;

// show color code 
colorCode.textContent = color;

// change backgrounnd color 
document.body.style.backgroundColor = color;

 }

 // button cllick event 
button.addEventListener("click", generateColor);

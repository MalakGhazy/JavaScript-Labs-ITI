// Step 1: Move the existing image to the top-right corner
const headerImg = document.getElementById("header").getElementsByTagName("img")[0];
headerImg.style.position = "absolute";
headerImg.style.top = "0";
headerImg.style.right = "0";
headerImg.style.width = "200px";

// Step 2: Add a new image to the bottom-left corner
const bottomLeftImg = document.createElement("img");
bottomLeftImg.src = "dom.jpg";
bottomLeftImg.alt = "Bottom left image";
bottomLeftImg.style.position = "absolute";
bottomLeftImg.style.bottom = "0";
bottomLeftImg.style.left = "0";
bottomLeftImg.style.width = "200px"; 
document.body.appendChild(bottomLeftImg);

// Step 3: Center the navigation list and 
const navigationDiv = document.getElementById("navigation");
navigationDiv.style.display = "flex";
navigationDiv.style.justifyContent = "center";
navigationDiv.style.alignItems = "center";
navigationDiv.style.height = "100vh";

//Step 4 :Change bullet style to open circles
const navUl = document.getElementById("nav");
navUl.style.listStyleType = "circle";
navUl.style.padding = "0";
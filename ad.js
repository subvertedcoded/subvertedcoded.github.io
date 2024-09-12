const left = "ad-left";
const right = "ad-right";
// Generate a random number between 1 and 10
let ads = [["./adPublic/default.webp", "https://exampleurl.com/","default"]

];


const randomNumberR = Math.floor(Math.random() * ads.length);
const randomNumberL = Math.floor(Math.random() * ads.length);

// Construct the path to the random image in adPublicRight
const imagePathR = ads[randomNumberR][0];
const imagePathL = ads[randomNumberL][0];




// left ad
const image = document.createElement("img");
image.src = imagePathL; // Replace with the actual path to the image file
image.style.width = "200px"; // Adjust the width to your desired size
image.style.height = "auto"; // Maintain aspect ratio
image.id = "ad-left"; // Add the id "ad-left" to the image element
document.getElementById(left).appendChild(image);

// right ad
const image2 = document.createElement("img");
image2.src = imagePathR; // Replace with the actual path to the image file
image2.style.width = "200px"; // Adjust the width to your desired size
image2.style.height = "auto"; // Maintain aspect ratio
image2.id = "ad-right"; // Add the id "ad-right" to the image element
document.getElementById(right).appendChild(image2);
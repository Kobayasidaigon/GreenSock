
const circle = document.querySelector(".circle");
TweenMax.to(circle, 5, { x: 150, y: 150, backgroundColor: "blue" });
TweenMax.to(".square", 2, { x: -150, y: -150, scale: 2 ,delay:5 ,ease:Back.easeOut});
TweenMax.from(".rectangle", 2, { y: 200, rotation: 180, scale: 1.5 });


const breakfast = document.querySelectorAll("li:nth-child(odd)");
TweenMax.to(breakfast, 1, {x:50});
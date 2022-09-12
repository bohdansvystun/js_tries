const colors = ["green", "red", "yellow", "blue"];

const button = document.getElementById('btn');
const color = document.querySelector(".color");

button.addEventListener('click',function(){
  // get random number between 0-3 colors
  const randomNum = getRandomNum() ;
  console.log(randomNum);

  document.body.style.backgroundColor= colors[randomNum];
  color.textContent= colors[randomNum];
});

function getRandomNum(){
  return Math.floor(Math.random()* colors.length);
}

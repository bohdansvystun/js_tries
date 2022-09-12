const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const button = document.getElementById("btn");
const color = document.querySelector(".color");

button.addEventListener('click',function(){
  let hexCol= '#';
  for(let i=0; i<6; i++){
    hexCol += hex[getRandomNum()];
  }
  color.textContent= hexCol;
  document.body.style.backgroundColor = hexCol;

});

function getRandomNum(){
   return Math.floor(Math.random()* hex.length);
}

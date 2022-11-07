let backgroundBtn = document.getElementById('backgroundBtn');
let clear = document.getElementById('sifirla');
let backgroundView = document.getElementById('background-color');
let h4color = document.getElementById('h4color');

backgroundBtn.addEventListener('click', backgroundViewf);
clear.addEventListener('click', clearf);



function backgroundViewf (){
  backgroundView.style.backgroundColor=("#fff");
  backgroundView.classList.add('border')
  h4color.style.color=("#000");
}

function clearf (){
    backgroundView.style.backgroundColor=("")
    backgroundView.classList.remove('border')
    h4color.style.color=("#fff");
} 

backgroundView();
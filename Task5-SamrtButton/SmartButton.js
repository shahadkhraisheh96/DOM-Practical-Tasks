const btn=document.getElementById('smart-button');

btn.addEventListener("click",() => {
  btn.classList.toggle('clicked-btn-style');

  if(btn.classList.contains('clicked-btn-style')){
    btn.textContent="Cliced!";
  }else{
    btn.textContent="Click Me";
  }
});



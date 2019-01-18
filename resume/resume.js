window.onload = function(){
  printButton = document.getElementById('printButton');
  printButton.classList.remove('hide');
  printButton.addEventListener("click", event =>{
    event.preventDefault();
    window.print();
  });
  printButton = document.getElementById('printButton2');
  printButton.classList.remove('hide');
  printButton.addEventListener("click", event =>{
    event.preventDefault();
    window.print();
  });

}

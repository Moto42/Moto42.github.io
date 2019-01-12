window.onload = function(){
  printButton = document.getElementById('printButton');
  printButton.classList.remove('hidden');
  printButton.addEventListener("click", event =>{
    event.preventDefault();
    window.print();
  });
}

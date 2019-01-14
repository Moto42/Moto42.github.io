function addSmoothScrollToContactMe(contactLink){
  contactLink.addEventListener("click",event => {
    event.preventDefault();
    document.getElementById("contact-form").scrollIntoView({behavior:'smooth'});
  });
}

window.onload = function(){
  const contactLinks = document.getElementsByClassName("contactLink");
  for (let i = 0; i < contactLinks.length; i++){
    addSmoothScrollToContactMe(contactLinks[i]);
  }
}

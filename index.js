function addSmoothScrollToContactMe(contactLink){
  contactLink.addEventListener("click",event => {
    event.preventDefault();
    document.getElementById("contact-form").scrollIntoView({behavior:'smooth'});
    document.getElementById("contact-name").focus({preventScroll:true});
  });
}

window.onload = function(){
  const contactLinks = document.getElementsByClassName("contactLink");
  for (let i = 0; i < contactLinks.length; i++){
    addSmoothScrollToContactMe(contactLinks[i]);
    if(window.location.href.includes('#contact-form'))document.getElementById("contact-name").focus({preventScroll:true});
  }
}

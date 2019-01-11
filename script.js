window.onload = function(){
  const contactLink = document.getElementById("contact-link");
  contactLink.addEventListener("click",event => {
    event.preventDefault();
    document.getElementById("contact").scrollIntoView({behavior:'smooth'});
  });
}

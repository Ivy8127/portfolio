const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector('.nav-list');
const Links = document.querySelectorAll('.nav-list li');

/* navbar hamburger toggle
 */
hamburger.addEventListener('click',()=>{
    navLinks.classList.toggle('open')
    hamburger.classList.toggle('is-active')

})

/* function that displays tabs on button click
 */
function openTab(evt, aboutMe) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(aboutMe).style.display = "block";
    evt.currentTarget.className += " active";
  }
  document.getElementById("defaultOpen").click();
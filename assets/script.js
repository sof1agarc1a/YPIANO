'use strict';

const BORDER_SIZE = 4;
const panel = document.getElementById("right_panel");

let m_pos;
function resize(e){
  const dx = m_pos - e.x;
  m_pos = e.x;
  panel.style.width = (parseInt(getComputedStyle(panel, '').width) + dx) + "px";
}

panel.addEventListener("mousedown", function(e){
  if (e.offsetX < BORDER_SIZE) {
    m_pos = e.x;
    document.addEventListener("mousemove", resize);
  }
});

document.addEventListener("mouseup", function(){
  document.removeEventListener("mousemove", resize);
});


const menuToggle = document.querySelector(".menu-container");
const headerLogos = document.querySelector(".menu-toggle");


menuToggle.addEventListener('click', () => {
 menuTogglers();

 headerLogos.forEach(headerLogo => {
   headerLogo.classList.toggle('logo_display');
 });
});

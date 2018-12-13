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



const hamburgerIcon = document.querySelector(".hamburger-icon");
const hamburgerMenu = document.querySelector(".nav-ist");
const nav = document.querySelector(".desktop-nav");

hamburgerIcon.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("nav-ist__visible");
    hamburgerIcon.classList.toggle("transform");
});

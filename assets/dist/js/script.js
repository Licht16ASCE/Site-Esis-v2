const toggle = document.getElementById('toggle');
const navbar = document.getElementById('navbar');
toggle.onclick = function(){
    toggle.classList.toggle('active');
    navbar.classList.toggle('active');
} 

const marker = document.querySelector('#marker');
const item = document.querySelectorAll('ul li a');

function indicator(e){
    marker.style.top = e.offsetTop+'px';
    marker.style.width = e.offsetWidth+'px';
}
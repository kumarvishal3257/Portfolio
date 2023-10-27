var typeData = new Typed(".role", {
    strings: [
      "Frontend Developer",
      "Web Developer",
      "UI-UX Designer",
      
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
  });

const navBar = document.getElementById('bars');
const menu = document.querySelector('.nav-toggle-items');

let clickCount = 0;
navBar.addEventListener('click', () => {
    clickCount++;

    if( clickCount % 2 !== 0){
        menu.classList.add('active');
    }
    else{
        menu.classList.remove('active');
    }
});
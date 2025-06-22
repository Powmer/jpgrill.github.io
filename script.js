function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const content = document.getElementById('content');
  const fadeBg = document.getElementById('fadeBackground');

  const isOpen = sidebar.classList.contains('open');

  if (isOpen) {
    sidebar.classList.remove('open');
    content.classList.remove('blurred');
    fadeBg.classList.remove('open');
  } else {
    sidebar.classList.add('open');
    content.classList.add('blurred');
    fadeBg.classList.add('open');
  }
}

const fadeBg = document.getElementById("fadeBackground");
const images = [
  "topimage(1).jpeg",
  "topimage(2).jpeg",
  "topimage(3).jpeg",
  "topimage(4).jpeg"
];

let current = 0;

function updateBackground() {
  fadeBg.style.opacity = 0;
  setTimeout(() => {
    fadeBg.style.backgroundImage = `url(${images[current]})`;
    fadeBg.style.opacity = 0.4;
    current = (current + 1) % images.length;
  }, 1000);
}

fadeBg.style.backgroundImage = `url(${images[0]})`;
setInterval(updateBackground, 5000);

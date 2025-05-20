function abrirSidebar() {
  document.querySelector('.sidebar').classList.add('open');
  document.getElementById('content').classList.add('blurred');
}

function fecharSidebar() {
  document.querySelector('.sidebar').classList.remove('open');
  document.getElementById('content').classList.remove('blurred');
}

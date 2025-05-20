const sidebar = document.getElementById('sidebar');
const content = document.getElementById('content');

function toggleSidebar() {
  sidebar.classList.toggle('open');
  if (sidebar.classList.contains('open')) {
    content.classList.add('blurred');
  } else {
    content.classList.remove('blurred');
  }
}




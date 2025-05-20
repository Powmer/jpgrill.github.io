function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const content = document.getElementById('content');
  if (sidebar.classList.contains('open')) {
    sidebar.classList.remove('open');
    content.classList.remove('blurred');
  } else {
    sidebar.classList.add('open');
    content.classList.add('blurred');
  }
}

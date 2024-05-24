const sidebarAside = document.getElementById('sidebar');
const hamburgerBtn = document.querySelector('.hamburger-icon');
const burgerCheck = document.querySelector('.burger-check');
const header = document.getElementsByTagName('header');
let sidebarActived = false;

hamburgerBtn.addEventListener('click', () => {
  if (!burgerCheck.checked) {
    burgerCheck.checked = true;
    console.log('checked');
  }
  else {
    burgerCheck.checked = false;
    console.log('un-checked');
  }
})

burgerCheck.addEventListener('change', () => {
  if (!sidebarActived) {
    sidebarActived = true;
    sidebarAside.classList.remove('deactive');
  }
  else {
    sidebarActived = false;
    sidebarAside.classList.toggle('deactive');
  }
})

document.addEventListener('click', (e) => {
  if (!sidebarAside.contains(e.target) && !hamburgerBtn.contains(e.target))
    sidebar.classList.add('deactive');
})
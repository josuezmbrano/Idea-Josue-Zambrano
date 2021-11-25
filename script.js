const hamburguer = document.getElementById('nav-hamburguer');
const navUl = document.getElementById('nav-ul');

nav-hamburguer.addEventListener('click', () => {
    nav-ul.classList.toggle('show');
})

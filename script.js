let hamburguer = document.getElementById('menu-icon');
let navbar = document.getElementById('navbar');
let links = document.querySelectorAll('.navoption');

hamburguer.onclick = () =>{
    hamburguer.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

links.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.toggle('active');
        hamburguer.classList.toggle('bx-x');
    });
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}



















let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            // Adiciona a classe 'active' a todos os links com o atributo href correspondente
            document.querySelectorAll('header nav a[href="#' + id + '"]').forEach(link => {
                link.classList.add('active');
            });
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
};
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

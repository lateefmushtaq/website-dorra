function toggleMenu() {
    const nav = document.querySelector('.nav ul');
    const menuBtn = document.querySelector('.menu-btn');

    nav.classList.toggle('active');
    menuBtn.classList.toggle('active');
}


function updateActiveLink() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav ul li a');

    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 60) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        }
    });
}



console.log(substring(1))



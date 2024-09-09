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
        if (window.scrollY >= sectionTop - 60) {
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



var swiper = new Swiper(`[unique-script-id="w-w-dm-id"] .mySwiper`, {
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 5,
    pagination: {
        el: `[unique-script-id="w-w-dm-id"] .swiper-pagination`,
        clickable: true,
    },
    loop: true,
    navigation: {
        nextEl: `[unique-script-id="w-w-dm-id"] .swiper-button-nexts`,
        prevEl: `[unique-script-id="w-w-dm-id"] .swiper-button-prevs`,
    },
});



function openModal(imageSrc) {
    var modal = document.getElementById('imageModal');
    var modalImg = document.getElementById("fullImage");
    modal.style.display = "flex";  // Show the modal
    modalImg.src = imageSrc;  // Set the image source
}

function closeModal() {
    var modal = document.getElementById('imageModal');
    modal.style.display = "none";  // Hide the modal
}

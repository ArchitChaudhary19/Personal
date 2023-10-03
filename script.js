// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections 
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // active navbar links 
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
});

    // sticky header 
    let header = document.querySelector('header');

    header.classList.add('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll) 
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}


// let buttonnn = document.getElementById('buttonn');


// buttonnn.onclick = () => {
//     alert('Successfully Submitted')
// }
let formm = document.querySelector('.bb');

// function clear1() {
//     document.getElementById("form").reset();
// }

formm.onclick = () => {
    document.querySelector(".contact_field1").value="";
    document.querySelector(".contact_field2").value="";
    document.querySelector(".contact_field3").value="";
    document.querySelector(".contact_field4").value="";
    document.querySelector(".contact_field5").value="";
}

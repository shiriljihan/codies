// toggle icon navbar

let menu= document.querySelector('#menu-icon');
let navbar =document.querySelector('.navbar');

menu.onclick = () => {

    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}



// scroll sections

window.onscroll = () =>{
    // sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.screenY > 100);
}


// Active navigator

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header .navbar a');

window.onscroll = () => {

     sections.forEach(sec => {

        let top = window.scrollY;
        let offset= sec.offsetTop - 100;
        let height= sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {

            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header .navbar a[href*=' + id + ']').classList.add('active');
            });

            // active sections for animation on scroll

        //     sec.classList.add('show-animate');
        // }
        
        // else {
        //     sec.classList.remove('show-animate');
        
    }

});

// sticky  header

let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);

// remove toggle icon and navbar when click navbar links (scrolls)
menu.classList.remove('bx-x');
navbar.classList.remove('active');

}
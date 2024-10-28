/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    function handleResize() {
        const dropdown = document.querySelector('.nav-item.dropdown');
        const navLink = document.querySelector('#navbarDropdownMenuLink');
        const isMobileOrTablet = window.innerWidth < 992;
    
        if (isMobileOrTablet && !document.querySelector('#aboutLink')) {
            // Remplacer le dropdown par un lien simple
            const aboutLink = document.createElement('a');
            aboutLink.href = "#diplome";
            aboutLink.classList.add('nav-link', 'py-3', 'px-0', 'px-lg-3', 'rounded');
            aboutLink.id = 'aboutLink';
            aboutLink.textContent = "A propos";
            
            dropdown.replaceChild(aboutLink, navLink);
        } else if (!isTablet && document.querySelector('#aboutLink')) {
            // Restaurer le dropdown menu en mode desktop
            dropdown.replaceChild(navLink, document.querySelector('#aboutLink'));
        }
    }
    
    // Applique la fonction au chargement de la page et lors du redimensionnement
    window.addEventListener('resize', handleResize);
    window.addEventListener('DOMContentLoaded', handleResize);

});

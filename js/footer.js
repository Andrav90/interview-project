let footer_icons = [
    {
        "href": "https://www.facebook.com/",
        "a_class": "mr-2",
        "img": "assets/icons/social-icons/facebook.svg",
        "img_class": "social-icons hvr-shadow"
    },
    {
        "href": "https://instagram.com/",
        "a_class": "mr-2",
        "img": "assets/icons/social-icons/instagram.svg",
        "img_class": "social-icons hvr-shadow"
    },
    { 
        "href": "https://twitter.com/",
        "img": "assets/icons/social-icons/twitter.svg",
        "img_class": "social-icons hvr-shadow"
    }
];

let footer_links = [
    {
        "href": "#introduction-container",
        "class": "hvr-underline-from-center",
        "text": "Home"
    },
    {
        "href": "#about-me-container",
        "class": "hvr-underline-from-center",
        "text": "About"
    },
    {
        "href": "#projects-portfolio-container",
        "class": "hvr-underline-from-center",
        "text": "Portfolio"
    },
    {
        "href": "#contact-me-container",
        "class": "hvr-underline-from-center",
        "text": "Contact"
    }
];

for (i = 0; i < footer_icons.length; i++){
    let container = document.getElementById('footer-social-links-cont');

    let a = document.createElement('a');
    a.href = footer_icons[i].href;
    a.setAttribute('class', footer_icons[i].a_class);

    let img = document.createElement('img');
    img.src = footer_icons[i].img;
    img.setAttribute('class', footer_icons[i].img_class);

    a.appendChild(img);
    container.appendChild(a);
};

for (i = 0; i < footer_links.length; i++){
    let container = document.getElementById('footer-info-links-cont');

    let a = document.createElement('a');
    a.href = footer_links[i].href;
    a.setAttribute('class', footer_links[i].class);

    let p = document.createElement('p');
    p.innerHTML = footer_links[i].text;
    
    a.appendChild(p);
    container.appendChild(a);
};
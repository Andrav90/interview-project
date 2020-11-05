let nav_icons = [
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

let nav_links = [
    {
        "href": "#about-me-container",
        "class": "hvr-underline-from-center nav-go-to-links",
        "text": "About"
    },
    {
        "href": "#projects-portfolio-container",
        "class": "hvr-underline-from-center nav-go-to-links",
        "text": "Portfolio"
    },
    {
        "href": "#contact-me-container",
        "class": "hvr-underline-from-center nav-go-to-links",
        "text": "Contact"
    }
];

for (i = 0; i < nav_icons.length; i++){
    let container = document.getElementById('nav-social-links-container');

    let a = document.createElement('a');
    a.href = nav_icons[i].href;
    a.setAttribute('class', nav_icons[i].a_class);

    let img = document.createElement('img');
    img.src = nav_icons[i].img;
    img.setAttribute('class', nav_icons[i].img_class);

    a.appendChild(img);
    container.appendChild(a);
};

for (i = 0; i < nav_links.length; i++){
    let container = document.getElementById('nav-info-links-container');

    let a = document.createElement('a');
    a.href = nav_links[i].href;
    a.setAttribute('class', nav_links[i].class);

    let p = document.createElement('p');
    p.innerHTML = nav_links[i].text;
    
    a.appendChild(p);
    container.appendChild(a);
};
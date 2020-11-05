let clients_logos = [
    {
        "image": "assets/images/clients/clients-logos/news.png",
        "id": "news"
    },
    {
        "image": "assets/images/clients/clients-logos/insider.png",
        "id": "insider"
    },
    { 
        "image": "assets/images/clients/clients-logos/envato.png",
        "id": "envato"
    },
    { 
        "image": "assets/images/clients/clients-logos/epix.png",
        "id": "epix"
    },
    { 
        "image": "assets/images/clients/clients-logos/wired.png",
        "id": "wired"
    }
];

for (i = 0; i < clients_logos.length; i++){
    let image = document.createElement('img');
    image.src = clients_logos[i].image;
    image.setAttribute('class', 'clients-logos hvr-shadow');
    image.setAttribute('id', clients_logos[i].id);
    document.getElementById('clients-logos-container').appendChild(image);
};
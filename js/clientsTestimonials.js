let clients_testimonials = [
    {
        "image": "assets/images/clients/clients-testimonials/1.jpg",
        "text": "Mauris vitae lorem nulla. Morbi facilisis mi sed aliquet placerat. Aliquam tristique tincidunt vehicula. Nulla at pharetra magna. Donec venenatis neque sit amet condimentum porttitor. Duis luctus vestibulum nunc in lacinia. Ut ipsum arcu, consectetur bibendum justo vitae, euismod condimentum leo. Aliquam consequat fringilla lacus.",
        "name": "Sebastien Martin",
        "position": "Owner Tanahcon",
        "selector": "assets/images/645172-200 (1).png"
    },
    {
        "image": "assets/images/clients/clients-testimonials/4.jpg",
        "text": "Interdum et malesuada fames ac ante ipsum primis in faucibus. In eget leo cursus, interdum nisi vitae, scelerisque lectus. Suspendisse a commodo nisl. Nam mattis interdum consectetur. Vestibulum lorem velit, lobortis eu finibus sit amet, auctor sed nunc. Nulla at vulputate metus. Integer euismod tristique justo eu tristique.",
        "name": "Silvia Natalia",
        "position": "CEO Epix",
        "selector": "assets/images/645172-200 (1).png"
    },
    { 
        "image": "assets/images/clients/clients-testimonials/3.jpg",
        "text": "Aliquam cursus neque a sem sagittis luctus. Morbi blandit, nulla vitae iaculis suscipit, nibh massa condimentum orci, nec aliquet erat massa id enim. In faucibus sagittis orci in volutpat. Suspendisse dignissim, mi nec rutrum pulvinar, lacus erat aliquam urna, eu gravida metus turpis eu tortor.",
        "name": "Mike Garcia",
        "position": "CFO Wired",
        "selector": "assets/images/645172-200 (1).png"
    },
    { 
        "image": "assets/images/clients/clients-testimonials/2.jpg",
        "text": "Pellentesque ante elit, vehicula sed egestas a, ultricies at justo. Praesent in nisi nibh. Praesent in dolor at mauris consequat vehicula. Duis commodo fringilla porttitor. Maecenas tempor commodo felis commodo vulputate. Duis et tellus et purus porta bibendum. Mauris sed nisi vitae augue finibus tincidunt ut tincidunt velit.",
        "name": "Kara Johnson",
        "position": "IT Manager Epix",
        "selector": "assets/images/645172-200 (1).png"
    }
];

function displayFirstTestimonial(){
    document.getElementById('client-photo').src = clients_testimonials[0].image;
    document.getElementById('clients-testimonials-text').innerText = clients_testimonials[0].text;
    document.getElementById('client-name').innerText = clients_testimonials[0].name;
    document.getElementById('client-position').innerText = clients_testimonials[0].position;
}displayFirstTestimonial();

for (i = 0; i < clients_testimonials.length; i++) {
    let clientSelector = document.createElement('img');
    clientSelector.src = clients_testimonials[i].selector;
    clientSelector.setAttribute('class', 'selectors-svgs hvr-float')
    clientSelector.addEventListener('click', conditionalTestimonialDisplay(i));
    document.getElementById('selectors').appendChild(clientSelector);
};

function conditionalTestimonialDisplay(i) {
    return function() {
        document.getElementById('client-photo').src = clients_testimonials[i].image;
        document.getElementById('clients-testimonials-text').innerText = clients_testimonials[i].text;
        document.getElementById('client-name').innerText = clients_testimonials[i].name;
        document.getElementById('client-position').innerText = clients_testimonials[i].position;
    };
};
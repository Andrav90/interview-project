let about_me= [
    {
        "title": "Life",
        "text": "Nullam ac quam non risus dictum viverra non id massa. Donec rhoncus sem at leo iaculis, tempor facilisis sem porttitor. Praesent sit amet quam ultricies, vulputate odio hendrerit, dictum eros. Aenean mattis ultricies tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam imperdiet dolor et dignissim luctus. Morbi laoreet tempor feugiat."
    },
    {
        "title": "Education",
        "text": "Sed malesuada porta quam. Proin pretium eu augue vitae pellentesque. Nullam volutpat urna ac tellus bibendum tincidunt. Maecenas ultrices et nunc consectetur cursus. Suspendisse varius vitae risus sed aliquam. Cras nisi leo, scelerisque at dolor sed, sagittis eleifend nisl. Etiam id arcu luctus, vehicula arcu id, dictum nisi. Nullam aliquet ultricies erat. Vivamus a ultrices velit, ac malesuada elit."
    },
    { 
        "title": "Experience",
        "text": "Integer non maximus arcu. Nullam ut odio quis ligula interdum consectetur. Aliquam dignissim eu nibh ut accumsan. Phasellus volutpat nibh lorem, ac efficitur justo cursus ut. Etiam sed rutrum elit. Aenean lacus velit, sollicitudin quis malesuada nec, vestibulum eu tortor. Aenean dapibus commodo nibh ac ornare."
    }
];

function displayFirstTab(){
    document.getElementById('about-me-tabs-text').innerText = about_me[0].text;
}displayFirstTab();

function conditionalTabDisplay(i) {
    return function() {
        document.getElementById('about-me-tabs-text').innerText = about_me[i].text;
    };
};

for (i = 0; i < about_me.length; i++) {
    let title = document.createElement('p');
    title.innerHTML = about_me[i].title;
    title.setAttribute('class', 'about-me-tabs hvr-underline-from-center');
    title.addEventListener('click', conditionalTabDisplay(i));
    document.getElementById('about-me-tabs-titles').appendChild(title);
};
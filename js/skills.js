let skills = [
    {
        "image": "assets/images/skills/design.png",
        "title": "UI/UX Design",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit consectetur rutrum. Mauris blandit urna sit amet est mattis posuere."
    },
    {
        "image": "assets/images/skills/seo.png",
        "title": "Local SEO",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit consectetur rutrum. Mauris blandit urna sit amet est mattis posuere."
    },
    { 
        "image": "assets/images/skills/marketing.png",
        "title": "Social Media Marketing",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc hendrerit consectetur rutrum. Mauris blandit urna sit amet est mattis posuere."
    }
];

for (i = 0; i < skills.length; i++){
    let skillsSection = document.getElementById('skills-section');

    let image = document.createElement('img');
    image.src = skills[i].image;
    image.setAttribute('class', 'skill-icon');

    let title = document.createElement('h5');
    title.innerHTML = skills[i].title;
    let text = document.createElement('p');
    text.innerHTML = skills[i].text;

    let skillsInnerContainer = document.createElement('div');
    skillsInnerContainer.setAttribute('class', 'skills-inner-container d-flex flex-column hvr-bob')
    skillsInnerContainer.appendChild(image);
    skillsInnerContainer.appendChild(title);
    skillsInnerContainer.appendChild(text);

    skillsSection.appendChild(skillsInnerContainer);
};
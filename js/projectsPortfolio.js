let projectsList = [
    {
        "path": "assets/images/projects/7.png",
        "date": "25 December 2019",
        "title": "Pipedit Product Page",
        "id": "pipedit",
        "category": "UI Design"
    }, 
    {
        "path": "assets/images/projects/4.png",
        "date": "14 March 2018",
        "title": "Smart Medical App Landing Page",
        "id": "medical",
        "category": "UX Design"
    },
    {
        "path": "assets/images/projects/3.png",
        "date": "27 September 2018",
        "title": "Horse Riding Club Website Page",
        "id": "horse",
        "category": "Branding"
    },
    {
        "path": "assets/images/projects/6.png",
        "date": "30 June 2016",
        "title": "SOM Feedback",
        "id": "feedback",
        "category": "Graphic Design"
    },
    {
        "path": "assets/images/projects/5.png",
        "date": "23 January 2017",
        "title": "Starbank Dashboard",
        "id": "starbank",
        "category": "UX Design"
    },
    {
        "path": "assets/images/projects/1.png",
        "date": "1 August 2018",
        "title": "Mountain Top Icon",
        "id": "mountain",
        "category": "Icon"
    },
    {
        "path": "assets/images/projects/9.png",
        "date": "20 August 2019",
        "title": "Powerbank Rental App",
        "id": "powerbank",
        "category": "UI Design"
    },
    {
        "path": "assets/images/projects/2.png",
        "date": "28 October 2020",
        "title": "Rouser Lab",
        "id": "rouser",
        "category": "Branding"
    },
    {
        "path": "assets/images/projects/8.png",
        "date": "15 March 2017",
        "title": "Katikungdong Landing Page",
        "id": "Katikungdong",
        "category": "Graphic Design"
    }
];

function addCategories(){
    let categoriesSet = new Set();
    for (i = 0; i < projectsList.length; i++) {
        categoriesSet.add(projectsList[i].category);
    };
    categoriesSet.add("View All");
    
    for (i = 0; i < [...categoriesSet].length; i++) {
        let title = document.createElement('p');
        title.innerHTML = [...categoriesSet][i];
        title.setAttribute('class', 'portfolio-categories hvr-underline-from-center');
        title.addEventListener('click', () => {filterProjects(title.innerHTML)});
        document.getElementById('portfolio-tabs').appendChild(title);
    };
}addCategories();

function displayProjects(i){
    let container = document.getElementById('projects-previews');
    let projectContainer = document.createElement('div');
    projectContainer.setAttribute('class', 'projects-images hvr-grow');
    projectContainer.setAttribute('id', projectsList[i].id);

    projectContainer.addEventListener('mouseenter', () => {displayAdditionalInfo(i, projectContainer.id)});
    projectContainer.addEventListener('mouseleave', () => {hideAdditionalInfo(projectContainer.id)});

    let additionalInfoContainer = document.createElement('div');
    additionalInfoContainer.setAttribute('class', 'additional-info-cont');

    let image = document.createElement('img');
    image.src = projectsList[i].path;  
    projectContainer.appendChild(image);
    projectContainer.appendChild(additionalInfoContainer);
    container.appendChild(projectContainer);
};

function hideProjects(){
    let container = document.getElementById('projects-previews');
    while(container.firstChild)
        container.removeChild(container.firstChild);
};

function selectProjects(category){
    let indexList = [];
    for (i = 0; i < projectsList.length; i++) {
        if ( category === projectsList[i].category || category === "View All") {
            indexList.push(i);
        };
    };
    return indexList;
};

function filterProjects(category){
    hideProjects();
    indexList = selectProjects(category);
    for(i = 0; i < indexList.length; i++){
        displayProjects(indexList[i]);
    };
}filterProjects("View All");

function displayAdditionalInfo(i, id){
    let additionalInfoContainer = document.getElementById(id).getElementsByClassName('additional-info-cont')[0];
    additionalInfoContainer.setAttribute('id', 'display-additional');

    let date = document.createElement('p');
    date.innerText = projectsList[i].date;

    let title = document.createElement('h6');
    title.setAttribute('class', 'projects-titles');
    title.innerText = projectsList[i].title;

    additionalInfoContainer.appendChild(date);
    additionalInfoContainer.appendChild(title);
};

function hideAdditionalInfo(id){ 
    let additionalInfoContainer = document.getElementById(id).getElementsByClassName('additional-info-cont')[0];    
    while(additionalInfoContainer.firstChild)
        additionalInfoContainer.removeChild(additionalInfoContainer.firstChild);
    additionalInfoContainer.removeAttribute('id', 'display-additional');
};
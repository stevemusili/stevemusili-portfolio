const skills = ["HTML", "CSS", "JavaScript", "Git and Github"];

const skillsList = document.getElementById("skills-list");

for (let i = 0; i < skills.length; i ++ ) {
    const listItem = document.createElement("li");

    listItem.textContent = skills[i];

    skillsList.appendChild(listItem);
}

const projects = [
    {
        title: "Focus & Shot Photography",
        description: "A simple photography website showcasing photography services,portfolio and contact details.",
        tech: "HTML, CSS"
    },

    {
        title: "Akan Name Generator",
        description: "A web application that calculates the day of the week a user was born and assigns them an Akan name based on their gender.",
        tech: "HTML, CSS, JavaScript"
    }
];

const projectContainer =document.getElementById("projects-container");

projects.forEach(function(project) {
    projectContainer.innerHTML += `
        <div class="project-card">
            <h4>${project.title}</h4>
            <p>${project.description}</p>
            <p>Technologies Used: ${project.tech}</p>
        </div>
    `; 
});




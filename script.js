const skills = ["HTML", "CSS", "JavaScript", "Git and Github"];

const skillsList = document.getElementById("skills-list");

for (let i = 0; i < skills.length; i ++ ) {
    const listItem = document.createElement("li");

    listItem.textContent = skills[i];
    
    skillsList.appendChild(listItem);
}
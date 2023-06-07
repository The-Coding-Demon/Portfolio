const projectSection = document.querySelector("#Projects");
const projectArray = [
  {
    project_name: "Project 1",
    project_desc: "Coming soon!",
  },
  {
    project_name: "Project 2",
    project_desc: "Coming soon!",
  },
  {
    project_name: "Project 3",
    project_desc: "Coming soon!",
  },
];

const buildProjectCard = (object) => {
  const newDiv = document.createElement("div");
  newDiv.setAttribute("class", "projectCard");
  newDiv.innerHTML = `
  <p>${object.project_name}</p>
  <p>${object.project_desc}</p>
  `;

  return newDiv;
};

const populateProjects = () => {
  for (i = 0; i < projectArray.length; i++) {
    const projectCard = buildProjectCard(projectArray[i]);
    projectSection.append(projectCard);
  }
};

populateProjects();

const btnScrollToTop = document.querySelector("#btnScrollToTop");

btnScrollToTop.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

const scrollButton = () => {
  if (document.documentElement.scrollTop > 500) {
    btnScrollToTop.classList.remove("hidden");
  } else {
    btnScrollToTop.classList.add("hidden");
  }
};

addEventListener("scroll", scrollButton);
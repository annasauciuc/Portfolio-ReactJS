import netflix from "./../components/ProjectsList/Project/projectsImages/netflix.jpg";
import form from "./../components/ProjectsList/Project/projectsImages/form.jpg";
import sass from "./../components/ProjectsList/Project/projectsImages/sass.jpg";
import adminPanel from "./../components/ProjectsList/Project/projectsImages/panel.jpg";
import floats from "./../components/ProjectsList/Project/projectsImages/floats.jpg";
import howIAm from "./../components/ProjectsList/Project/projectsImages/firstProject.jpg";

const projectsData = [
  {
    id: 1,

    text: "NETFLIX_TEXT",
    title: "NETFLIX_TITLE",
    par: true,
    hrefGit: "https://github.com/annasauciuc/Netflix-Pixel-Perfect-Project",
    hrefPreview: "http://netflix-project.amsauciuc.com",
    src: `${netflix}`,
    alt: "netflix project"
  },
  {
    id: 2,

    text: "FORM_TEXT",
    title: "FORM_TITLE",
    par: false,
    hrefGit: "https://github.com/20H-Talent/ikigai-project-3-annasauciuc",
    hrefPreview: "http://form-project.amsauciuc.com ",
    src: `${form}`,
    alt: "form project"
  },
  {
    id: 3,

    text: "SASS_TEXT",
    title: "SASS_TITLE",
    par: true,
    hrefGit: "https://github.com/annasauciuc/Mock-up-Sass-project",
    hrefPreview: "http://sass-project.amsauciuc.com",
    src: `${sass}`,
    alt: "sass project"
  },
  {
    id: 4,

    text: "ADMINISTRATION_TEXT",
    title: "ADMINISTRATION_TITLE",
    par: false,
    hrefGit: "https://github.com/annasauciuc/CV-PANEL",
    hrefPreview: "http://admin-panel.amsauciuc.com",
    src: `${adminPanel}`,
    alt: "administration panel"
  },
  {
    id: 5,

    text: "FLOATS_TITLE",
    title: "HIREPASSIONATE",
    par: true,
    hrefGit: "https://github.com/annasauciuc/Netflix-Pixel-Perfect-Project",
    hrefPreview: "http://netflix-project.amsauciuc.com",
    src: `${floats}`,
    alt: "floats project"
  },
  {
    id: 6,

    text: "HOW_I_AM_TEXT",
    title: "HOW_I_AM_TITLE",
    par: false,
    hrefGit: "https://github.com/annasauciuc/20h-First-Project",
    hrefPreview: "http://how-i-am.amsauciuc.com",
    src: `${howIAm}`,
    alt: "presentation project"
  }
];
export default projectsData;

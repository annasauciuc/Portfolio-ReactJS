import netflix from "./../components/ProjectsList/Project/projectsImages/netflix.jpg";
import form from "./../components/ProjectsList/Project/projectsImages/form.jpg";
import sass from "./../components/ProjectsList/Project/projectsImages/sass.jpg";
import adminPanel from "./../components/ProjectsList/Project/projectsImages/panel.jpg";
import floats from "./../components/ProjectsList/Project/projectsImages/floats.jpg";
import howIAm from "./../components/ProjectsList/Project/projectsImages/firstProject.jpg";
import faceRecog from "./../components/ProjectsList/Project/projectsImages/faceRecog.JPG";

const projectsData = [
  {
    id: 1,
    text: "NETFLIX_TEXT",
    title: "NETFLIX_TITLE",
    par: true,
    hrefGit: "https://github.com/annasauciuc/Netflix-Pixel-Perfect-Project",
    hrefPreview: "hhttps://annasauciuc.github.io/Netflix-Pixel-Perfect-Project/home.html",
    src: `${netflix}`,
    alt: "netflix project"
  },
  {
    id: 2,
    text: "FORM_TEXT",
    title: "FORM_TITLE",
    par: false,
    hrefGit: "https://github.com/20H-Talent/ikigai-project-3-annasauciuc",
    hrefPreview: "https://annasauciuc.github.io/Form_Project_3/.",
    src: `${form}`,
    alt: "form project"
  },
  {
    id: 3,
    text: "SASS_TEXT",
    title: "SASS_TITLE",
    par: true,
    hrefGit: "https://github.com/annasauciuc/Mock-up-Sass-project",
    hrefPreview: "https://annasauciuc.github.io/Mock-up-Sass-project/",
    src: `${sass}`,
    alt: "sass project"
  },

  {
    id: 4,
    text: "FLOATS_TITLE",
    title: "HIREPASSIONATE",
    par: false,
    hrefGit: "https://github.com/annasauciuc/Netflix-Pixel-Perfect-Project",
    hrefPreview: " https://annasauciuc.github.io/Mock-up-with-floats/",
    src: `${floats}`,
    alt: "floats project"
  },
  {
    id: 5,
    text: "HOW_I_AM_TEXT",
    title: "HOW_I_AM_TITLE",
    par: true,
    hrefGit: "https://github.com/annasauciuc/20h-First-Project",
    hrefPreview: "https://annasauciuc.github.io/20h-First-Project/",
    src: `${howIAm}`,
    alt: "presentation project"
  },
  {
    id: 6,
    text: "FACERECOGNITION_TEXT",
    title: "FACERECOGNITION",
    par: false,
    hrefGit: "https://github.com/annasauciuc/face-recognition-react",
    hrefPreview: "https://brain-smart-api.herokuapp.com/",
    src: `${faceRecog}`,
    alt: "face recognition project"
  }
];
export default projectsData;

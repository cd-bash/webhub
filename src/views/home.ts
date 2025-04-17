import {createThreeBackground, writeTitle} from "./utils";
import {BackgroundChoice} from "../components/three-background";


export function homeView() {
  const article = document.createElement('article');
  const pageTitle = writeTitle("h1", "welcome to my hub");

  createThreeBackground(BackgroundChoice.Home);
  article.appendChild(pageTitle);



  return article;
}

// --------------------------------------------------------------------------------



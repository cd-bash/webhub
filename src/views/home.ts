import {createThreeBackground, writeParagraph, writeTitle} from "./utils";
import {BackgroundChoice} from "../components/three-background";


export function homeView() {
  const article = document.createElement('article');
  const introBlock = document.createElement('div');
  const pageTitle = writeTitle("h1", "pick a track");
  const pageText = writeParagraph("Welcome to my hub! I’m CD-BASH, a creative developer based in Montreal.");

  article.id = 'home-page';
  introBlock.className = 'intro-block';

  createThreeBackground(BackgroundChoice.Home);
  introBlock.appendChild(pageTitle);
  introBlock.appendChild(pageText);
  article.appendChild(introBlock);



  return article;
}

// --------------------------------------------------------------------------------



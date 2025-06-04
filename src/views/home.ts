import {createThreeBackground, writeParagraph, writeTitle} from "./utils";
import {BackgroundChoice} from "../components/three-background";
import {cdCover} from "../components/cd-cover";

export type HomePageContent = {
    readonly title: string;
    readonly introText: string;
}

// --------------------------------------------------------------------------------

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
  article.appendChild(cdCoverSelection());

  return article;
}

// --------------------------------------------------------------------------------

function cdCoverSelection() {
  const cdCovers = document.createElement('div');
  cdCovers.className = 'cd-covers-selection';

  const projectCover = cdCover();
  const aboutCover = cdCover();
  const logsCover = cdCover();

  cdCovers.appendChild(projectCover);
  cdCovers.appendChild(aboutCover);
  cdCovers.appendChild(logsCover);

  return cdCovers;
}


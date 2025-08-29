import './styles.css';
import {arrowButton, createVideoBackground, createWrapper, writeParagraph, writeTitle} from "../utils";
import {homePageContent} from "../../content/home";
import { createPixelGrid } from '../../components/pixel-grid';

export type HomePageContentStructure = {
    readonly hookHeading: string;
    readonly hookBody: string;
    readonly hookVideoWebm: string;
    readonly hookVideoMp4: string;

    readonly philosophy: SectionContent;
}

export type SectionContent = {
    readonly sectionBG: string;
    readonly header: string;
    readonly paragraphs: string[];
}

// --------------------------------------------------------------------------------

export function homeView() {
  const page = document.createElement('div');
  page.id = 'home-page';

  page.appendChild(hookSection());
  page.appendChild(philosophySection());

  return page;
}

// --------------------------------------------------------------------------------

function hookSection() {
  const hook = document.createElement('section');
  const videoBg = createVideoBackground(homePageContent.hookVideoWebm, homePageContent.hookVideoMp4);
  const wrapper = createWrapper();
  const article = document.createElement('article');
  const hookTitle = writeTitle("h1", homePageContent.hookHeading);
  const hookText = writeParagraph(homePageContent.hookBody);
  const arrowDownBtn = arrowButton();

  hook.className = 'hook';
  hookTitle.className = "hook-title";
  hookText.className = "hook-text";

  article.appendChild(hookTitle);
  article.appendChild(hookText);
  article.appendChild(arrowDownBtn);
  wrapper.appendChild(article);
  hook.appendChild(videoBg);
  hook.appendChild(wrapper);

  return hook;
}

function philosophySection() {
  const section = document.createElement('section');
  const wrapper = createWrapper();
  const article = document.createElement('article');
  const title = writeTitle("h2", homePageContent.philosophy.header);

  section.className = 'philosophy';
  section.style.backgroundImage = `url('${homePageContent.philosophy.sectionBG}')`;

  // Create pixel grid using the component
  const pixelGrid = createPixelGrid({
    emptyBias: 'right',
    emptyRatio: 0.5
  });



  section.appendChild(pixelGrid);

  article.appendChild(title);
  homePageContent.philosophy.paragraphs.forEach(paragraph => {
    const p = writeParagraph(paragraph);
    article.appendChild(p);
  })
  wrapper.appendChild(article);
  section.appendChild(wrapper);

  return section;
}

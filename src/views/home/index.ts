import './styles.css';
import {arrowButton, createVideoBackground, createWrapper, writeParagraph, writeTitle} from "../utils";
import {SectionContent, createContentSection} from "./contentSection";
import {homePageContent} from "../../content/home";


export type HomePageContentStructure = {
    readonly hookHeading: string;
    readonly hookBody: string;
    readonly hookVideoWebm: string;
    readonly hookVideoMp4: string;
    readonly philosophy: SectionContent;
    readonly teaser: SectionContent;
}

// --------------------------------------------------------------------------------

export function homeView() {
  const page = document.createElement('div');
  page.id = 'home-page';

  page.appendChild(hookSection());
  page.appendChild(createContentSection(homePageContent.philosophy));
  page.appendChild(createContentSection(homePageContent.teaser));

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

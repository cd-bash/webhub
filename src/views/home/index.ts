import './styles.css';
import {arrowButton, createVideoBackground, createWrapper, writeParagraph, writeTitle} from "../utils";
import {SectionContent, createContentSection} from "./contentSection";
import {homePageContent} from "../../content/home";

export type HomePageContentStructure = {
    readonly hook: HookContent;
    readonly philosophy: SectionContent;
    readonly teaser: SectionContent;
    readonly founder: SectionContent;
}

type HookContent = {
    readonly header: string;
    readonly body: string;
    readonly videoWebem: string;
    readonly videoMp4: string;
}

// --------------------------------------------------------------------------------

export function homeView() {
  const page = document.createElement('div');
  page.id = 'home-page';

  page.appendChild(hookSection(homePageContent.hook));
  page.appendChild(createContentSection(homePageContent.philosophy));
  page.appendChild(createContentSection(homePageContent.teaser));
  page.appendChild(createContentSection(homePageContent.founder));

  return page;
}

// --------------------------------------------------------------------------------

function hookSection(content: HookContent) {
  const hook = document.createElement('section');
  const videoBg = createVideoBackground(content.videoWebem, content.videoMp4);
  const wrapper = createWrapper();
  const article = document.createElement('article');

  hook.className = 'hook';

  article.appendChild(writeTitle("h1", content.header));
  article.appendChild(writeParagraph(content.body));
  article.appendChild(arrowButton());
  wrapper.appendChild(article);
  hook.appendChild(videoBg);
  hook.appendChild(wrapper);

  return hook;
}

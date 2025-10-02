import { createVideoBackground, createWrapper, writeParagraph, writeTitle } from "../utils";
import { CallToActionOptions, createPixelBannerCTA } from '../../components/call-to-action';
import {SectionContent, createContentSection} from "./contentSection";
import {homePageContent} from "../../content/home";
import { createArrowButton } from "../../components/buttons";

export type HomePageContentStructure = {
    readonly hook: HookContent;
    readonly philosophy: SectionContent;
    readonly teaser: SectionContent;
    readonly ctaBannerA: CallToActionOptions; 
    readonly founder: SectionContent;
    readonly sideQuests: SectionContent
    readonly ctaBannerB: CallToActionOptions;
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
  page.appendChild(createContentSection(homePageContent.philosophy, 'philosophy'));
  page.appendChild(createContentSection(homePageContent.teaser, 'teaser'));
  page.appendChild(createPixelBannerCTA(homePageContent.ctaBannerA));
  page.appendChild(createContentSection(homePageContent.founder, 'founder'));
  page.appendChild(createContentSection(homePageContent.sideQuests, 'side-quests'));
  page.appendChild(createPixelBannerCTA(homePageContent.ctaBannerB));

  return page;
}

// --------------------------------------------------------------------------------

function hookSection(content: HookContent) {
  const hook = document.createElement('div');
  const videoBg = createVideoBackground(content.videoWebem, content.videoMp4);
  const wrapper = createWrapper();
  const article = document.createElement('article');

  hook.className = 'hook';

  article.appendChild(writeTitle("h1", content.header));
  article.appendChild(writeParagraph(content.body));
  article.appendChild(createArrowButton('.content-section'));
  wrapper.appendChild(article);
  hook.appendChild(videoBg);
  hook.appendChild(wrapper);

  return hook;
}

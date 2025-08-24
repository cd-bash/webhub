import {createWrapper, writeParagraph, writeTitle} from "./utils";

export type HomePageContent = {
    readonly title: string;
    readonly introText: string;
}

// --------------------------------------------------------------------------------

export function homeView() {
  const page = document.createElement('div');
  page.id = 'home-page';

  page.appendChild(hookSection());



  return page;
}

// --------------------------------------------------------------------------------

function hookSection() {
  const hook = document.createElement('section');
  const wrapper = createWrapper();
  const article = document.createElement('article');
  const hookTitle = writeTitle("h1", "When was the last time you finished a game?");
  const hookText = writeParagraph("CD-Labs’ initiative is to design complete gaming experiences for busy lives.");
  const arrowDownBtn = document.createElement('button');

  hook.className = 'hook';
  hookTitle.className = "hook-title";
  hookText.className = "hook-text";

  article.appendChild(hookTitle);
  article.appendChild(hookText);
  article.appendChild(arrowDownBtn);
  wrapper.appendChild(article);
  hook.appendChild(wrapper);

  return hook;
}




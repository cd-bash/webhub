import {arrowButton, createVideoBackground, createWrapper, writeParagraph, writeTitle} from "./utils";

export type HomePageContent = {
    readonly title: string;
    readonly introText: string;
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
  const videoBg = createVideoBackground();
  const wrapper = createWrapper();
  const article = document.createElement('article');
  const hookTitle = writeTitle("h1", "When was the last time you <span class='highlight'>finished</span> a game?");
  const hookText = writeParagraph("CD-Labs’ initiative is to design <b>complete</b> gaming experiences for <b>busy lives</b>.");
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
  const title = writeTitle("h2", "Games that respect your time.");
  const text_a = writeParagraph("I believe gaming should be an escape, not a second job. But as games have gotten bigger and more demanding, it's become harder to find the time to even finish one.");
  const text_b = writeParagraph("That's why I started cd-labs. My goal is to deliver compact, complete gaming experiences that honor your schedule. Each game is a focused, handcrafted quest meant to be enjoyed in a single sitting or over a few evenings.");

  section.className = 'philosophy';

  article.appendChild(title);
  article.appendChild(text_a);
  article.appendChild(text_b);
  wrapper.appendChild(article);
  section.appendChild(wrapper);

  return section;
}




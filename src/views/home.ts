export function BuildView() {
  const view = document.createElement("main");
  const mainVisuals = DrawVisuals();
  const mainTitle = BuildMainTitle("bonjour, hi");
  const infoBlurb = BuildInfoBlurb("../public/img/common/cd_icon_green.png", "Creative Dev", "CD-BASH");

  for (let i = 0; i < mainVisuals.length; i++) {
    view.appendChild(mainVisuals[i]);
  }

  view.appendChild(mainTitle);
  view.appendChild(infoBlurb);


  return view
}

// --------------------------------------------------------------------------------


function DrawVisuals() {
  const cornerTriangle = document.createElement("div");
  cornerTriangle.className = "corner-triangle";
  const heroVisual = document.createElement("div");
  heroVisual.className = "hero-visual";

  return [cornerTriangle, heroVisual];
}


function BuildMainTitle(titleText: string) {
  const box = document.createElement("div");
  box.className = "main-title";

  const title = document.createElement("h3");
  title.textContent = titleText;

  box.appendChild(title);
  return box;
}


function BuildInfoBlurb(imgPath: string, positionText: string, nameText: string) {
  const box = document.createElement("div");
  box.className = "business-card";
  const icon = document.createElement("img");
  icon.src = imgPath;

  const blurb = document.createElement("article");
  const positionTitle = document.createElement("h2");
  positionTitle.textContent = positionText;
  const name = document.createElement("h1");
  name.textContent = nameText;

  blurb.appendChild(positionTitle);
  blurb.appendChild(name);

  box.appendChild(icon);
  box.appendChild(blurb);

  return box;
}

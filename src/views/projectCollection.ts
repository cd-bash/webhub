import {createThreeBackground, scrollTop, writeParagraph, writeTitle} from "./utils";
import {buildThumbnailList, ProjectCategory} from "../content/projects";
import {BackgroundChoice, updateBackground} from "../components/three-background";
import {endOfLine} from "../components/end-of-line";

const prototrashIntro = "Experimental work around peculiar topics to try out various game design concepts.";
const archivesIntro = "Delve into my design journey by examining the past initiatives that have influenced my current interests.";

//-----------------------------------------------------------------------

export function projectCollectionView() {
    const article = document.createElement('article');
    const pageTitle = writeTitle("h1", "project collection");
    const latestEntries = projectList("Latest Entries", "latest");
    const prototrash = projectList("Prototrash", "prototrash", prototrashIntro);
    const archives = projectList("Archives", "archive", archivesIntro);
    const foo = endOfLine();

    createThreeBackground(BackgroundChoice.Project);
    updateBackground(3200);

    article.appendChild(pageTitle);
    article.appendChild(latestEntries);
    article.appendChild(prototrash);
    article.appendChild(archives);
    article.appendChild(foo);

    scrollTop();
    return article;
}

//-----------------------------------------------------------------------

function projectList(title: string, reference: ProjectCategory = 'latest', intro?: string) {
    const projectSection = document.createElement('section');
    const sectionTitle = writeTitle("h2", title);

    projectSection.appendChild(sectionTitle);

    if (intro) {
        const introText = writeParagraph(intro);
        introText.className = "intro-text";
        projectSection.appendChild(introText);
    }

    projectSection.appendChild(buildThumbnailList(reference));

    return projectSection;
}


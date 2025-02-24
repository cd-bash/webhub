import {ProjectContent} from "../../views/project.ts";
import {ButtonLink} from "../../components/vertical-nav/info-project.ts";
import {thumbnailContent} from "../../components/thumbnail-project";
import {TechUsage} from "../../components/three-radar-chart/radar.ts";

export function createProjectContent(
    title: string,
    subtitle: string,
    tagline: string,
    paragraphs: string[],
    heroVideo: string[],
    imageGallery: string[],
    techs: TechUsage[],
    buttons: ButtonLink[],
    thumbnail: string,
    summary: string,
    tag: string,
    thumbnailColor: string,
    path: string
): {
    content: ProjectContent,
    techs: TechUsage[],
    buttons: ButtonLink[],
    thumbnail: thumbnailContent
} {
    const content: ProjectContent = {
        title,
        subtitle,
        tagline,
        paragraphs,
        heroVideo,
        imageGallery
    };

    const thumbnailContent: thumbnailContent = {
        thumbnail,
        title,
        summary,
        tag,
        thumbnailColor,
        path
    };

    return { content, techs, buttons, thumbnail: thumbnailContent };
}
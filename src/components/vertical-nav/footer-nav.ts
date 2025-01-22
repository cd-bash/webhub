import githubIcon from "./assets/github-icon.svg";
import linkedIcon from "./assets/linkedin-icon.svg";
import instagramIcon from "./assets/instagram-icon.svg";

const githubProfile: string = "https://github.com/CD-BASH"
const linkedinProfile: string = "https://www.linkedin.com/in/charlesdouc/"
const instagramProfile: string = "https://www.instagram.com/charlesdouc/"
const footerCopyrights: string = "© 2025 Charles Doucet - All Rights Reserved";

type SocialLink = [
    path: string,
    image: string,
]

const FOO_SOCIALS: SocialLink[] = [
    [githubProfile, githubIcon],
    [linkedinProfile, linkedIcon],
    [instagramProfile, instagramIcon]
]

//-----------------------------------------------------------------------

export function footerNav() {
    const footerContainer = document.createElement("div");
    const socials = document.createElement("ul");
    const copyrights = document.createElement("p");

    footerContainer.className = "nav-footer";
    socials.className = "socials";
    copyrights.className = "copyrights";
    copyrights.textContent = footerCopyrights;

    footerContainer.appendChild(socials);
    footerContainer.appendChild(copyrights);

    FOO_SOCIALS.forEach(social => {
        const [path, image] = social;
        const socialLink = document.createElement("li");
        const link = document.createElement("a");
        const icon = document.createElement("img");

        link.href = path;
        link.target = "_blank";
        icon.src = image;

        socials.appendChild(socialLink);
        socialLink.appendChild(link);
        link.appendChild(icon);
    })

    return footerContainer;
}
import { insertAllSocials } from "../socials";

export type FooterLinkItem = [
    name: string,
    path: string,
]

const copyrightText = `© All rights reserved ${new Date().getFullYear()} / cd-labs`;

//-----------------------------------------------------------------------

export function buildFooter(links: FooterLinkItem[] = []) {
    const footer = document.createElement("footer");
    footer.id = "main-footer";

    // Create a container for socials and copyrights on the same line
    const footerContent = document.createElement("div");
    footerContent.className = "footer-content";

    const socials = insertAllSocials();
    socials.classList.add('footer-socials');

    const copyrights = document.createElement("p");
    copyrights.className = "copyrights";
    copyrights.textContent = copyrightText;

    // Add socials first (left side), then copyrights
    footerContent.appendChild(socials);
    footerContent.appendChild(copyrights);
    footer.appendChild(footerContent);

    return footer;
}
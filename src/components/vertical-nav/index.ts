import './styles.css';
import {headerNav} from "./header-nav.ts";
import {footerNav} from "./footer-nav.ts";
import {trackBreadcrumbs} from "./breadcrumbs-nav.ts";
export * from "./header-nav.ts";
export * from "./breadcrumbs-nav.ts";
export * from "./footer-nav.ts";

//-----------------------------------------------------------------------

export function VerticalNav() {
    const navBox = document.createElement("div");
    const navWrapper = document.createElement("div");

    navBox.id = "vertical-nav";
    navWrapper.className = "nav-wrapper";


    navBox.appendChild(headerNav());
    navBox.appendChild(navWrapper);
    navWrapper.appendChild(trackBreadcrumbs());
    navBox.appendChild(footerNav());

    return navBox;
}
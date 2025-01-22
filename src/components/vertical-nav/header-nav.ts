import cdIcon from "/img/common/cd_icon_green.png";

const menuTitle = "CD-BASH";

//-----------------------------------------------------------------------

export function headerNav() {
    const headerContainer = document.createElement("div");
    const topTriangle = document.createElement("div");
    const info = document.createElement("div");
    const icon = document.createElement("img");
    const title = document.createElement("h5");

    headerContainer.className = "header";
    topTriangle.className = "top-triangle";

    info.className = "info";
    icon.className = "icon";
    icon.src = cdIcon;

    title.textContent = menuTitle;

    headerContainer.appendChild(topTriangle);
    headerContainer.appendChild(info);
    info.appendChild(icon);
    info.appendChild(title);

    return headerContainer;
}
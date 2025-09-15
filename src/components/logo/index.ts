import './styles.css';
import LOGO from './assets/cd-labs-logo.png';

// --------------------------------------------------------------------------------

export function buildMainLogo() {
    const logoContainer = document.createElement('div');
    const logoLink = document.createElement('a');
    const logoImg = document.createElement('img');
    const logoText = document.createElement('p');

    logoContainer.className = 'main-logo';

    logoLink.href = '/';
    logoImg.src = LOGO;
    logoImg.alt = "CD-Labs Logo";

    logoText.textContent = "CD-Labs";

    logoLink.appendChild(logoImg);
    logoContainer.appendChild(logoLink);
    logoContainer.appendChild(logoText);
    
    return logoContainer;
}

// --------------------------------------------------------------------------------

export function changeLogoOnScroll() {
    const logoContainer = document.querySelector('.main-logo') as HTMLElement;
    if (!logoContainer) return;

    if (window.scrollY > 50) {
        logoContainer.classList.add('scrolled');
    } else {
        logoContainer.classList.remove('scrolled');
    }
}
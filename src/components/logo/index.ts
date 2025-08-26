import './styles.css';
import LOGO from './assets/cd-labs-logo.png';

export function buildMainLogo() {
    const logoContainer = document.createElement('div');
    const logoImg = document.createElement('img');
    const logoText = document.createElement('p');

    logoContainer.className = 'main-logo';

    logoImg.src = LOGO;
    logoImg.alt = "CD-Labs Logo";

    logoText.textContent = "CD-Labs";

    logoContainer.appendChild(logoImg);
    logoContainer.appendChild(logoText);
    
    return logoContainer;
}
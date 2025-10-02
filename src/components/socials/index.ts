import GITHUB_ICON from './assets/github-icon.svg';
import LINKEDIN_ICON from './assets/linkedin-icon.svg';
import INSTAGRAM_ICON from './assets/instagram-icon.svg';

export const socials = {
    github: {
        name: 'GitHub',
        url: 'https://github.com/cd-bash',
        iconSrc: GITHUB_ICON,
    },
    linkedin: {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/charlesdouc/',
        iconSrc: LINKEDIN_ICON,
    },
    instagram: {
        name: 'Instagram',
        url: 'https://www.instagram.com/cd.oucet/',
        iconSrc: INSTAGRAM_ICON,
    },
}

//-----------------------------------------------------------------------

export function insertAllSocials() {
    const container = document.createElement('ul');
    container.className = 'social-icons';

    Object.values(socials).forEach(social => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = social.url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';

        const img = document.createElement('img');
        img.src = social.iconSrc;
        img.alt = `${social.name} Icon`;
        img.className = 'social-icon';

        a.appendChild(img);
        li.appendChild(a);
        container.appendChild(li);
    });
    
    return container;
}
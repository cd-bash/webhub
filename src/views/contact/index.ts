import {createWrapper, writeParagraph, writeTitle} from "../utils";
import { createPixelGridBackground } from "../utils";
import { createContactForm, ContactFormOptions } from "./form";
import { contactContent } from "../../content/contact";
import { insertAllSocials } from "../../components/socials";

export type ContactPageContentStructure = {
    readonly bio: BioContent;
    readonly form: ContactFormOptions; 
}

type BioContent = {
    readonly profilePictureUrl: string;
    readonly title: string;
    readonly bio: string[];
}


// --------------------------------------------------------------------------------

export function contactView() {
    const page = document.createElement('div');

    const pixelGrid = createPixelGridBackground('top', {
        columns: 10,
        colors: ['#0f0f0f', '#2a2a2a', '#181818']
    });

    page.id = 'contact-page';

    const wrapper = createWrapper();

    wrapper.appendChild(bioHeader(contactContent.bio));
    wrapper.appendChild(createContactForm(contactContent.form));

    page.appendChild(pixelGrid);
    page.appendChild(wrapper);
    return page;
}

// --------------------------------------------------------------------------------

function bioHeader(content: BioContent) {
    const bioContainer = document.createElement('div');
    bioContainer.className = 'bio-container';
    
    const profileConatiner = document.createElement('div');
    profileConatiner.className = 'profile-picture';
    const profileImg = document.createElement('img');
    profileImg.src = content.profilePictureUrl;
    profileImg.alt = "Profile Picture";
    profileConatiner.appendChild(profileImg);

    const bioTextContainer = document.createElement('div');
    bioTextContainer.className = 'bio-text';
    const bioTitle = writeTitle("h2", content.title);
    bioTextContainer.appendChild(bioTitle);

    content.bio.forEach(paragraph => {
        bioTextContainer.appendChild(writeParagraph(paragraph));
    });

    bioTextContainer.appendChild(insertAllSocials());

    bioContainer.appendChild(profileConatiner);
    bioContainer.appendChild(bioTextContainer);

    return bioContainer;
}
import { ContactPageContentStructure } from "../../views";

import PROFILE_PIC from './assets/charles-doucet-profile-picture.jpg';


export const contactContent: ContactPageContentStructure = {
    bio: {
        profilePictureUrl: PROFILE_PIC,
        title: 'Hi, I’m **CD**.',
        bio: [
            "I’m a Montreal-based creative developer, fully dedicated to my project, cd-labs. I personally read every message that comes through here and will get back to you as soon as possible."
        ],
    },
    form: {
        formTitle: "**Get in Touch**",
        formInstructions: "Whether you have a general question or an interesting project you'd like to discuss, I'd love to hear from you.",
        embedCode:'<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe8QcAd36IhUt2G2Icbab-1KgxJvCnC-XYApVINyr2UkdzwVQ/viewform?embedded=true" width="640" height="860" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>',
    }
};
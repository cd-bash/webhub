import {AboutContentStructure} from "../../views";

export const aboutContent: AboutContentStructure = {
    title: "About",
    subtitle: "Me, myself and I",
    introTagline: "Charles Doucet (cd)",
    introText: "I’m a Montreal-based designer with a passion for technology and interactive media, driven by my curiosity and thirst for knowledge.",
    gridCategory: [
        {
            title: "Education",
            items: [
                {
                    title: "Computation Arts (BAC)",
                    subtitle: "Concordia University",
                    text: "2016 - 2019 / Graduated with Distinction"
                },
                {
                    title: "Graphic Design (TEC)",
                    subtitle: "Cégep du Vieux Montréal",
                    text: "2011 - 2014"
                }
            ]
        },
        {
            title: "Professional Experience",
            items: [
                {
                    title: "Lead Designer",
                    subtitle: "Behaviour Interactive",
                    text: "October 2021 - Present"
                },
                {
                    title: "UX / UI Designer",
                    subtitle: "Voxco Software",
                    text: "April 2015 - October 2021"
                },
                {
                    title: "Game Developer",
                    subtitle: "Independent",
                    text: "April 2018 - Present"
                }
            ]
        }
    ],
    achievements: [
        {
            title: "Undergraduate Fellow Award",
            description: "Given by Milieux at Concordia. Became a member of TAG (Technoculture, Art and Games) research centre."
        },
        {
            title: "Platinum every Soulsborne games",
            description: "Yep, you read that right. I have earned every trophy from Demon Souls to Elden Ring (even Dark Souls 2)."
        }
    ],
    profileLinks: [
        {
            text: "LinkedIn",
            link: "https://www.linkedin.com/in/charlesdouc/"
        },
        {
            text: "GitHub",
            link: "https://github.com/cdoucet/",
        }
    ]
}
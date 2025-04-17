import {AboutContentStructure} from "../../views";

export const aboutContent: AboutContentStructure = {
    title: "About",
    subtitle: "Me, myself and I",
    introTagline: "Lorem Ipsum",
    introText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
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
            title: "Platinum every Soulsborne game",
            description: "Yep, you read that right."
        }
    ]
}
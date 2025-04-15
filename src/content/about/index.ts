import {AboutContentStructure} from "../../views";

export const aboutContent: AboutContentStructure = {
    title: "About CD",
    subtitle: "Me, myself and I",
    paragraphs: [
        "This is a test paragraph. It is used to test the text utilities.",
        "This is another test paragraph. It is used to test the text utilities.",
        "This is a third test paragraph. It is used to test the text utilities."
    ],
    sections: [
        {
            title: "At a Glance",
            categories: [
                {
                    title: "Education",
                    items: [
                        {
                            title: "Computation Arts (BAC)",
                            subtitle: "Concordia University",
                            text: "2016 - 2019, graduated with distinction"
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
                            subtitle: "Voxco",
                            text: "April 2015 - October 2021"
                        }
                    ]
                }
            ]
        }
    ]
}
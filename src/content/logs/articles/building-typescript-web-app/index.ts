import { LogArticleContentStructure } from '../../../../views/logs';
import { LogArticleMetadata } from '../../../logs';

import HEADER_IMAGE from './assets/first-log-test-header.png';

import CORE_CODE_IMAGE from './assets/log-code-buildingWebsite-core.png';
import VIEWS_CODE_IMAGE_A from './assets/log-code-buildingWebsite-view-layer-a.png';
import VIEWS_CODE_IMAGE_B from './assets/log-code-buildingWebsite-view-layer-b.png';
import VIEWS_CODE_IMAGE_C from './assets/log-code-buildingWebsite-view-layer-c.png';
import VIEWS_CODE_IMAGE_D from './assets/log-code-buildingWebsite-view-layer-d.png';
import CONTENT_CODE_IMAGE from './assets/log-code-buildingWebsite-content.png';
import COMPONENTS_CODE_IMAGE from './assets/log-code-buildingWebsite-components.png';
import STYLES_CODE_IMAGE from './assets/log-code-buildingWebsite-styles.png';

export const logMetadata: LogArticleMetadata = {
    id: 'building-typescript-web-app',
    title: 'Building a Modern Web Application with Pure TypeScript',
    subtitle: 'A Minimalist Architecture Approach',
    date: '2025-09-26',
    excerpt: 'In an era of complex frameworks and numerous dependencies, I chose a different path for this website. Instead of using React, Vue, or Angular, I built a fully-featured web application primarily with TypeScript and Vite.',
    tags: ['TypeScript', 'Web Development', 'Architecture', 'Minimalism'],
    published: true,
    heroVisual: HEADER_IMAGE, // Use imported image URL instead of string path
    readTime: '8 min read'
};

// ------------------------------------------------------------------------

export const logContent: LogArticleContentStructure = {
    metadata: logMetadata,
    header: {
        title: logMetadata.title,
        subtitle: logMetadata.subtitle,
        date: "September 26 / 2025",
        heroVisual: HEADER_IMAGE
    },

    articleBlocks: [
        {
            type: 'intro',
            data: [
                "In an era of **complex frameworks** and **numerous dependencies**, I chose a different path for this website. Instead of using *React*, *Vue*, or *Angular*, I built a fully-featured web application primarily with **TypeScript** and **Vite** for compiling.",
            ]
        },
        {
            type: 'paragraphs',
            data: [
                "CD-Labs's new initiative prompted a complete overhaul of my website. My previous site, last updated in 2019, was built on WordPress using a theme builder.To maintain stability, extensive modifications were avoided. This decision was driven by the numerous plugins essential for WordPress functionality, which had already made the site slow and reliant on code I didn't write.",
            ]
        },

        //-----------------------------------------------------------------------
        {
            type: 'title',
            data: { level: 'h3', text: "**Sub-Challenge**" }
        },
        {
            type: 'paragraphs',
            data: [
                "I'm often surprised by the number of npm libraries developers include. Heavy libraries are sometimes loaded for a single component, making plugin management difficult and npm install commands long.",
                "For this reason, I use minimal libraries, creating my own components and structure. This builds a simplified toolbox, precisely tailored to my website's needs, including my own event bus, routing system, and UI components.",
                "This is achievable given the current project scope but may need reconsideration for future complex features."
            ]
        },

        //-----------------------------------------------------------------------
        {
            type: 'title',
            data: { level: 'h3', text: "**My four-layer** architectural approach" }
        },
        {
            type: 'paragraphs',
            data: [
                "I structured my website using four core layers:",
            ]
        },
        {
            type: 'bulletPoints', data: [
                "**Components**: Reusable UI components that I create",
                "**Content**: Text, images and all the data for the website",
                "**Core** (Backend) : System functionality and tools",
                "**Views** (Frontend): Manages routing and handles all visual components",
            ]
        },
        {
            type: 'paragraphs',
            data: [
                "This organization separates functionality from content and creates a system where each layer has a single responsibility.",
            ]
        },
        {
            type: 'title',
            data: { level: 'h4', text: "**Core**" }
        },
        {
            type: 'paragraphs',
            data: [
                "The core includes the event bus, router, and event handlers.",
                "This setup enables modularity by using events to communicate between different parts of the application. Components can subscribe to events and respond accordingly, maintaining loose coupling while enabling complex interactions between different systems.",
            ]
        },
        {
            type: 'codeImage',
            data: { src: CORE_CODE_IMAGE, alt: "Core code structure" }
        },
        {
            type: 'title',
            data: { level: 'h4', text: "**Views**" }
        },
        {
            type: 'paragraphs',
            data: [
                "The views layer manages all visual aspects including pages, layout components, and utilities for the UI. Each page is built as a TypeScript function that returns HTML elements.",
            ]
        },
        {
            type: 'codeImage',
            data: { src: VIEWS_CODE_IMAGE_A, alt: "Views code structure A" }
        },
        {
            type: 'codeImage',
            data: { src: VIEWS_CODE_IMAGE_B, alt: "Views code structure B" }
        },
        {
            type: 'codeImage',
            data: { src: VIEWS_CODE_IMAGE_C, alt: "Views code structure C" }
        },
        {
            type: 'codeImage',
            data: { src: VIEWS_CODE_IMAGE_D, alt: "Views code structure D" }
        },

        //-----------------------------------------------------------------------
        {
            type: 'title',
            data: { level: 'h4', text: "**Content**" }
        },
        {
            type: 'paragraphs',
            data: [
                "All text, images, and data are stored separately from the views. This separation allows for easy content updates without touching the application logic.",
            ]
        },
        {
            type: 'codeImage',
            data: { src: CONTENT_CODE_IMAGE, alt: "Content code structure" }
        },
        {
            type: 'title',
            data: { level: 'h4', text: "**Components**" }
        },
        {
            type: 'paragraphs',
            data: [
                "I wrote my own reusable components with my own API. Navigation, buttons, cards and grids are all built as modular TypeScript functions.",
            ]
        },
        {
            type: 'codeImage',
            data: { src: COMPONENTS_CODE_IMAGE, alt: "Components code structure" }
        },
        {
            type: 'title',
            data: { level: 'h5', text: "Key Benefits" }
        },
        {
            type: 'bulletPoints', data: [
                "**Modularity**: Each layer can be developed and tested independently.",
                "**Maintainability**: Clear separation of concerns makes debugging and updates straightforward.",
                "**Performance**: No framework overhead, faster load times.",
                "**Customization**: Complete control over every aspect of the application.",
            ]
        },

        //-----------------------------------------------------------------------
        {
            type: 'title',
            data: { level: 'h3', text: "The **style** layer" }
        },
        {
            type: 'paragraphs',
            data: [
                "Like my intention with Typescript, I wanted to rely on pure CSS only for my styling. I needed to create a design system that focuses on a modular approach that mirrors the components and view structures.",
            ]
        },
        {
            type: 'title',
            data: { level: 'h5', text: "Key Benefits" }
        },
        {
            type: 'bulletPoints', data: [
                "**Modularity**: Each component and view has its own dedicated styles.",
                "**Core design set**: Global CSS properties are applied to all base styles throughout the website.",
                "**Performance**: With lazy loading methods, initial page load times are optimized.",
            ]
        },
        {
            type: 'paragraphs',
            data: [
                "I also used CSS custom properties to ensure consistency in my spacings, sizes and colours across the website. Making future modifications easy to manage and scale."
            ]
        },
        {
            type: 'codeImage',
            data: { src: STYLES_CODE_IMAGE, alt: "Styles code structure" }
        },

        //-----------------------------------------------------------------------
        {
            type: 'title',
            data: { level: 'h3', text: "The **back-end** stuff" }
        },
        {
            type: 'paragraphs',
            data: [
                "My primary focus was on the four core architectural layers, but I also took on the development of the back-end. While back-end development isn't my primary area of expertise, as I find it can be overly abstract and rigid. I normally prefer to concentrate on an application's aesthetics and functionalities rather than the behind the scene *magic*. Nonetheless, I developed two simplified systems for event bus and routing for the website.",
                "These systems were developed using only the capabilities of TypeScript, without any external libraries, to manage event subscriptions and website navigation. I used Vite for compiling and building the project into a web app.",
                "Huge thanks to [@papshed](https://github.com/papshed) for the help in understanding the underlying principles and for providing support and peer reviews throughout the process.",
            ]
        },

        //-----------------------------------------------------------------------
        {
            type: 'title',
            data: { level: 'h3', text: "**Conclusion**" }
        },
        {
            type: 'paragraphs',
            data: [
                "This post got a bit more technical than I planned! But honestly, I'm amazed at how powerful and easy to use TypeScript is on its own. I've worked professionally with frameworks like React, Angular, and Blazor, but for me and my needs, nothing beats the simplicity and vast capabilities of pure TypeScript. ",
                "Of course, this is true on my static website that doesn't  rely on heavy features like a shop or accounts management. Nonetheless, it demonstrates that modern web development doesn't always require complex toolchains. Sometimes, the best tool is a deep understanding of the platform itself.",
                "**CD**",
            ],
        }
    ]
}
# WebHub

A modern, minimalist web application built with pure TypeScript and Vite. This project showcases a clean architecture approach without heavy frameworks, focusing on performance and maintainability.

## 🚀 Features

- **Pure TypeScript Architecture** - No React, Vue, or Angular dependencies
- **Modern CSS** - Custom CSS with CSS Grid, Flexbox, and CSS Custom Properties
- **Responsive Design** - Mobile-first approach with fluid layouts
- **Component-Based** - Modular TypeScript components for reusability
- **Dynamic Routing** - Client-side routing system
- **Content Management** - Flexible content structure for blog articles
- **Markdown Support** - Rich text content with markdown-like syntax
- **Performance Optimized** - Minimal bundle size and fast loading

## 🛠️ Tech Stack

- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: CSS3 (no preprocessors)
- **Bundling**: Native ES modules
- **Development**: Hot Module Replacement (HMR)

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── navigation/      # Navigation system
│   ├── buttons/         # Button components
│   ├── footer/          # Footer component
│   └── socials/         # Social media links
├── content/             # Content management
│   ├── home/            # Homepage content
│   ├── about/           # About page content
│   ├── contact/         # Contact page content
│   ├── logs/            # Blog articles
│   └── utils/           # Content utilities
├── core/                # Core application logic
│   ├── router.ts        # Client-side routing
│   ├── event-bus.ts     # Event management
│   └── handlers.ts      # Event handlers
├── styles/              # CSS organization
│   ├── base/            # Reset, variables, typography
│   ├── components/      # Component styles
│   ├── layout/          # Layout systems
│   ├── utilities/       # Helper classes
│   └── views/           # Page-specific styles
└── views/               # Page components
    ├── home/            # Homepage views
    ├── about/           # About page views
    ├── contact/         # Contact page views
    └── logs/            # Blog article views
```

## 🎨 Architecture Philosophy

This project demonstrates how to build a modern web application using:

- **Vanilla TypeScript** for component logic
- **CSS Grid & Flexbox** for layouts
- **CSS Custom Properties** for theming
- **ES Modules** for dependency management
- **Event-driven architecture** for component communication

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/cd-bash/webhub.git
cd webhub
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

## 📝 Content Management

The project features a flexible content management system:

- **Type-safe content** - All content is TypeScript-typed
- **Markdown support** - Rich text with markdown-like syntax
- **Flexible layouts** - Mix different content types in any order
- **Asset management** - Optimized image and video handling

### Adding Content

Content is managed through TypeScript files in the `src/content/` directory. Each content type is fully typed for safety and autocomplete support.

## 🎨 Styling Architecture

CSS is organized using a scalable architecture:

- **Base styles** - Reset, variables, and typography
- **Layout systems** - Reusable layout patterns
- **Components** - Encapsulated component styles
- **Utilities** - Helper classes and responsive utilities
- **Views** - Page-specific styling

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎨 Copyright Notice

### Visual Content & Design

All visual content, including but not limited to:
- Custom graphics and illustrations
- Photography and image compositions
- Video content and animations
- Logo designs and branding elements
- UI/UX design layouts and visual compositions
- Color schemes and design systems

**© 2025 CD-Labs. All rights reserved.**

The visual content and design elements of this website are proprietary and protected by copyright law. They may not be reproduced, distributed, or used in any form without explicit written permission from CD-Labs.

### Code License

The source code of this project (HTML, CSS, TypeScript, and configuration files) is licensed under the MIT License and is available for use, modification, and distribution according to the terms of that license.

### Third-Party Assets

Any third-party assets used in this project retain their original licenses and copyright notices. Please refer to individual asset documentation for specific licensing terms.

---

For licensing inquiries regarding visual content, please contact: [your-email@cd-labs.com]

## 🤝 Contributing

This is a personal portfolio project. While the code is open source under the MIT License, the visual content and design are proprietary to CD-Labs.

## 👨‍💻 Author

**Charles Doucet** - [CD-Labs](https://github.com/cd-bash)

---

*Built with ❤️ using pure TypeScript and modern web standards*

![webhub/cd-labs live website](public/img/git/webhub_wikiheader.png)

CD-Labs main website published online at [www.charlesdoucet.com](https://charlesdoucet.com/).

My goal was to build a modern, minimalist web application built with pure TypeScript and Vite. This project showcases a clean architecture approach without heavy frameworks, focusing on performance and maintainability.

### Features

- **Pure TypeScript Architecture** - No React, Vue, or Angular dependencies
- **Component-Based** - Modular TypeScript components for reusability
- **Dynamic Routing** - Client-side routing system
- **Performance Optimized** - Minimal bundle size and fast loading
- **SEO Ready** - Automatic sitemap and robots.txt generation
- **CI/CD** - The *main* branch is automatically deployed on changes

### Tech Stack

- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: CSS3 (no preprocessors)
- **Bundling**: Native ES modules
- **Development**: Hot Module Replacement (HMR)

### Project Structure

```
src/            # Source code
components/     # Reusable UI components
content/        # Content management
core/           # Core application logic
heads/          # Heads HTML tags
styles/         # CSS organization
views/          # Page components
```

### Wiki

A [wiki](https://github.com/cd-bash/webhub/wiki) documenting every core function is available for this repository. While I strive to keep the documentation current, I utilize GitHub Copilot to draft each section to save time.


![installation](public/img/git/webhub_wikiinstall.png)

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation Commands

```bash
git clone https://github.com/cd-bash/webhub.git    // 1. Clone the repository
```
```bash
npm install     // 2. Install dependencies
```
```bash
npm run dev     // 3. Start development server
```
```bash
npm run build     // 4. Build for production
```

![license](public/img/git/webhub_wikilicense.png)

This project is mainly licensed under the MIT License for code and architecture content - see the [LICENSE](LICENSE) file for details.

The source code of this project (HTML, CSS, TypeScript, and configuration files) is licensed under the MIT License and is available for use, modification, and distribution according to the terms of that license.

However, the visual content and design elements of this website are proprietary and protected by copyrights. They may not be reproduced, distributed, or used in any form without explicit written permission from CD-Labs.

**© 2025 CD-Labs. All rights reserved.**

---

*Built with ❤️ using pure TypeScript and modern web standards*

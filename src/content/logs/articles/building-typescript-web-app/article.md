[intro] In an era of complex frameworks and numerous dependencies, I chose a different path for this website. Instead of using React, Vue, or Angular, I built a fully-featured web application primarily with TypeScript and Vite for compiling.

CD-Labs's new initiative prompted a complete overhaul of my website. My previous site, last updated in 2019, was built on WordPress using a theme builder.To maintain stability, extensive modifications were avoided. This decision was driven by the numerous plugins essential for WordPress functionality, which had already made the site slow and reliant on code I didn’t write.

Access the [project's GitHub](https://github.com/cd-bash/webhub) repository to explore the code in more detail and participate in discussions.

### **Sub-Challenge**

I'm often surprised by the number of npm libraries developers include. Heavy libraries are sometimes loaded for a single component, making plugin management difficult and npm install commands long.

For this reason, I use minimal libraries, creating my own components and structure. This builds a simplified toolbox, precisely tailored to my website's needs, including my own event bus, routing system, and UI components.

This is achievable given the current project scope but may need reconsideration for future complex features.

### Core **Architectural** Philosophy

My website is structured with a clear separation of concerns, divided into four distinct layers.

![Core code structure](CORE_CODE_IMAGE)

This layered approach assigns a distinct responsibility to each layer, promoting a maintainable and scalable codebase without relying on external frameworks.

### 1. **Views Layer**: Page Organization and builder

The views layer manages page-level logic and composition. Each view includes a parent function that returns a complete HTML page, populated by smaller functions focused on individual page sections.

##### Key Benefits

- Each view is self-contained and testable
- No JSX compilation needed - pure DOM manipulation
- Type-safe component composition

![Views code structure - Part A](VIEWS_CODE_IMAGE_A)

A key principle was the separation of content from views. Each view function was designed to be entirely abstract and flexible, providing a content structure while fetching the appropriate data from the content layer.

Here’s for instance how the views dictate the content structure on the home page.

![Views code structure - Part B](VIEWS_CODE_IMAGE_B)

All views utilize shared utility functions to simplify and streamline page creation, ensuring easy management and consistent integration of diverse HTML elements across pages during modifications.

Examples of these functions and their application in page construction are provided below.

![Views code structure - Part C](VIEWS_CODE_IMAGE_C)
![Views code structure - Part D](VIEWS_CODE_IMAGE_D)

### 2. **Content Layer**: Data-Driven Architecture

Rather than hardcoding content directly into views and components, I adopted a content-first strategy, utilizing strongly-typed data structures.

##### Key Benefits

**Content/Presentation Separation**: Content changes don't require code changes
**Type Safety**: Content structure is validated at compile time
**Reusability**: Content can be consumed by multiple views or components

![Content code structure](CONTENT_CODE_IMAGE)

This approach allows me to modify page content without directly manipulating views. I use TypeScript files to compose content types. The content layer also stores assets like videos, images, and logos for composition.

### 3. **Component System**: Custom Reusable Elements

Instead of relying on an existing component framework, I developed my own component utilities using TypeScript. My approach involves creating only the necessary components and maintaining their simplicity to facilitate future iterations and feature development.

##### Key Benefits

- **Modularity**: Components are self-contained and reusable across different views.
- **Simplicity**: Designed to be minimal.
- **Customizability**: Components come with options for diverse situations, allowing for tailored functionality.

Components reside on their own architectural layer due to their inherent complexity and independence. They can be invoked and utilized by views, and populated with data sourced from the content layer.

I developed components for backgrounds, pixel-grids (generated on a canvas!), buttons, and navigation. They all come with options, making them customizable for different situations. For example, the call to action component utilizes factory functions with various options:

![Components code structure](COMPONENTS_CODE_IMAGE)

### 4. **CSS Architecture**: Component-Based Styling

Like my intention with Typescript, I wanted to rely on pure CSS only for my styling. I needed to create a design system that focuses on a modular approach that mirrors the components and view structures.

##### Key Benefits

- **Modularity**: Each component and view has its own dedicated styles.
- **Core design set**: Global CSS properties are applied to all base styles throughout the website.
- **Performance**: With lazy loading methods, initial page load times are optimized.

I also used CSS custom properties to ensure consistency in my spacings, sizes and colours across the website. Making future modifications easy to manage and scale.

![Styles code structure](STYLES_CODE_IMAGE)

### The **back-end** stuff

My primary focus was on the four core architectural layers, but I also took on the development of the back-end. While back-end development isn't my primary area of expertise, as I find it can be overly abstract and rigid. I normally prefer to concentrate on an application's aesthetics and functionalities rather than the behind the scene magic. Nonetheless, I developed two simplified systems for event bus and routing for the website.

These systems were developed using only the capabilities of TypeScript, without any external libraries, to manage event subscriptions and website navigation. I used Vite for compiling and building the project into a web app.

Huge thanks to [@papshed](https://github.com/papshed) for the help in understanding the underlying principles and for providing support and peer reviews throughout the process.

##### CI/CD Setup

I'm really happy with how the CI/CD (Continuous Integration/Continuous Deployment) is set up for the website. Basically, whenever I update my main GitHub branch, it automatically kicks off a deployment. The system runs a bunch of tests to make sure the new changes don't mess anything up. If all the tests pass, GitHub builds the application and then pushes the latest updates straight to my domain server.

### **Final** thoughts

This post got a bit more technical than I planned! But honestly, I'm amazed at how powerful and easy to use TypeScript is on its own. I've worked professionally with frameworks like React, Angular, and Blazor, but for me and my needs, nothing beats the simplicity and vast capabilities of pure TypeScript.

Of course, this is true on my static website that doesn’t rely on heavy features like a shop or accounts management. Nonetheless, it demonstrates that modern web development doesn't always require complex toolchains. Sometimes, the best tool is a deep understanding of the platform itself.

CD
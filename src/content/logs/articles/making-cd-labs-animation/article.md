[intro] My aim for *cd-labs* was to create a distinct and minimalist look. I'd already whipped up a pixelated CD icon in *Aseprite*, taking cues from those old-school *Windows* application icons. The idea with the animation was to bring this icon to **another dimension**, all while keeping its core **cubic**, **pixelated vibe**.

[youtube:hC_jm-TZQIY|cd-labs Animation]

Although I don't consider myself a 3D artist, I have been using and learning Blender since 2017. My work primarily focuses on **low-poly** or **stylized 3D** assets for video games. My animation knowledge is limited to simple keyframing and minimal bone tracking. I had not utilized the camera system to create a complete scene before this cd-labs animation.

I envisioned a challenging animation: uniform blocks detaching to form my cubic CD logo, then a laser reader unfolding to access its data.

While the imagery was clear, the execution presented a **significant challenge** (for me at least).

### Concept and **Storyboarding**

Before anything to do with Blender, I wanted to nail my vision with camera shots. This would give me a clear idea of the direction I wanted and how the story would unfold. It might be an overkill for a 30 seconds animation, but it would help me replicate exactly what I had in mind through the camera perspectives.

I kept my storyboarding process super simple—just **pen and paper**. It might look a bit messy, but it really helps me focus on the next steps.

![Storyboard for cd-labs animation](STORYBOARD_IMAGE){noclick}

### The **Grid**

So, my first idea was to create this lively grid of **simple cubes**, right? And some of them would pop up to form the cd-labs logo, all lit up with bright, **glowing lights**. I started playing around with basic shapes and *array modifiers* to get them lined up, but it was just a slog. And animating all those meshes organically? That felt like a **huge task**.

![Solid view of the 3D grid layout](THE_GRID_IMAGE){noclick}

That's when I initiated **geomety nodes**. I started initiating shapes on points distributed on a grid array. I can control the number of rows and columns, plus the objects I put on them. To introduce inconsistency into the grid, I utilized a **noise texture** in conjunction with a **color ramp**. This technique randomly deleted clusters of cubes, creating empty spaces and thus imperfecting the grid. My intention was to achieve an aesthetic where glimpses of a **light source** would appear to emanate from underneath the grid.

To bring the grid to life, subtle **up-and-down** (z-axis only) movement was added using an additional **noise texture**, ensuring each cube had a unique animation. I moved from basic cubes to more intricate ones, making the top of each cube having a light source. Once that was done, I was ready to start on my CD logo, making it seem like it's rising from the grid.

The complete **geometry node configuration** for the grid is as follows:

![Geometry nodes setup for the grid](THE_GRID_NODES_IMAGE)

### The **CD Logo**

From the grid, my CD logo (a pixelated CD-ROM) would rise up and above the grid. That’s why I wanted to keep each cell  of the grid cubic shaped, to mimic the **pixelated logo**. 

![View of the 3D CD logo formed from 3D cubes](CD_LOGO_IMAGE){noclick}

Again, this effect is possible through geometry nodes. I’ve again created a grid of 3D cubes, but this time, the rows and columns are exactly the **same sizes as the pixel art** (36 x 36 pixels). 

Through a bit of clever manipulation, I can **map** an image texture of my logo onto the grid, scaling it to fit. This allows me to filter out any grid cubes that fall within the transparent (alpha) areas of the image, resulting in a perfect, **cube-instantiated** representation of my logo. I identified each pixel's color and applied it to the emissive material of its corresponding cube, all within the same process.

To create the illusion of certain cubes from the original grid rising to form the CD logo, I used a neat little trick. The CD logo is positioned beneath the grid, and its individual pixel cubes are elevated at varying times. They ultimately overlap the basic grid's cube. This creates the impression that specific cubes from the grid are **transforming** into the CD logo. An effect that works mainly because of the camera's **wide** and **distant** perspective.

![Geometry nodes setup for the cd logo](CD_LOGO_NODES_IMAGE)

### The **Laser Reader**

To further enrich the scene with depth and meaning, beyond the grid and the CD logo as the primary focal point, I chose to incorporate a laser reader. Positioned above the CD logo, this element creates the illusion of **data being read** from the CD.

![View of the 3D laser reader with its laser effect](LASER_IMAGE){noclick}

The model, a hybrid of a **CD and vinyl reader**, moves along its own rail and features a laser effect. This effect was achieved using yet again intricate geometry nodes. I admit, I was unsure how to approach this particular problem and tweaked over this [tutorial](https://www.youtube.com/watch?v=Pw5EgBZULJU) to get the desired result. 

To further enhance the scene's complexity, I incorporated **falling cables**, also generated through geometry nodes (almost an obsession now). These cables interact with and attach to **targetted cubes** positioned out of the cameras' view.

![View of the cables arrangement over the laser reader](CABLES_IMAGE){noclick}

### **Final** Touches

I implemented each camera shot sequentially, primarily relying on **rails** or **path objects**. My goal was to minimize animation of transform properties, anticipating the need for adjustments across various export formats (16:9, square, and vertical).

However, the scene required **additional details** to achieve my vision. Here's a summary of the adjustments made:

- **Emissive Animations**: Subtle glow animations were applied to all emissive materials, enhancing natural imperfections.
- **Post-Processing**: I incorporated post-process effects using composition nodes.
- **Volumetric Ambient Lighting**: The entire scene is enclosed within a fog cube. Above this, a plane with an animated noise texture allows some of the scene’s directional light to penetrate.
- **EEVEE Tuning**: Despite the EEVEE render engine's frequently changing settings, fine-tuning abstract project configurations significantly improved visual fidelity and render times compared to Cycles.
- **Scene Trimming**: Ultimately, some camera shots were removed, as they felt extraneous and unnecessarily extended the animation's length.

![Final overview of the 3D scene](FINAL_IMAGE){noclick}

### **Conclusion**

This project, though ambitious given my **limited animation experience**, proved to be a rewarding journey into the capabilities of Blender's **EEVEE renderer** and **Geometry Nodes**. The final animation successfully captured the minimalist, pixelated aesthetic I envisioned for cd-labs, demonstrating that complex visual effects can be achieved with a focused approach and creative problem-solving within Blender.

CD
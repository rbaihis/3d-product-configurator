# 3D Product Configurator

This repository contains the code for a 3D Product Configurator built with Next.js, TypeScript, Three.js, and Tailwind CSS. The project implements a 3D cube that users can interact with by changing its color and shape (cube, sphere, cylinder). This project is designed to be responsive and styled using Tailwind CSS.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Installation Instructions](#installation-instructions)
- [Features](#features)
- [File Structure](#file-structure)
- [Acknowledgments](#acknowledgments)

---

## Project Overview

This project was created as part of a Full Stack Developer internship assignment at Mashroom. The task was to create a 3D product configurator that allows users to change the shape and color of a 3D object (cube, sphere, or cylinder). The following technologies were used:

- **Next.js**: For the React-based framework and server-side rendering.
- **TypeScript**: For type-safe development.
- **Three.js**: For rendering 3D shapes.
- **Tailwind CSS**: For styling the application in a responsive manner.

## Dependencies

The following versions of the core dependencies were used for this project:

- **Next.js**: `15.1.4`
- **React**: `19.0.0`
- **React-DOM**: `19.0.0`
- **Three.js**: `0.172.0`
- **Tailwind CSS**: `3.4.17`
- **TypeScript**: `5.7.3`

## Installation Instructions

To get the project up and running locally, follow these steps:

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/your-username/3d-product-configurator.git
   ```
2. Navigate to the project directory:
   ```bash
   cd 3d-product-configurator
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Run the application in development mode:
   ```bash
   npm run dev
   ```
5. Open your browser and visit http://localhost:3000 to view the configurator in action.

## Features

* **3D Cube**: Displays a 3D cube by default.
* **Shape Selection**: Users can select from a cube, sphere, or cylinder.
* **Color Selection**: Users can change the color of the 3D shape.
* **Responsive Layout**: The application is styled using Tailwind CSS, making it fully responsive across various screen sizes.

## File Structure

Here is an overview of the file structure in the project
```bash
/app
  ├── page.tsx        # Home page component that renders CubeConfigurator
  └── layout.tsx      # Root layout for the application, setting up metadata and global styles

/components
  ├── Header.tsx      # Header component for the top bar
  ├── Footer.tsx      # Footer component at the bottom of the page
  ├── CubeConfigurator.tsx  # Main component handling shape and color changes
  ├── ShapeControls.tsx     # Controls for selecting shape and color
  └── ThreeScene.tsx        # Renders the 3D shape using Three.js

/styles
  └── globals.css     # Global styles using Tailwind CSS
```

## Acknowledgments

* **Three.js**: Used for rendering the 3D shapes and animations.
* **Tailwind CSS**: For fast and efficient styling of the layout and components.
* **Next.js**: For the React framework used to build the application.

   

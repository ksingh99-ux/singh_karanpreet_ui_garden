# Coding Assignment 12: Web Component Library

A small UI component library made with Create React App, TypeScript, styled-components
and Storybook. The final site (a page showing every component) runs inside a docker
container on localhost:8083.

## what is needed

- Node.js (version 20 or newer) and npm
- Docker Desktop, installed and running
- Git

## the components

Button, Label, Text, Table, TableHeader, TableRow, TableCell, TableFooter, Dropdown,
RadioButton, Img, HeroImage and Card.

Every component has a default state and a disabled state. When disabled, it turns grey
and the cursor changes to "not-allowed". All of them use styled-components and are
responsive (they change layout on small screens).

Each component folder in src/components has these 5 files (example for Button):

- Button.tsx
- Button.stories.tsx
- Button.types.tsx
- Button.tests.tsx
- index.ts

## how I built this project

1. Made a new react app with typescript:
   npx create-react-app singh_karanpreet_ui_garden --template typescript

2. Went into the folder:
   cd singh_karanpreet_ui_garden

3. Installed styled-components and the testing helper:
   npm install styled-components
   npm install --save-dev @types/styled-components jest-styled-components

4. Added storybook (picked "No" for onboarding and "Minimal" for configuration):
   npx storybook@latest init

5. Deleted the example stories storybook made (src/stories) and made my own
   components in src/components, one folder per component.

6. In tsconfig.json I added an "exclude" for the story files so the production
   build doesn't type check them (storybook handles those itself).

7. In package.json I changed the test script so it finds my .tests.tsx files:
   "test": "react-scripts test --watchAll=false --testMatch \"**/*.tests.tsx\""

8. Made src/App.tsx a page that shows every component in its default and disabled state.
   This is the page the docker container serves.

9. Made a Dockerfile and a .dockerignore file in the main project folder.

10. Built the image, ran the container and checked localhost:8083.

11. Pushed the whole project to github.

## run storybook (port 6006)

    npm run storybook

Then open http://localhost:6006 in the browser. Click a component on the left and use
the Controls panel at the bottom to change the text, the background color and the
disabled value. Every component has a Default story and a Disabled story.
Press Ctrl + C in the terminal to stop it.

Storybook uses 6006 (its default port). The final site in docker uses 8083.

## run the tests

    npm test

This runs every .tests.tsx file once. Each component has 2 tests:

- a test that checks the component is visible
- a test that checks the background color changes when the component is disabled

## run the site without docker (optional)

    npm start

This opens the dev version on localhost:3000.

## docker: build and run (port 8083)

The Dockerfile makes a production build of the app (npm run build) and serves it.

1. Build the image (don't forget the dot at the end):

       docker build -t singh_karanpreet_coding_assignment12 .

2. Run the container:

       docker run -d -p 8083:8083 --name singh_karanpreet_coding_assignment12 singh_karanpreet_coding_assignment12

3. Open http://localhost:8083 in the browser. You should see the UI Garden page with
   all 13 components.

Other docker commands:

    docker ps                                          (see running containers)
    docker stop singh_karanpreet_coding_assignment12   (stop it)
    docker start singh_karanpreet_coding_assignment12  (start it again)
    docker rm singh_karanpreet_coding_assignment12     (remove it, stop it first)
    docker images                                      (see the images)

## how to run it yourself

1. Clone the repo:
   git clone https://github.com/ksingh99-ux/singh_karanpreet_ui_garden.git

2. Go into the folder:
   cd singh_karanpreet_ui_garden

3. Build the image:
   docker build -t singh_karanpreet_coding_assignment12 .

4. Run the container:
   docker run -d -p 8083:8083 --name singh_karanpreet_coding_assignment12 singh_karanpreet_coding_assignment12

5. Open localhost:8083 (or 127.0.0.1:8083) in your browser

## checking the assignment requirements

- create react app + storybook: package.json and the .storybook folder
- all 13 components: src/components
- 5 files in each component folder: .tsx, .stories.tsx, .types.tsx, .tests.tsx, index.ts
- styled-components for styling: every component file uses it
- responsive: every component has a @media rule for small screens
- storybook controls: text, background color and disabled controls in every story
- default and disabled state: every component has a Default and a Disabled story,
  disabled turns grey and shows the not-allowed cursor
- 2 tests per component: npm test
- Dockerfile with production build: runs npm run build and serves the build folder
- container name: singh_karanpreet_coding_assignment12
- working directory: /singh_karanpreet_ui_garden
- site on localhost:8083

## project details

- container name: singh_karanpreet_coding_assignment12
- workdir inside the container: singh_karanpreet_ui_garden
- site port: 8083
- storybook port: 6006

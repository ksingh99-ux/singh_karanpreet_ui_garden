# Coding Assignment 12: Web Component Library

A small component library made with React, TypeScript, styled-components and Storybook. The final site runs in a docker container on localhost:8083 (127.0.0.1:8083).

## What I need installed

- Node.js (version 20 or newer)
- Docker Desktop (open and running)
- Git

## Set up the project

Go into the project folder and install the packages

```
cd singh_karanpreet_ui_garden
npm install
```

## How I made it

1. Made the react app with typescript and went into the folder

```
cd C:\projects
npx create-react-app singh_karanpreet_ui_garden --template typescript
cd singh_karanpreet_ui_garden
```

2. Installed styled-components and the testing packages

```
npm install styled-components
npm install --save-dev @types/styled-components jest-styled-components
```

3. Added storybook. It asks 2 questions, I picked "No" for onboarding and "Minimal" for the configuration

```
npx storybook@latest init
```

4. Deleted the example stories that storybook made

```
rmdir /s /q src\stories
```

5. In tsconfig.json I added an exclude at the bottom so the build skips the story files

```
"include": [
  "src"
],
"exclude": [
  "src/**/*.stories.tsx"
]
```

6. Made the 13 components inside src/components, one folder for each

7. Deleted the default test, because I changed App

```
del src\App.test.tsx
```

8. In package.json I changed the test script so it finds my .tests.tsx files

```
"test": "react-scripts test --watchAll=false --testMatch \"**/*.tests.tsx\""
```

9. Changed src/App.tsx so it shows every component, normal and disabled. This is the page the docker container shows

10. Made the Dockerfile and the .dockerignore file in the main project folder

## Run storybook

```
npm run storybook
```

Open localhost:6006. Click a component on the left, then click Default or Disabled. Use the Controls panel at the bottom to change the text, the background color and disabled. Press Ctrl + C in the terminal to stop it.

## Run the tests

```
npm test
```

14 test suites and 27 tests pass.

## Check the production build

```
npm run build
```

It should say "Compiled successfully".

## Run the site on localhost:8083

Open Docker Desktop first, then in the project folder run

```
docker build -t singh_karanpreet_coding_assignment12 .
docker run -d -p 8083:8083 --name singh_karanpreet_coding_assignment12 singh_karanpreet_coding_assignment12
```

What the commands do:
- the dot at the end of docker build means use the Dockerfile in this folder
- -t gives the image a name
- -d runs the container in the background
- -p 8083:8083 connects port 8083 on my computer to port 8083 in the container
- --name gives the container its name

Then open localhost:8083 (or 127.0.0.1:8083) in the browser. The page shows all the components.

Check that it is running

```
docker ps
```

Stop it

```
docker stop singh_karanpreet_coding_assignment12
```

Start it again

```
docker start singh_karanpreet_coding_assignment12
```

Remove it and start fresh (after changing code)

```
docker stop singh_karanpreet_coding_assignment12
docker rm singh_karanpreet_coding_assignment12
docker build -t singh_karanpreet_coding_assignment12 .
docker run -d -p 8083:8083 --name singh_karanpreet_coding_assignment12 singh_karanpreet_coding_assignment12
```

## Push to github

First time (I made an empty repo on github first, then used its link)

```
git add .
git commit -m "Coding Assignment 12"
git branch -M main
git remote add origin <repo url>
git push -u origin main
```

After changing something

```
git add .
git commit -m "describe the change"
git push
```

## The 13 components

Button, Label, Text, Table, TableHeader, TableRow, TableCell, TableFooter, Dropdown, RadioButton, Img, HeroImage and Card.

Each component folder has 5 files, for example Button has Button.tsx, Button.stories.tsx, Button.types.tsx, Button.tests.tsx and index.ts.
# ITinderwebsite

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Deployed

- prod https://itinder.com.ua
- dev https://proud-sea-0a8eeb103.1.azurestaticapps.net

## Table of contents

- [Getting started](#getting-started)
- [Folders structure](#folders-structure)
- [Naming convention](#naming-convention)
- [Technologies](#technologies)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Folders structure

```
├── public
│   ├── favicon.ico
├── src
│   ├── assets
│   │   │   ├── images
│   │   │   └── styles
│   │   │       └── fonts
│   ├── constants
│   │   └── Constants.js
│   ├── components
│   │   ├── global              <---- (Global components)
│   │   │   ├── footer
│   │   │   │   ├── Footer.module.css
│   │   │   │   └── Footer.jsx
│   │   │   └── ...
│   │   └── page                <---- (Page components)
│   │   │   ├── home            <---- (Folder for each page)
│   │   │   │   ├── blog        <---- (Components used ONLY by a specific page)
│   │   │   │   ├── counter
│   │   │   │   ├── ...
│   │   │   │   └── HomePage.jsx
│   │   │   └── ...
│   ├── pages                   <---- (All pages)
│   │   ├── _app_.js
│   │   └── index.js
│   ├── utils                   <---- (Global utilities)
│   │   └── index.js
├── .gitignore
├── package.json
└── README.md
```

### Pages in Next.js

In Next.js, a page is a React Component exported from a file in the pages directory.

Pages are associated with a route based on their file name. For example, in development:

pages/index.js is associated with the / route.

pages/posts/first-post.js is associated with the /posts/first-post route.

## Naming convention

### Folders, files

- **Camel case** for **Folders**: components, footer, welcomeArea

- **Pascal case** for **Files**: HomePage.jsx, Footer.jsx, WelcomeArea.jsx

* **Css classes** for each **component**: {Component name}.module.css

### Javascript

#### Namespaces, Class names, Method names

- PascalCase: Class.CreateItem()

#### Public variables

- PascalCase: Class.Child

#### Private variables

- \_lowercase_camelCase: this.\_db, \_childObjects

#### Parameters, Local variables

- lowercase_camelCase: orderId, userName

### Git

#### Setting up branches

We will be using a branching strategy, where we will have one stable branch **main**, and 3 types of temporary branch types: **hotfix**, **feature** and **release**.

**main** used to publish to live and rollbacks, and should therefore always be in a functional state.

**feature** branches used for developing new features.

_branched out from developer another feature branch, and merged into a release branch._

**release** branches used to merge and prepare one or more completed features.

_branched out from developer after closing the previous release, and merged back into both main andd evelop when the release is ready._

**hotfix** branches used to fix minor issues on live before the next release date.

_branched out from master, and merged back into both master and the next release._

## Technologies

- [React](https://reactjs.org/)
- [NextJS](https://nextjs.org/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [React Countup](https://github.com/glennreyes/react-countup)
- [React Reveal](https://www.react-reveal.com/)
- [React Spring](https://react-spring.dev/)

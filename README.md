# Stockline

## Description

Coding test assessment for Loger Limited

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Coding Practices](#coding-practices)
- [Testing](#testing)

## Installation

To set up the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/KanmaChizea/Stockline.git`
2. Navigate to the project directory: `cd Stocklime`
3. Install dependencies: `npm install` or `yarn install`

## Usage

Once installed, follow these steps to run the project:

### Step 1: Start the Metro Server

To start Metro, run the following command from the root of the project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

### Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

#### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

#### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

### Try The App on Appetize.io

[![Run on Appetize.io](https://appetize.io/images/run.png)](https://appetize.io/app/4tciv3vly6rg7ci6wvvezyjzwi)

## Technologies Used

- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Redux](https://redux-toolkit.js.org/)
- [Redux Persist](https://redux-toolkit.js.org/rtk-query/usage/persistence-and-rehydration)

## Coding Practices

In this project, I've adopted several coding practices to enhance maintainability and reusability:

- **Separation of Logic and UI:**
  Each screen is associated with a view model, ensuring a clear separation of concerns between UI rendering and business logic.

- **Reusable Components:**
  Created reusable components such as buttons, input fields, dropdowns, modals, and list tiles, facilitating consistent UI across the app.

- **Custom Hooks for Simplified Functionality:**
  Implemented custom hooks to streamline certain functionalities, such as a form handling hook and a modal management hook. These hooks simplify complex operations and promote code reuse.

## Testing

To run tests for the project, use the following command:

```bash
npm test


```

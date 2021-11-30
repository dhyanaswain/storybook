# Getting Started with Create React App

A shared UI component library is fundamental to the frontend architecture of a growing company where you have teams maintaining several projects that use the same visual elements. The UI component library ensures visual consistency between projects owned by different teams and improves productivity since you can update components, fix visual issues, and solve similar problems in a single place.

If you have a single project, you don't need a separate library for your components as you can define them directly in your project.

This post shows how to set up and get started using

Create React App for installing React and Testing Library
Storybook for documenting and showcasing components in isolation
Rollup for bundling the library
You can find the resulting project on GitHub.

### npx create-react-app ui --template typescript

## Setting up Storybook

Storybook is a wonderful tool for developing, showcasing and documenting UI components in isolation. Storybook works with any component-based library in JavaScript such as React, Vue, Angular, and more.

To install Storybook in our React application, run this command:
### npx sb init

You should now be able to run Storybook locally by running 
### npm run storybook

Here is a preview of the Storybook application:
    ![Storybook](/hello-tsx-storybook/public/storybook.png)

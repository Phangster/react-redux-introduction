# React-Redux, Introduction to Application State Management

This repository contains 2 apps. 

- Run `npm install` in each app.
- `npm run start` starts an application in development mode, with the ExpressJS server that uses the Webpack dev and hot middlewares with the Babel loader to transpile ES6/React code. 
- `npm run build` builds the files for production and places them into the `public` static resources folder.
- `NODE_ENV=production npm run start` (Linux/MacOS/WSL) or `$env:NODE_ENV="production` then `npm run start` (Windows Powershell) starts the server in production mode, i.e. no Webpack/Babel transpiling. Make sure to run `npm run build` before that!

`react-redux-start` is a simple search front-end for the TVMaze API that uses purely React. Data flows in this app via props drilling and lifting functions. Examine the code. How does the hierarchy of components look like? How are the search results being passed to the Search Results Container component?

`react-redux-final` is the same application, using the Redux library for state management. Examine the App component. Notice how it has become a stateless component?

For a brief reference or description of the various moving parts of Redux, read the comments in the respective files in the Redux folder.

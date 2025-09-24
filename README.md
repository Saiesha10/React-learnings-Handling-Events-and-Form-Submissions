<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
# React-learnings-Handling-Events-and-Form-Submissions
Handling Events, Controlled vs Uncontrolled Components, Event Capturing and Bubbling , Form Submission &amp; Validation

Handling events:

Synthetic Event System in React

In javaScript, events like onclick, onchange, etc. are handled using native browser event APIs.
react introduces SyntheticEvent, which is a cross-browser wrapper around the browser’s native event.
Purpose:
Ensures consistency across browsers.
Adds performance optimization by event pooling (recycling event objects to reduce memory usage).
Event handlers in React are written in camelCase (onClick, onChange) instead of lowercase (onclick).

Using Event Handlers to Handle User Interactions

Event handlers in React are written as functions.
Key rules:
Use camelCase: onClick, onChange.
Pass a function reference, not a string.
Use arrow functions when passing parameters.

Event Bubbling and Capturing

Event Bubbling: When an event happens on a child element, it first runs handlers on the child, then on its parents, moving upward.
Event Capturing: Opposite flow, runs from parent → child, triggered by adding Capture at the end of the event name (e.g onClickCapture).

Using preventDefault()

By default, certain elements have built-in behaviors:
<form> reloads the page when submitted.
<a> navigates to another page.
preventDefault() is used to stop this default behavior and let you handle it with React logic.


Controlled vs Uncontrolled Components

A Controlled Component:
React controls the form input values via state.
The value of the input is fixed to state, and any change updates state.
Benefits: centralized state makes easy validation, conditional rendering, controlled behavior.

An Uncontrolled Component:
The input manages its own state internally (like plain HTML).
React accesses values using refs (useRef).
Useful when you don’t need to validate/manage input on every change.

Creating and Using Forms in React

React forms are built with <form>, <input>, <textarea>, <select>
Controlled forms rely on state management with useState.
use onChange to update state in real time.

Validation of Form Data
Validation ensures users provide correct input before submission.
Can be basic (empty fields, length checks) or advanced (regex for email, password rules).
Done inside the onSubmit handler or in real-time during onChange.
>>>>>>> 56834f207fb3283ec69f9b1fa39c6170b7c62769

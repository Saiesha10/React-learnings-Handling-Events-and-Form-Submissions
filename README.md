

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

React Router
It allows us to build single-page applications (SPA) where navigation between different views/pages happens without reloading the browser.

1. role of react router in client-side routing

in traditional websites: each link points to a new html file, and navigating between pages reloads the browser.
in SPA(single page applications): only one html file (index.html) exists. navigation is handled by javascript, and only part of the page changes.

react router ensures:

smooth transitions between views without reload.
url reflects the current page, making it shareable.
better performance since only the necessary components are re-rendered.

2.setting up routes and links
<browserrouter>: wraps the app and enables routing using the browser’s history api.
<routes>: container for all <route> components.
<route>: defines the path and which component should render.
<link>: navigation without reloading (use instead of <a>)
<navigate>: redirect to another route.
<a> triggers full reload.
<link> updates the view without reload → maintains spa behavior.

3. dynamic routes and parameters
sometimes we need urls with variables (e.g /user/123 → show user with id 123).
react router lets us define dynamic paths using :paramname.

useparams() hook : extract dynamic values from the url.
user profiles (/user/:id)

4. protecting routes with authentication

not every route or page should be publicly accessible.protected routes restrict access to certain pages based on authentication.
example:
/login: open for all
/dashboard: only for logged-in users

implementation approach:
create a protectedroute component.
check if the user is authenticated (using state, jwt tokens, or context).
if authenticated then we render the component.
if not authenticated then we redirect to login.

this is often combined with context api, redux, or localstorage to persist login sessions.

Handling errors and Debugging

1.react developer tools

purpose: inspect, debug, and optimize react applications in the browser.
components tab: visualize component tree, inspect/edit props, state, and hooks.
profiler tab: measure component render times and analyze re-render causes.
install browser extension (chrome, firefox) and access via developer tools. 

2.handling errors and debugging in react
common techniques:
console.log: simplest method to check state, props, or values.
debugger statement: pauses code execution at a specific line.
try-catch blocks: catch runtime errors in functions.

3.understanding and using error boundaries

error boundaries are react components that catch javascript errors in their child component tree, log them, and display a fallback ui instead of crashing the entire app.
only class components can be error boundaries for now.
we implement static getDerivedStateFromError() and componentDidCatch().


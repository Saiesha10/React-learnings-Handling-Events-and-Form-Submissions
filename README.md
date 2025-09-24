

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

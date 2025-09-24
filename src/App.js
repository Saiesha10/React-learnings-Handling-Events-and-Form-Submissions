import React from "react";
import ReactDOM from "react-dom/client";
import { useState,useRef } from 'react';

function SyntheticEventDemo() {
  const handleClick = (event) => {
    console.log("SyntheticEvent:", event);        // React's SyntheticEvent
    console.log("NativeEvent:", event.nativeEvent); // Browser's native event
    alert("Button clicked!");
  };

  return <button onClick={handleClick}>Click Me</button>;
}

function EventHandlerDemo() {
  const sayHello = () => {
    alert("Hello from React!");
  };

  const greetUser = (name) => {
    alert(`Hello, ${name}!`);
  };

  return (
    <div>
      <button onClick={sayHello}>Say Hello</button>
      <button onClick={() => greetUser("Saiesha")}>Greet User</button>
    </div>
  );
}


function EventFlow() {
  const [Count1, setCount1] = useState(0);
  const [Count2, setCount2] = useState(0);

  const handleParentClick = () => {
    alert("Parent clicked!");
    setCount1(Count1 + 1);
  };

  const handleChildClick = (e) => {
    alert("Child clicked!");
    setCount2(Count2 + 1);
  };

  return (
    <div onClick={handleParentClick} style={{ backgroundColor: "lightblue" }}>
      <br />
      Parent Div clicked: {Count1}
      <br />
      <button onClick={handleChildClick}>Child Button</button>
      <br />
      Child button clicked: {Count2}
    </div>
  );
}




function FormSubmissionDemo() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Form submitted with email: ${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
function ValidationForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email); // regex for email
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Invalid email format!");
    } else {
      setError("");
      alert(`Submitted Email: ${email}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Submit</button>
      {error && <p>{error}</p>}
    </form>
  );
}


function App() {
  return (
    <div >
      <div>
      <h2>React Synthetic Event Demo</h2>
      <SyntheticEventDemo />
      </div>
      <div>
        <h2> Event handler
          <EventHandlerDemo/>
        </h2>
      </div>
      <div>
        <h2> Event bubbling and capturing
          <EventFlow/>
        </h2>
      </div>
      <div>
        <h2> Form submission
          <FormSubmissionDemo/>
        </h2>
        email showed on console 
      </div>
      <div>
        <h2> form validation
          <ValidationForm/>
        </h2>
      </div>

      
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;

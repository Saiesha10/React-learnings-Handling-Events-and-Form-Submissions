import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link, useParams, Navigate } from "react-router-dom";

// Home component
function Home() {
  return <h2 style={{textAlign: "center", padding: "20px", backgroundColor: "lightblue"}}> this is the home page</h2>;
}

// About component
function About() {
  return <h2 style={{textAlign: "center", padding: "20px", backgroundColor: "lightpink"}}> this is about page</h2>;
}

// user profile component with dynamic route
function User() {
  const { id } = useParams();
  return <h2 style={{textAlign: "center", padding: "20px", backgroundColor: "green"}}>User profile id: {id}</h2>;
}

// Dashboard (protected)
function Dashboard() {
  return <h2 style={{textAlign: "center", padding: "20px", backgroundColor: "lavender"}}>dashboard (protected)</h2>;
}

// Protected route wrapper
function ProtectedRoute({ isAuth, children }) {
  return isAuth ? children : <Navigate to="/" />;
}


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("error caught:", error, info);
  }

  render() {
    
    if (this.state.hasError) {
      return <h2>something went wrong.</h2>;
    }
    return this.props.children;
  }
}

function Bug() {
  throw new Error("ERROR!");
  return <div>this will not render</div>;
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <div style={{ margin: "20px"}}>
        <h1>react router demo</h1>
        <button
        onClick={() => {
          setIsAuthenticated(!isAuthenticated);
          if (!isAuthenticated) {
            alert("logged in successfully!");
          } else {
            alert("logged out successfully!");
          }
        }}>
        {isAuthenticated ? "logout" : "login"}
        </button>

        <nav>
          <br  />
          <Link to="/" style={{ marginRight: "10px" }}>HOME</Link>
          <br  />
          <Link to="/about" style={{ marginRight: "10px" }}>ABOUT</Link>
          <br  />
          <Link to="/user/101" style={{ marginRight: "10px" }}>USER</Link>
          <br />
          <Link to="/dashboard" style={{ marginRight: "10px" }}>DASHBOARD</Link>
        </nav>
        <p>Dashboard can be accessed only by authenticated users after login.</p>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:id" element={<User />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute isAuth={isAuthenticated}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<h2>Page not found</h2>} />
        </Routes>
      </div>
      <h1>Error and Debugging</h1>
      <ErrorBoundary>
        <Bug />
      </ErrorBoundary>
      <p>error will be logged on console as the component throws error</p>
    </BrowserRouter>
  );
}


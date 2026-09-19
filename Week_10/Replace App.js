import React from "react";
import ReactDOM from "react-dom/client";

function App() {
    return (
        <div>
            <h1>Hello, Tejaswi!</h1>
            <p>Welcome to React.</p>
            <p>This is an example of JSX markup.</p>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <App />
);

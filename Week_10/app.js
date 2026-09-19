import React from "react";

// Function Component
function Header() {
    return <h1>Welcome to My Website</h1>;
}

// Class Component
class Student extends React.Component {
    render() {
        return (
            <div>
                <h2>Student Details</h2>
                <p>Name: Tejaswi</p>
                <p>Course: AIML</p>
            </div>
        );
    }
}

// Parent Component
function App() {
    return (
        <div>
            <Header />
            <Student />
        </div>
    );
}

export default App;

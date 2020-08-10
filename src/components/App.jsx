import React from "react";
import Form from "./Form";

let isLoggedIn = false;
let isRegistered = false;

function App() {
  return (
    <div className="container">
      {isLoggedIn ? <h1> Welcome</h1> : <Form isRegistered={isRegistered} />}
    </div>
  );
}

export default App;

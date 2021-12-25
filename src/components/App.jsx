import React, { useState } from "react";

function App() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");

  function updateFName(e) {
    setFName(e.target.value);
  }
  function updateLName(e) {
    setLName(e.target.value);
  }
  function updateEmail(e) {
    setEmail(e.target.value);
  }

  return (
    <div className="container">
      <h1>
        Hello {fName} {lName}
      </h1>
      <p>{email}</p>
      <form>
        <input onChange={updateFName} name="fName" placeholder="First Name" />
        <input onChange={updateLName} name="lName" placeholder="Last Name" />
        <input onChange={updateEmail} name="email" placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

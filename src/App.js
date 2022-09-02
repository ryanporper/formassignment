import React, { useState } from  'react';

const App = (props) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");  
  const [confirmPW, setConfirmPW] = useState("");  

  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
  
  const createUser = (e) => {
      e.preventDefault();
      const newUser = { firstname, lastname, email, password, confirmPW};
      console.log("Welcome", newUser);
      setHasBeenSubmitted(true);
  };

  const formMessage = () => {
    hasBeenSubmitted ? 
      <h3>Thank you for submitting the form!</h3> :
      <h3>Welcome, please submit the form.</h3> 
  };


  return (
    <div>
    <form onSubmit={ createUser }>
      <h3>{ formMessage() }</h3>
      <div>
        <label>First Name: </label> 
        <input type="text" onChange={ (e) => setFirstname(e.target.value) } />
      </div>
      <div>
        <label>Last Name: </label> 
        <input type="text" onChange={ (e) => setLastname(e.target.value) } />
      </div>
      <div>
        <label>Email Address: </label> 
        <input type="text" onChange={ (e) => setEmail(e.target.value) } />
      </div>
      <div>
        <label>Password: </label>
        <input type="text" onChange={ (e) => setPassword(e.target.value) } />
      </div>
      <div>
        <label>Confirm Password: </label>
        <input type="text" onChange={ (e) => setConfirmPW(e.target.value) } />
      </div>
        <input type="submit" value="Create User" />
    </form>

    <h3>Your Form Data</h3>
    <p>First Name: {firstname}</p>
    <p>Last Name: {lastname}</p>
    <p>Email: {email}</p>
    <p>Password: {password}</p>
    <p>Confirm Password: {confirmPW}</p>
    </div>
  );
};

export default App;
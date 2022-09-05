import React, { useState } from  'react';

const App = (props) => {
  const [firstname, setFirstname] = useState("");
  const [firstnameError, setFirstnameError] = useState("");
  const [lastname, setLastname] = useState("");
  const [lastnameError, setLastnameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");  
  const [passwordError, setPasswordError] = useState("");  
  const [confirmPW, setConfirmPW] = useState("");  
  const [confirmPWError, setConfirmPWError] = useState("");  


  const handleFirstname = (e) => {
    setFirstname(e.target.value);
    if(e.target.value < 1) {
      setFirstnameError("First name required.")
    } else if(e.target.value < 3) {
      setFirstnameError("First name must be at least 2 characters")
    } else {
      setFirstnameError("")
    }
  }

  const handleLastname = (e) => {
    setLastname(e.target.value);
    if(e.target.value < 1) {
      setLastnameError("Last name required.")
    } else if(e.target.value < 3) {
      setLastnameError("Last name must be at least 2 characters")
    } else {
      setLastnameError("")
    }
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
    if(e.target.value < 1) {
      setEmailError("Email name required.")
    } else if(e.target.value < 3) {
      setEmailError("Email must be at least 2 characters")
    } else {
      setEmailError("")
    }
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
    if(e.target.value < 1) {
      setPasswordError("Password name required.")
    } else if(e.target.value < 3) {
      setPasswordError("Password must be at least 2 characters")
    } else {
      setPasswordError("")
    }
  }

  const handleconfirmPW = (e) => {
    setConfirmPW(e.target.value);
    if(e.target.value < 1) {
      setConfirmPWError("Password required.")
    } else if(e.target.value < 3) {
      setConfirmPWError("Password must be at least 2 characters")
    } else {
      setConfirmPWError("")
    }
  }

  // const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
  
  // const createUser = (e) => {
  //     e.preventDefault();
  //     const newUser = { firstname, lastname, email, password, confirmPW};
  //     console.log("Welcome", newUser);
  //     setHasBeenSubmitted(true);
  // };

  // const formMessage = () => {
  //   hasBeenSubmitted ? 
  //     <h3>Thank you for submitting the form!</h3> :
  //     <h3>Welcome, please submit the form.</h3> 
  // };


  return (
    <div>
    <form onSubmit={ (e) => e.preventDefault() }>
      <div>
        <label>First Name: </label> 
        <input type="text" onChange={ handleFirstname } />
        {
          firstnameError ?
          <p style={{color:'red'}}>{firstnameError}</p> : ''
        }
      </div>
      <div>
        <label>Last Name: </label> 
        <input type="text" onChange={ handleLastname } />
        {
          lastnameError ?
          <p style={{color:'red'}}>{lastnameError}</p> : ''
        }
      </div>
      <div>
        <label>Email: </label> 
        <input type="text" onChange={ handleEmail } />
        {
          emailError ?
          <p style={{color:'red'}}>{emailError}</p> : ''
        }
      </div>
      <div>
        <label>Password: </label> 
        <input type="text" onChange={ handlePassword } />
        {
          passwordError ?
          <p style={{color:'red'}}>{passwordError}</p> : ''
        }
      </div>
      <div>
        <label>Confirm Password: </label> 
        <input type="text" onChange={ handleconfirmPW } />
        {
          confirmPWError ?
          <p style={{color:'red'}}>{confirmPWError}</p> : ''
        }
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
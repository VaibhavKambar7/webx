import { useState, useEffect } from "react";
import "./register.css";
function RegistrationForm() {
  const [name, setName] = useState("");
  const [college, setCollege] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [usernameList, setUsernameList] = useState([]);
  const [collegeList, setCollegeList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [errorUsername, setErrorUsername] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  useEffect(() => {
    //to retreive list of usernames
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:4400/api/usernames");
    xhr.onload = () => {
      const response = JSON.parse(xhr.responseText);
      setUsernameList(response.usernamesArr);
      console.log(response.usernamesArr);
    };
    xhr.send();
    
        //to retreive list of colleges
    const xhr2 = new XMLHttpRequest();
    xhr2.open("GET", "http://localhost:4400/api/colleges");
    xhr2.onload = () => {
      const response = JSON.parse(xhr2.responseText);
      setCollegeList(response.colleges);
    };
    xhr2.send();
  }, []);


  function handleSubmit(event) {
    event.preventDefault();
    if (name.trim() === "") {
      setErrorMessage("Name field cannot be empty");
    } else if (usernameList.includes(username)) {
      setErrorMessage("Username already exists");
    } else if (password !== retypePassword) {
      setErrorMessage("Passwords do not match");
    } else {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "http://localhost:4400/api/register");
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.onload = () => {
        if (xhr.status === 200) {
          const data = xhr.response;
          console.log(data);
          setSuccessMessage(data);
        } else {
          const data = xhr.response;
          console.log(data);
          setErrorMessage(data);
        }
      };
      const data = {
        name,
        college,
        username,
        password,
      };
      xhr.send(JSON.stringify(data));
    }
  }
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "http://localhost:4400/api/checkusername");
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.onload = () => {
        if (xhr.status === 200) {
          const data = xhr.response;
          console.log(data);
          setErrorUsername("Username already exists!");
        } else {
          const data = xhr.response;
          console.log(data);
          setErrorUsername("");
        }
      };
      const data = {
        username,
      };
      xhr.send(JSON.stringify(data));
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [username]);
  //hook will re-run every time the username value changes.
  //thats why it shows error when, existing username is entered again
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="college">College:</label>
          <input
            type="text"
            id="college"
            value={college}
            onChange={(event) => setCollege(event.target.value)}
            list="colleges"
          />
          <datalist id="colleges">
            {collegeList.map((college) => (
              <option key={college} value={college} />
            ))}
          </datalist>
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => {
              event.preventDefault();
              setUsername(event.target.value);
              // if(usernameList.includes(event.target.value)){
              // setErrorUsername('Username already exists');
              // }
            }}
          />
          {errorUsername && <div className="error">{errorUsername}</div>}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="retypePassword">Confirm Password:</label>
          <input
            type="password"
            id="retypePassword"
            value={retypePassword}
            onChange={(event) => setRetypePassword(event.target.value)}
          />
        </div>
        <button type="submit">Register</button>
        {errorMessage && <div className="error">{errorMessage}</div>}
        {successMessage && <div className="success">{successMessage}</div>}
      </form>
    </div>
  );
}
export default RegistrationForm;

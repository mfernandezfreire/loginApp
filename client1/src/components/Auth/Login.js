import React from "react";

import useFormState from "../../hooks/useFormState";
import Authservices from "../Auth/Authservices";

function Login() {
  const [username, setUsername, resetName] = useFormState("mfernandezfreire");
  const [password, setPassword, resetPassword] = useFormState("12345678");
  const [dataService, login] = Authservices();

  return (
    <div>
      <h1>Hello I'm a Loggin form</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          login(username, password);
          resetName();
          resetPassword();
        }}
      >
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={setUsername}
        />
        <label>Password:</label>
        <input
          type="text"
          name="username"
          value={password}
          onChange={setPassword}
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;

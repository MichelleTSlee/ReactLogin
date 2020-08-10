import React from "react";
import Input from "./Input";

function Form(props) {
  return (
    <form>
      <Input type="text" placeholder="username" />
      <br />
      <Input type="password" placeholder="password" />
      <br />
      {props.isRegistered === false && (
        <Input type="password" placeholder="confirm password" />
      )}
      <br />
      <button type="submit">
        {props.isRegistered ? "Log in" : "Register"}
      </button>
    </form>
  );
}

export default Form;

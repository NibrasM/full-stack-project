import React from "react";
import { useState } from "react";

export default function SignUp() {
  const values = {};

  function handleInput(type, e) {
    values[type] = e.target.value;
  }

  function handleSubmit(e, type) {
    e.preventDefault();
    if (values.userName && values.password) {
      const headers = new Headers();
      headers.append("content-type", "application/json");
      fetch(`http://localhost:8181/${type}`, {
        headers,
        method: "POST",
        body: JSON.stringify(values),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log("res", res);
        });
    }
  }

  return (
    <div>
      <h1>sign up</h1>
      <form
        onSubmit={(event) => {
          handleSubmit(event, "signup");
        }}
      >
        <label htmlFor="userName">UserName</label>
        <input
          type="text"
          name="userName"
          onInput={(event) => {
            handleInput("userName", event);
          }}
        />
        <label htmlFor="pass">Password</label>
        <input
          type="password"
          name="pass"
          onInput={(event) => {
            handleInput("password", event);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

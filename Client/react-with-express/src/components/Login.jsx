import React from "react";
import { useState } from "react";

export default function Login() {
  const values = {};

  function handleInput(type, e) {
    values[type] = e.target.value;
  }

  function handleSubmit(e, type) {
    e.preventDefault();
    if (values.userName && values.password) {
      //   const headers = new Headers();
      //   headers.append("content-type", "application/json");
      fetch(`http://localhost:8181/${type}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        credentials: "include",
        body: JSON.stringify(values),
      })
        .then((res) => res.text())
        .then((res) => {
          console.log("login res", res);
        });
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form
        onSubmit={(event) => {
          handleSubmit(event, "login");
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

      {/* <h1>create student form</h1>
      <form onSubmit={handleAddStudent}>

      </form> */}
    </div>
  );
}

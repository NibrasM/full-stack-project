import { useState, useEffect } from "react";

export default function Buttons() {
  const person = {
    email: "nibras@gmail.com",
    pass: "1234",
  };

  const handleAdd = async () => {
    await fetch("http://localhost:8181/persons", {
      method: "POST",
      body: JSON.stringify(person),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const handleDelete = async () => {
    await fetch("http://localhost:8181/persons", {
      method: "DELETE",
    });
  };

  const getData = async () => {
    const result = await fetch("http://localhost:8181/persons");
    const data = await result.json();
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1> Connect the react app to the server </h1>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
}

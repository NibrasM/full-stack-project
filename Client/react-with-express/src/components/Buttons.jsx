import { useState, useEffect } from "react";

export default function Buttons() {
  const person = {
    email: "nibras@gmail.com",
    pass: "1234",
  };
  //   const handleClick = () => {
  //     fetch("http://localhost:8181/api/my-endpoint", {
  //       method: "POST",
  //       body: JSON.stringify({ message: "Hello server!" }),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }).then((res) => {
  //       console.log("res", res);
  //     });
  //   };
  const handleClick = async () => {
    await fetch("http://localhost:8181/", {
      method: "POST",
      body: JSON.stringify(person),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  useEffect(() => {
    const getData = async () => {
      const result = await fetch("http://localhost:8181");
      const data = await result.json();
      console.log(data);
    };
    getData();
  }, []);

  return (
    <>
      <h1> connect the react app to the server </h1>
      <button onClick={handleClick}>Click me</button>
      {/* <button onClick={fetch}>Click</button> */}
    </>
  );
}

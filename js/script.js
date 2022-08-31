"use strict";

async function getUsers() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!response.ok) {
        throw new Error("Error: not found");
      }
      const data = await response.json();
      const user = data.find(({company: {name}}) => name === "Johns Group");
      console.log(user);
    } catch (err) {
      console.error(err.message);
    }
  };
  getUsers();
  
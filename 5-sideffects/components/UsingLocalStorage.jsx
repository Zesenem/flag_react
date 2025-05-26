import { useState } from "react";
import { useEffect } from "react";

export default function UsingLocalStorage() {
  // saving user to localStorage and reading the localStorage when the component is mounted

  const [user, setUser] = useState("");

  // useEffect to save user to localStorage

  useEffect(() => {
    console.log("useEffect called");
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  useEffect(() => {
    console.log("user", user);
    localStorage.setItem("user", user);
  }, [user]);

  return (
    <>
      <h1>Using Dependencies in Effect</h1>
      <select value={user} onChange={(e) => setUser(e.target.value)}>
        <option>John</option>
        <option>Jane</option>
        <option>Doe</option>
        <option>Smith</option>
        <option>Mary</option>
        <option>James</option>
      </select>
    </>
  );
}

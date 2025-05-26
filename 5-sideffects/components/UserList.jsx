import { useState, useEffect } from "react";

export default function UserList() {
  const [users, setusers] = useState([]);

  //   useEffect(() => {
  //     fetch("https://my-json-server.typicode.com/JoaoGoncalves/bookables/users")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setusers(data);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching users:", error);
  //       });
  //   }, []);

  //Async Await

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "https://my-json-server.typicode.com/JoaoGoncalves/bookables/users"
        );
        const data = await response.json();
        setusers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    })();
  }, []);

  if (users.length > 0) {
    return (
      <>
        <h1>Users</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <>
      <h1>Loading ...</h1>
    </>
  );
}

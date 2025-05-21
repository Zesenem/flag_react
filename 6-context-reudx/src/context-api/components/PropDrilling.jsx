import { useState, useEffect } from "react";

export default function PropDrilling() {
  const [name, setName] = useState("John");

  return (
    <section>
      <h1>PropDrilling</h1>
      <Hello name={name} changeName={() => setName("Maria")} />
    </section>
  );
}

function Hello(props) {
  return (
    <section>
      <h1>Component Hello</h1>
      <Greetings name={props.name} changeName={props.changeName} />
    </section>
  );
}

function Greetings(props) {
  return (
    <section>
      <h1>Component Greetings</h1>
      <p>Received from Grandpa from Parent Hierarchy: {props.name}</p>
      <button onClick={props.changeName}>Change Name</button>
    </section>
  );
}

import { useEffect, useState } from "react";

export default function SayHello() {
  const greetings = [
    "Hello",
    "Ola",
    "Bonjour",
    "Ciao",
    "Hola",
    "Namaste",
    "Salam",
    "Konnichiwa",
    "Zdravstvuyte",
    "Merhaba",
  ];

  const [index, setIndex] = useState(0);

  // useEffect use every time the component is rendered
  useEffect(() => {
    document.title = greetings[index];
  });

  const randomGreeting = () => {
    setIndex(Math.floor(Math.random() * greetings.length));
  };

  return (
    <section>
      <p>{greetings[index]}</p>
      <button onClick={randomGreeting}> Say Hello</button>
    </section>
  );
}

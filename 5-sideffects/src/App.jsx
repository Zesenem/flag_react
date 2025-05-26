import SayHello from "../components/SayHello";
import UserList from "../components/UserList";
import UsingLocalStorage from "../components/UsingLocalStorage";
import WindowSize from "../components/WindowSize";
import "./App.css";

export default function App() {
  return (
    <>
      <h1>UseEffect - Hook</h1>
      <hr />
      <SayHello />
      <hr />
      <WindowSize />
      <hr />
      <UsingLocalStorage />
      <hr />
      <UserList />
    </>
  );
}

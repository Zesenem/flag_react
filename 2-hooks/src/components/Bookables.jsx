import { useState } from "react";
import { bookables } from "../db.json";

export default function Bookables() {
  const [bookableIndex, setbookableIndex] = useState(0);

  const group = "Rooms";

  const bookablesInGroup = bookables.filter((b) => b.group === group);

  const nextBookable = () => {
    //setbookableIndex( (bookableIndex + 1) % bookablesInGroup.length);
    setbookableIndex(index => (index + 1) % bookablesInGroup.length);
  }



  return (
    <div>
      <ul className="bookables">
        {bookablesInGroup.map((b, i) => (
          <li
            key={b.id}
            className={i === bookableIndex ? "selected" : null}
            onClick={() => setbookableIndex(i)}
          >
            {b.title}
          </li>
        ))}
      </ul>
      <p>
        {" "}
        <button autoFocus onClick={nextBookable}>Next</button>
      </p>
    </div>
  );

};
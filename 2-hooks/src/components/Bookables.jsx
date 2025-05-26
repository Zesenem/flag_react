import { useState } from "react";
import { bookables } from "../db.json";

export default function Bookables() {
  const [bookableIndex, setbookableIndex] = useState(0);
  const [group, setGroup] = useState("Rooms");
  const [details, setDetails] = useState(false);

  const bookablesInGroup = bookables.filter((b) => b.group === group);

  const bookable = bookablesInGroup[bookableIndex];

  const groups = [...new Set(bookables.map((b) => b.group))];

  const nextBookable = () => {
    setbookableIndex((index) => (index + 1) % bookablesInGroup.length);
  };
  const handleGroupChange = (e) => {
    setGroup(e.target.value);
    setbookableIndex(0);
  };

  // useReducer is a good option for this component
  // but not necessary

  return (
    <>
      <div>
        <select onChange={handleGroupChange} value={group}>
          {groups.map((g, i) => (
            <option key={i} value={g}>
              {g}
            </option>
          ))}
        </select>
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
          <button autoFocus onClick={nextBookable}>
            Next
          </button>
        </p>
      </div>
      <div>
        {bookable && (
          <>
            <label htmlFor="details">Show Details</label>
            <input
              type="checkbox"
              id="details"
              checked={details}
              onChange={(e) => setDetails(e.target.checked)}
            />
            {details && (
              <section className="bookableDetails">
                <h2>{bookable.title}</h2>
                <p>
                  <strong>Details:</strong> {bookable.notes}
                </p>
              </section>
            )}
          </>
        )}
      </div>
    </>
  );
}

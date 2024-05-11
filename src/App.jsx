import "./styles.css";
import { useState } from "react";

export default function App() {
  const [value, setValue] = useState("");
  const [out, setNewValue] = useState([]);

  const clickDel = (index) => {
    const updatedList = [...out];
    updatedList.splice(index, 1);
    setNewValue(updatedList);
  };

  const handleClick = () => {
    setNewValue([...out, value]);
    setValue(""); // Clear input field after adding
  };
  return (
    <div className="App">
      <div className="addDel">
        <p>Add and Delete Button</p>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={handleClick}>add</button>
        {/* map the values of names inputted in an order list to display */}
        <ul>
          {out.map((details, index) => (
            <li key={index}>
              {details}
              <button class="button" onClick={() => clickDel(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

//import React from "react";
import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [togg, setTogg] = useState(false);
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = togg ? "App dark" : "App light";

  function flip() {
    setTogg(togg => !togg);
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={flip}>{togg ? "Dark Mode" : "Light Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;

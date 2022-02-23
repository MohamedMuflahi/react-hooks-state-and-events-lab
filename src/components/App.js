import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [appClass, setAppClass] = useState("App light");
  const [buttonColor, setButtonColor] = useState("Light");
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button
          onClick={() => {
            if (appClass === "App dark") {
              setAppClass((appClass) => "App light");
            } else {
              setAppClass((appClass) => "App dark");
            }
          }}
        >{buttonColor} Mode
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;

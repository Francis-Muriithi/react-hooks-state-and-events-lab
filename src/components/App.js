import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [theme, setTheme]= useState(false)

function handleClick(){
  setTheme(theme => !theme);
}
  
function onFilterValueSelected(filterValue){
  console.log(filterValue);

}
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = theme ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} selectedCategory={onFilterValueSelected}/>
    </div>
  );
}

export default App;

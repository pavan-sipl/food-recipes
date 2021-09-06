import { useState, useEffect } from "react";
import './App.css';
import Header from './components/Header';
import Axios from "axios";
import Recipes from "./components/Recipes";

function App() {
const [search, setSearch] = useState("chicken")
const [recipes, setRecipes] = useState([])

const APP_ID = "805d7d16"
const APP_KEY = "0d9c731aa912f693a441da324afc4dbc"

useEffect(() => {
 getRecipes();
}, [])

const getRecipes = async() =>{
  const res = await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  setRecipes(res.data.hits);
  console.log(recipes);
}

const onInputChange = (e) =>{
  setSearch(e.target.value)
}

const onSearchClick = ()=>{
  getRecipes();
}

  return (
    <div className="App">
    <Header search={search} onInputChange={onInputChange} onSearchClick={onSearchClick} />
    <div className="container">
    <Recipes recipes ={recipes} />
    </div>
    </div>
  );
}

export default App;

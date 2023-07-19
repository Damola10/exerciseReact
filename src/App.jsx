import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [anIndex, setIndex] = useState([]);

  useEffect(() => {
    anIndexi();
  },[]);


  function anIndexi() {
    fetch("https://dummyjson.com/products/1")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setIndex(data);
      });
  }

  function nextWord(){
    setIndex((prev)=>prev +1)
  }

function prevWord(){
  setIndex((prev)=>prev -1);
}

  return (
    <div>
      <div className="firstPicture">
        <h1>{anIndex.title}</h1>
        <img src={anIndex.images[0]} alt="" />
        <p>${anIndex.price}</p>
        <p>{anIndex.description}</p>
      </div>

      <div className="SecondPicture">
        <h1>{anIndex.title}</h1>
        <img src={anIndex.images[0]} alt="" />
        <p>${anIndex.price}</p>
        <p>{anIndex.description}</p>
      </div>

      <div className="btn"> 
      {anIndex > 0 ? <button onClick={prevWord}>Prev</button> : null}

      {anIndex < allWords.length-1 ? <button onClick={nextWord}>Next</button> : null}
      </div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from "react";


function App() {
  const [titsbig, setTitsBig] = useState([]);


 

  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries/population/cities")
      .then((res) => res.json())
      .then((data) => {
        data.data.sort((a, b) => a.city.localeCompare(b.city));
        setTitsBig(data.data);
      });
  }, []);

  return (
    <div className="App">
      <select>
        {titsbig.map((v, index) => {
          return <option key={index}>{v.city}</option>;
        })}
      </select>
     
    </div>
  );
}

export default App;

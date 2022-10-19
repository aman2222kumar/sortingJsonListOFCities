import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from "react";


function App() {
  const [town, setTown] = useState([]);


 

  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries/population/cities")
      .then((res) => res.json())
      .then((data) => {
        data.data.sort((a, b) => a.city.localeCompare(b.city));
        setTown(data.data);
      });
  }, []);

  return (
    <div className="App">
      <select>
        {town.map((v, index) => {
          return <option key={index}>{v.city}</option>;
        })}
      </select>
     
    </div>
  );
}

export default App;

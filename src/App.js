import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from "react";


function App() {
  const [titsbig, setTitsBig] = useState([]);
  // const [country, setcountry] = useState();

  // function handlechane(e) {
  //   setcountry(e.target.value);
  // }

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
      {/* <input type="text" value={country} onChange={handlechane}></input>
      <div>
        {titsbig.map((r) => {
          if (country === "") {
            return country;
          } else if (r.city.includes(country)) {
            return r.city;
          }
        })}
      </div> */}
    </div>
  );
}

export default App;

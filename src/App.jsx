import { useState } from "react";

function App() {
  const countries = [
    "Argentina", "Australia", "Austria", "Bangladesh", "Belgium",
    "Brazil", "Canada", "Chile", "China", "Colombia",
    "Denmark", "Egypt", "Finland", "France", "Germany",
    "Greece", "Hungary", "Iceland", "India", "Indonesia",
    "Iran", "Iraq", "Ireland", "Israel", "Italy",
    "Japan", "Jordan", "Kenya", "Malaysia", "Mexico",
    "Morocco", "Nepal", "Netherlands", "New Zealand", "Nigeria",
    "Norway", "Pakistan", "Peru", "Philippines", "Poland",
    "Portugal", "Russia", "Saudi Arabia", "Singapore", "South Africa",
    "Spain", "Sweden", "Thailand", "Turkey", "United Kingdom"
  ];

  const [search, setSearch] = useState("");

  const filteredCountries = countries.filter((country) =>
    country.toLowerCase().startsWith(search.toLowerCase())
  );

  return (
    <div style={{ padding: "30px", fontFamily: "Arial",backgroundColor: "grey" }}>
      <h2>Typable Country Dropdown</h2>

      <input
        type="text"
        placeholder="Type your Country"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "300px",
          padding: "10px",
          fontSize: "16px"
        }}
      />

      {search && (
        <ul
          style={{
            width: "300px",
            border: "1px solid #1a8d39",
            marginTop: "0",
            padding: "0",
            listStyle: "none"
          }}
        >
          {filteredCountries.length > 0 ? (
            filteredCountries.map((country, index) => (
              <li
                key={index}
                style={{
                  padding: "10px",
                  borderBottom: "1px solid rgb(33, 153, 63)",
                  cursor: "pointer"
                }}
                onClick={() => setSearch(country)}
              >
                {country}
              </li>
            ))
          ) : (
            <li style={{ padding: "10px" }}>No matching countries</li>
          )}
        </ul>
      )}
    </div>
  );
}

export default App;
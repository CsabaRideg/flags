import { useState, useEffect } from "react";
import Flag, { type FlagProps } from "./components/flag";


const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [countries, setCountries] = useState<FlagProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <nav>Where in the world? -- <button onClick={() => setDarkMode(!darkMode)}>{darkMode ? "Light Mode" : "Dark Mode"}</button></nav>
      <search>Search for a country...</search>
      <div className="flag-container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          countries.map((flagData) => (
            <Flag key={flagData.country.alpha2Code} country={flagData.country} />
          ))
        )}
      </div>
    </>
  )
}

export default App
import React, {useState} from 'react';
import './App.css';
import SearchBar from "../SearchBar/SearchBar.js";
import BusinessList from "../BusinessList/BusinessList.js";
import Yelp from '../../util/Yelp.js';

function App() {
    const [businesses, setBusinesses] = useState([])

    const searchYelp = async (term, location, sortBy) => {
      const res = await Yelp.searchYelp(term, location, sortBy)
      setBusinesses(res)
    }

    return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar searchYelp={searchYelp} />
      <BusinessList businesses={businesses} /> 
    </div>
  );
}

export default App;

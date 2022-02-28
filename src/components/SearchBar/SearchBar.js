import React, {useState} from "react";
import "./SearchBar.css";

function SearchBar(props) {
    const [term, setTerm] = useState('restaurant')
    const [location, setLocation] = useState('USA')
    const [sortBy, setSortBy] = useState('best_match')

    const sortByOptions = {
        'Best Match': 'best_match',
        'Highest Rated': 'rating',
        'Most Reviewed': 'review_count'
    }
    
    const getSortByClass = sortByOption => { 
        return sortBy === sortByOption ? 'active' : '';
    }

    const handleSortByChange = sortByOption => {
    setSortBy(sortByOption);
    }

    const handleTermChange = e => {
    setTerm(e.target.value);
    }

    const handleLocationChange = e => {
    setLocation(e.target.value);
    }

    const handleSearch = e => {
    props.searchYelp(term, location, sortBy);
    e.preventDefault();
    }

    const handleEnter = e => {
    e.key === 'Enter' && props.searchYelp(term, location, sortBy);
    }

    const renderSortByOptions = () => {
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return(
                <li 
                key={sortByOptionValue} 
                className={getSortByClass(sortByOptionValue)}
                onClick={() => {handleSortByChange(sortByOptionValue)}}>{sortByOption}</li>
            );
        });
    }

    return(
    <div className="SearchBar">
        <div className="SearchBar-sort-options">
            <ul>
                {renderSortByOptions()}
            </ul>
        </div>
        <div className="SearchBar-fields">
            <input 
            placeholder="Search Businesses (restaurants by default)" 
            onChange={handleTermChange} 
            onKeyPress={handleEnter} />
            
            <input 
            placeholder="Where? (USA by default)" 
            onChange={handleLocationChange} 
            onKeyPress={handleEnter} />
        </div>
        <div onClick={handleSearch} className="SearchBar-submit">
            <a>Let's Go</a>
        </div>
    </div>
    );
 }

 export default SearchBar;
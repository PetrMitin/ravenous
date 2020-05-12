import React from "react";
import "./SearchBar.css";

 class SearchBar extends React.Component {
     constructor(props) {
         super(props);

         this.state = {
             term: 'restaurant',
             location: 'USA',
             sortBy: 'best_match'
         }

         this.sortByOptions = {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count'
         }
        
         this.handleTermChange = this.handleTermChange.bind(this);
         this.handleLocationChange = this.handleLocationChange.bind(this);
         this.handleSearch = this.handleSearch.bind(this);
         this.handleSortByChange = this.handleSortByChange.bind(this);
         this.handleEnter = this.handleEnter.bind(this);
     }

     getSortByClass(sortByOption) { 
         return this.state.sortBy === sortByOption ? 'active' : '';
     }

     handleSortByChange(sortByOption) {
        this.setState({sortBy: sortByOption});
     }

     handleTermChange(e) {
        this.setState({term: e.target.value});
     }

     handleLocationChange(e) {
        this.setState({location: e.target.value});
     }

     handleSearch(e) {
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        e.preventDefault();
     }

     handleEnter(e) {
        e.key === 'Enter' && this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
      }

     renderSortByOptions() {
         return Object.keys(this.sortByOptions).map(sortByOption => {
             let sortByOptionValue = this.sortByOptions[sortByOption];
             return(
                 <li 
                 key={sortByOptionValue} 
                 className={this.getSortByClass(sortByOptionValue)}
                 onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>{sortByOption}</li>
             );
         });
     }

     render() {
         return(
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input 
                    placeholder="Search Businesses (restaurants by default)" 
                    onChange={this.handleTermChange} 
                    onKeyPress={this.handleEnter} />
                    
                    <input 
                    placeholder="Where? (USA by default)" 
                    onChange={this.handleLocationChange} 
                    onKeyPress={this.handleEnter} />
                </div>
                <div onClick={this.handleSearch} className="SearchBar-submit">
                    <a>Let's Go</a>
                </div>
          </div>
         );
     }
 }

 export default SearchBar;
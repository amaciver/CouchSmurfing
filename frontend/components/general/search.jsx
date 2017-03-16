import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className='header-search'>
        <form className='header-search-form'>
          <div className='header-search-oval'>
            <input className="header-search" type="text" placeholder="Where are you going?"></input>
            <button
              className="header-search-submit"
              title="Search"
              type='submit'>

              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;

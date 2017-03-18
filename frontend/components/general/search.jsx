import React from 'react';
import Autosuggest from 'react-autosuggest';

const cities = [
 {
   name: "Smurf Village",
   description: "The Smurf Village is the home residence for the Smurfs. It is located in a forest, the exact location of which is unknown to all but Smurfs. It is protected by a magical field that renders it invisible to all outsiders."
 },
 {
   name: "Thundera",
   description: "Thundera is the homeworld of the Thunderians. Before its destruction there was such great peace - particularly among the Cats - that the natives did not even need to worry about covering themselves in protection from attack or the elements."
 },
 {
   name: "Kingdom of Caring",
   description: "The Kingdom of Caring is an establishment of the Care Bear Family. It may or may not be a monarchy. It is known to include the Bears' Care-a-Lot and the Cousins' Forest of Feelings."
 },
 {
   name: "Eternia",
   description: "Eternia is at the center of the universe. At the planet's center lies the Star Seed, a spark left over from the creation of the universe. Possessing it would grant infinite power to its holder."
 },
 {
   name: "Equestria",
   description: "Equestria is inhabited by magical ponies and other talking creatures, such as griffons and dragons. Other animals and creatures also live in Equestria."
 }
]
// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : cities.filter(city =>
    city.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};

// When suggestion is clicked, Autosuggest needs to populate the input element
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {suggestion.name}
  </div>
);


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      suggestions: props.cities
    };
    this.onChange = this.onChange.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
  }

  onChange(event, { newValue }){
    this.setState({
      value: newValue
    })
  }

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested({ value }) {
    this.setState({
      suggestions: getSuggestions(value)
    });
  }

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested() {
    this.setState({
      suggestions: []
    });
  }


  render(){
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input element.
    const inputProps = {
      placeholder: this.props.text,
      value,
      onChange: this.onChange
    };

    const renderInputComponent = inputProps => (
      <div >
        <input className='header-search' {...inputProps} />
        <div></div>
      </div>
    );

    return(
      <div className='header-search'>
        <form className='header-search-form'>
          <div className='header-search-oval'>
            <Autosuggest
              suggestions={suggestions}
              onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
              onSuggestionsClearRequested={this.onSuggestionsClearRequested}
              getSuggestionValue={getSuggestionValue}
              renderSuggestion={renderSuggestion}
              inputProps={inputProps}
              renderInputComponent={renderInputComponent}
            />
            <button
              className="header-search-submit"
              title="Search"
              type='submit'>

              <i className="fa fa-search fa-2x" aria-hidden="true"></i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}
// <input className="header-search" type="text" placeholder={this.props.text}></input>

export default Search;

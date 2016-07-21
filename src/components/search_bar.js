// Here we import the React and pull of the property Component, using the syntax , {Component}, into a variable Component
import React, {Component} from 'react';
// The above syntax would be the same to do the following:
/*const Component = React.Component;*/

// Create a component to be used as the SearchBar - this component will render a text input

// The following is using a funtional component approach - a simple component which is defined based on a function - gets an input (optional) and retuns some JSX
/* const SearchBar = () => {
   return <input />;
 };*/

 // The following will be using an ES6 class to create a more self aware and functioning component
 // Note - since we already imprted the React and pulled the Component property out of it as a variable, we can now extend the Component directly, otherwise we'd need to 'class SearchBar extend React.Component'
 class SearchBar extends Component{
   constructor(props){
     super(props);

     // Managing object state
     this.state = { term: '' };
     //this.onInputChange = this.onInputChange.bind(this);
   }

   // Option 1 - impelementing an Event Handler as part of the class methods - which will be referenced from the input
   onInputChange(term){
      //console.log(event.target.value);  // For Debug
      // Set the state
      this.setState({term: term});
      // Callback function to rerun the search
      this.props.onTermChange(term);
   }

   render(){
     // Option 1
     /*return <input onChange={this.onInputChange} />;*/
     // Option 2 - use an arrow funtion - a more efficient syntx
     return (
       // Creating a controlled input component by manging its value from its state, "value={this.state.term}". The flow is: User type > triggers the event handler using onChange > the arrow funtion for the event handler changes the state of the control "event => this.setState({term: event.target.value})" > as the state of the object is changed, the object re-renders > as it re-renders we set its value from the state "value={this.state.term}"
       // The above flow and controled event is a major concept of react - when the user types he does not change the value just triggers and event which reacts to the event and input...
       <div className="search-bar">
          <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    )
   }
 }

// Export the SearchBar component as the default export of this file - to be used from import statements in other files refercing this file
export default SearchBar;

import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyBQzgSB0LbfFHmfD9uSq-bfWUfYw4L7bFY';

// Create a new component class. This component should produce some HTML
const App = () => {
  return <div>Hi!</div>;
}

// Take this component's generated HTML and put it on the page (component instance, target)
ReactDOM.render(<App />, document.getElementById('app'));

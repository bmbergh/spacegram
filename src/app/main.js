import React from 'react';
import ReactDOM from 'react-dom';
import Friday from './components/test';

class App extends React.Component {
  render() {
    return (
      <div>I heard react is LAME! <Friday /></div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
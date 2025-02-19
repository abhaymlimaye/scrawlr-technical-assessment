import React from 'react';
import UpvoteList from './components/UpvoteList';
import './App.css';
import { UpvoteProvider } from './context/UpvoteContext';

function App() {
  return (
    <UpvoteProvider>
      <div className="app">
        <div className="card">
          <UpvoteList listIndex={0} />
          <UpvoteList listIndex={1} />
          <UpvoteList listIndex={2} />
        </div>
      </div>
    </UpvoteProvider>
  );
}

export default App;

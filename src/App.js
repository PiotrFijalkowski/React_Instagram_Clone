import React from 'react';
import './App.css';
import './post.css';
import Post from './Post';

function App() {
  return (
    <div className="App">
     <div className="App__header">
       <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="logo" className="app_headerImage"/>
     </div>

     <Post />
    </div>
  );
}

export default App;

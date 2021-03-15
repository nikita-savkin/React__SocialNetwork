import React from 'react';

import './App.sass';
import Header from './comps/Header';
import Navigation from './comps/Navigation';
import Footer from './comps/Footer';
import FriendsZone from './comps/FriendsZone';
import AddPost from './comps/AddPost';
import Post from './comps/Post';
import Messages from './comps/Messages';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Navigation />
      <FriendsZone />
      <main className="main">
        <div className="main__wrapper">
          <div className="main__center">
            <Route path="/main" component={Post} />
            <Route path="/messages" component={Messages} />
          </div>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;

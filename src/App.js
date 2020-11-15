import React, { useState } from 'react';
import { UsersList } from './users-lists/UsersList';
import { ToggleButton } from './ToggleButton';
import './App.scss';
import { Post } from './users-lists/user/post/Post';
import { AppContext } from './AppContext';

export function App(props) {

  let [ isLoggedIn, setIsLoggedIn ] = useState(false);
  let [ selectedUser, setSelectedUser ] = useState(null);

  const appContextValue = {
    selectedUser,
    setSelectedUser,
  }

  if(!isLoggedIn) {
    return <div className="App">
      Please login!
      <br/>
      <button onClick={() => setIsLoggedIn(true) }>Login</button>
    </div>
  }

  return <AppContext.Provider value={appContextValue}>
    <div className="App">
      <UsersList></UsersList>
      <Post></Post>
      <div className="comments">Comments!</div>
    </div>
  </AppContext.Provider>
}


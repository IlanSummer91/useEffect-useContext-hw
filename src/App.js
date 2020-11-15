import React, { useState } from 'react';
import { UsersList } from './users-lists/UsersList';
import { ToggleButton } from './ToggleButton';
import './App.scss';
import { Post } from './users-lists/user/post/Post';
import { AppContext } from './AppContext';
import { Comment } from './users-lists/user/post/comment/Comment';


export function App(props) {

  const [ isLoggedIn, setIsLoggedIn ] = useState(false);
  const [ selectedUser, setSelectedUser ] = useState(null);
  const [ selectedPost, setSelectedPost ] = useState(null);

  const appContextValue = {
    selectedUser,
    setSelectedUser,
    selectedPost,
    setSelectedPost,
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
      <Comment id="5"></Comment>
    </div>
  </AppContext.Provider>
}


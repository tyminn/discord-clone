import React, {useEffect} from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Login from './components/Login';
import { auth } from './firebase';
import { login, logout } from './features/userSlice';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(login({
          uid: authUser.uid,
          email: authUser.email,
          displayName: authUser.displayName,
        }))
      } else {
        dispatch(logout());
      }
    })
  }, [dispatch])

  return (
    <div className="app">
      {
        user ? (
          <>
            <Sidebar />
            <Chat />
          </>
        ) : 
          (
            <Login />
          )
    }
    </div>
  );
}

export default App;

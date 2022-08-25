import './App.css';
import Chat from './Components/Chat';
import SignIN from './Components/SignIN';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase.js'

function App() {
  const [user] = useAuthState(auth);
  return (
    <div >
      {user ? <Chat/> : <SignIN/>}
    </div>
  );
}

export default App;

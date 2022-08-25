import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Button } from '@mui/material';
import { auth } from '../firebase.js';

function SignIN() {

  function SigInWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
      <Button style={{ padding: '30px', fontSize: '20px', backgroundColor: 'rgb(247,198,46)', borderRadius: '15px', fontWeight: '600' }} variant="contained" onClick={SigInWithGoogle}> Sign-IN with Google </Button>
    </div>
  )
}

export default SignIN
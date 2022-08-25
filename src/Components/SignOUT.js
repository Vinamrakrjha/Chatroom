import { signOut } from "firebase/auth";
import { auth } from '../firebase.js';
import {Button} from '@mui/material';

function SignOUT() {
  return (
    <div style={{
      display: 'flex', justifyContent: 'center', marginLeft : '-10px',position: 'fixed', width: '100%', backgroundColor: '#FAFAFA', top: 0, borderBottom: 'solid 1px lightgray', zIndex: '10'}}>
        <Button style={{ padding: '20px', backgroundColor: 'rgb(247,198,46)',fontSize: '15px', borderRadius: '0', fontWeight: '600' }} variant="contained" onClick={()=>signOut(auth)} >Sign Out</Button>
    </div>
  )
}

export default SignOUT
import { useState } from 'react'
import { db, auth } from '../firebase.js'
import { Input, Button } from '@mui/material'
import { collection, addDoc, serverTimestamp } from "firebase/firestore";


function SendMessage({scroll}) {
    const [msg, setMsg] = useState('')

    async function sendMessage(e) {
        e.preventDefault();
        const { uid, photoURL } = auth.currentUser;
        await addDoc(collection(db, "messages"), {
            text: msg,
            photoURL,
            uid,
            createdAt: serverTimestamp()
        });
        setMsg('');
        scroll.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div>
            <form onSubmit={sendMessage}>
                <div className="sendMsg">
                    <Input style={{ width: '78%', fontSize: '15px', fontWeight: '550', marginLeft: '5px', marginBottom: '-3px' }} value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Type here..." />
                    <Button disabled={msg===''} style={{ width: '18%', fontSize: '15px', fontWeight: '550', margin: '4px 5% -13px 5%', maxWidth: '200px' }} type='submit' variant="contained" >Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMessage
import { useState } from 'react'
import { db, auth } from '../firebase.js'
import { collection, addDoc, serverTimestamp } from "firebase/firestore";


function SendMessage({scroll}) {
    const [msg, setMsg] = useState('')

    async function sendMessage(e) {
        e.preventDefault();
        const {photoURL, displayName } = auth.currentUser;
        await addDoc(collection(db, "messages"), {
            text: msg,
            photoURL,
            displayName,
            createdAt: serverTimestamp()
        });
        setMsg('');
        scroll.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className='sendMsg'>
            <form onSubmit={sendMessage}>
                <div className='inner-sendMsg'>
                    <input value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Type here..." />
                    <button disabled={msg===''} id="send-button" type='submit'>Send</button>
                </div>
            </form>
        </div>
    )
}

export default SendMessage
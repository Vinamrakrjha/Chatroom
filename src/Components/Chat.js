import { useState, useEffect, useRef } from 'react'
import { db, auth } from '../firebase.js';
import SignOUT from './SignOUT.js'
import { collection, query, orderBy, limit, onSnapshot } from "firebase/firestore";
import SendMessage from './SendMessage.js';

function Chat() {
  const scroll = useRef();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("createdAt"), limit(50));
    onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map(doc => doc.data()))
    });
  }, []);

  return (
    <div>
      <SignOUT />
      <div className="msgs">
        {messages.map(({ id, text, photoURL, uid}) => (
          <div>
            <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
              <img src={photoURL} alt="user" />
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      <SendMessage scroll={scroll}/>
      <div ref={scroll}></div>
    </div>
  )
}

export default Chat
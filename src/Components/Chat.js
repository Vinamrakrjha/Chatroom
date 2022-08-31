import { useState, useEffect, useRef } from 'react'
import { db } from '../firebase.js';
import SignOUT from './SignOUT.js'
import { collection, query, orderBy, onSnapshot, limitToLast } from "firebase/firestore";
import { formatRelative } from 'date-fns'
import SendMessage from './SendMessage.js';
import '../App.css'

function Chat() {
  const scroll = useRef();
  const [messages, setMessages] = useState([]);

  const formatDate = date => {
    let formattedDate = '';
    if (date) {
      formattedDate = formatRelative(date, new Date());
      formattedDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
    }
    return formattedDate;
  };

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("createdAt"), limitToLast(50));
    onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map(doc => doc.data()))
    });
  }, []);

  return (
    <div>
      <SignOUT />
      <div className="msgs">
        {messages.map(({ id, text, photoURL, displayName, createdAt }) => (
          <div>
            <div key={id} id="main-content">
              <div id="userimage"><img src={photoURL} alt="user"/></div>
              <div id="sub-content">
                <div id='inner-sub-content'>
                  <h6 id="displayName">{displayName}</h6>
                  { createdAt?.seconds ? (<h6 id="time">{formatDate(new Date(createdAt?.seconds * 1000))}</h6>) : null }
                </div>
                <p id="usertext">{text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <SendMessage scroll={scroll} />
      <div ref={scroll}></div>
    </div>
  )
}

export default Chat
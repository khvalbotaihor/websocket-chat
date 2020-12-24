import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [messages, setMessages] = useState([
        {message: "Hello Victor", id: "23f2332", user: {id: "sdsdf", name: "Dimich"}},
        {message: "Hello Dimych", id: "df456456", user: {id: "34gsdv", name: "Victor"}},
    ]);

    return (
        <div className="App">
            <div>
                <div style={
                    {border: "1px solid black", padding: "10px", height: "300px", width: "300px", overflowY: "scroll"}
                }>
                    {messages.map(m => {
                        return <div key={m.id}>
                            <b>{m.user.name}:</b> {m.message}
                            <hr/>
                        </div>
                    })}
                </div>
                <textarea>

        </textarea>
                <button>Send</button>
            </div>

        </div>
    );
}

export default App;

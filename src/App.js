import React, {useEffect, useRef, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import * as axios from "axios";

function App() {

    let [user, setUser] = useState([])

    const userNameRef = useRef(null)

    const getUsers = () => {
        axios.get("http://localhost:4333/users")
            .then((res) => setUser(res.data))
    }

    useEffect(() => {
        getUsers()
    }, [])


    let addUser = () => {
        debugger
        axios.post("http://localhost:4333/users", {name: userNameRef.current.value})
            .then((res) => {
                    console.log(res)
                    getUsers()
                }
            )


    }

    return (
        <div>
            <input ref={userNameRef}/>
            {
                user.map((u) => <div>{u.name}</div>)

            }
            <button onClick={addUser}>Add User</button>
        </div>
    )
}

export default App;

import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Home/Home';
import Login from './LoginScreen/Login';
import Regis from './RegisScreen/Regis';
import User from "./scripts/User";


class App extends React.Component {

    showUsername() {
        const user = new User();
        return user.username
    }

    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/regis" element={<Regis />} />
                </Routes>
            </Router>
        );
    }
}

export default App;
import './App.css';
import MainPage from "./Component/MainPage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Admin from "./Component/Admin";
import {useState} from "react";
import img from "./images/Logo.png";


function App() {

    const [admin, setAdmin] = useState({text:"Welcome to SystemPackage",image:img});

    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route exact path={"/"} element={<MainPage admin={admin} setAdmin={setAdmin}/>}/>
                    <Route exact path={"/admin"} element={<Admin setAdmin={setAdmin}/>}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;

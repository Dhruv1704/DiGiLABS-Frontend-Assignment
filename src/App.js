import './App.css';
import Navbar from "./Component/Navbar";
import Signin from "./Component/Signin";
import Carousal from "./Component/Carousal";
import OTP from "./Component/OTP"
import {useState} from "react";
import Signup from "./Component/Signup";
import Success from "./Component/Success";

function App() {

    const [timer, setTimer] = useState(10);
    const [cOTP, setCOTP] = useState(0);

    function passwordHideShow(n) {
        const passwordInput = document.querySelector("#password"+n)
        const eye = document.querySelector("#eye"+n)
        eye.classList.toggle("fa-eye-slash")
        const type = passwordInput.getAttribute("type") === "password" ? "text" : "password"
        passwordInput.setAttribute("type", type)
    }

    const setOTPNumber = ()=>{
        let otp = Math.floor(100000 + Math.random() * 900000)
        setCOTP(otp);
        alert("Your OTP is-"+otp)
    }

    return (
        <div className="App">
            <Navbar/>
            <div className={"main"} id={"main"}>
                <div className={"carousal-rotate-div"}>
                    <Carousal classname={"main-banner"}/>
                    <Carousal classname={"rotate-banner"}/>
                    <Carousal classname={"rotate-banner"}/>
                </div>
                <div className={"signin-otp-div"}>
                    <Signup passwordHideShow={passwordHideShow}/>
                    <Signin setTimer={setTimer} passwordHideShow={passwordHideShow} setOTPNumber={setOTPNumber}/>
                    <OTP timer={timer} setTimer={setTimer} cOTP={cOTP} setOTPNumber={setOTPNumber}/>
                </div>
            </div>
            <Success/>
        </div>
    );
}

export default App;

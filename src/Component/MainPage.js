import Navbar from "./Navbar";
import Signin from "./Signin";
import Carousal from "./Carousal";
import OTP from "./OTP"
import {useEffect, useState} from "react";
import Signup from "./Signup";
import Success from "./Success";
import img from "../images/Logo.png"


export default function MainPage(props) {
    const [timer, setTimer] = useState(10);
    const [cOTP, setCOTP] = useState(0);
    const {admin, setAdmin} = props

    useEffect(()=>{
        fetchAdmin()
            .then(()=> console.log("admin fetch successfull"))
            .catch((e)=> console.log(e,"error occurred"))
    },[])
    const fetchAdmin = async ()=>{
        const response = await fetch("http://localhost:5000")
        const json = await response.json()
        const base64String = btoa(
            String.fromCharCode(...new Uint8Array(json.image.data.data))
        )
        const imageSrc = `data:image/*;base64,${base64String}`
        const newAdmin = {
            text:json.text,
            image:imageSrc
        }
        setAdmin(newAdmin)
    }

    function passwordHideShow(n) {
        const passwordInput = document.querySelector("#password" + n)
        const eye = document.querySelector("#eye" + n)
        eye.classList.toggle("fa-eye-slash")
        const type = passwordInput.getAttribute("type") === "password" ? "text" : "password"
        passwordInput.setAttribute("type", type)
    }

    const setOTPNumber = () => {
        let otp = Math.floor(100000 + Math.random() * 900000)
        setCOTP(otp);
        alert("Your OTP is-" + otp)
    }

    return (
        <>
            <Navbar admin={admin}/>
            <div className={"main"} id={"main"}>
                <div className={"carousal-rotate-div"}>
                    <Carousal classname={"main-banner"}/>
                    <Carousal classname={"rotate-banner"}/>
                    <Carousal classname={"rotate-banner"}/>
                </div>
                <div className={"signin-otp-div"}>
                    <Signup passwordHideShow={passwordHideShow}/>
                    <Signin setTimer={setTimer} passwordHideShow={passwordHideShow} setOTPNumber={setOTPNumber} admin={admin}/>
                    <OTP timer={timer} setTimer={setTimer} cOTP={cOTP} setOTPNumber={setOTPNumber}/>
                </div>
            </div>
            <Success admin={admin}/>
        </>
    );
}
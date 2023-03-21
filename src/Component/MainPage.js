import Navbar from "./Navbar";
import Signin from "./Signin";
import Carousal from "./Carousal";
import OTP from "./OTP"
import {useEffect, useState} from "react";
import Signup from "./Signup";
import Success from "./Success";
import emailjs from "@emailjs/browser"


export default function MainPage(props) {
    const [timer, setTimer] = useState(10);
    const [cOTP, setCOTP] = useState(0);
    const [email, setEmail] = useState("email");
    const {admin, setAdmin} = props

    useEffect(()=>{
        fetchAdmin()
            .then(()=> console.log("admin fetch successfull"))
            .catch((e)=> console.log(e,"error occurred"))
        // eslint-disable-next-line
    },[])
    const fetchAdmin = async ()=>{
        const response = await fetch("https://digilabs-backend.vercel.app/")
        const json = await response.json()
        const newAdmin = {
            text:json.text,
            image:json.image
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
        sendEmail(otp)
        alert("Your OTP is-" + otp+ " and it has also been emailed to you using emailjs")
    }

    const sendEmail = (otp)=>{
        const params = {
            email : email,
            message : otp
        }
        emailjs.send("service_o8bqi8g", "template_lkrd5tf", params,"NDbkAsVkcijeZ68qr")
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
                    <Signin setEmail={setEmail} setTimer={setTimer} passwordHideShow={passwordHideShow} setOTPNumber={setOTPNumber} admin={admin}/>
                    <OTP timer={timer} email={email} setTimer={setTimer} cOTP={cOTP} setOTPNumber={setOTPNumber}/>
                </div>
            </div>
            <Success admin={admin}/>
        </>
    );
}
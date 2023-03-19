import OTPInput from "otp-input-react";
import {useEffect, useState} from "react";

export default function OTP(props){
    const {timer, setTimer, setOTPNumber, cOTP, email} = props;
    const [OTP, setOTP] = useState("");

    useEffect(()=>{
        const Timer = ()=>{
            setTimeout(()=>{
                if(timer>0 && document.getElementById("OTP-div").style.transform!=="scale(0)"){
                    setTimer(timer-1)
                }
            },1000)
        }
        Timer();
    })


    const backSignin = ()=>{
        document.getElementById("OTP-div").style.cssText = `
            opacity:0;
            transform: scale(0);
        `
        document.getElementById("signin-div").style.cssText = `
            opacity:1;
            transform: scale(1);
        `
    }

    const OTPverify = (otp)=>{
        if(otp.toString().length===6){
            if(otpgit ==cOTP){
                document.getElementById("navbar").style.display = "none"
                document.getElementById("main").style.display = "none"
                document.getElementById("success-div").style.display = 'flex'
            }else{
                console.log(cOTP)
                console.log(otp)
                alert("Wrong OTP")
            }
        }
    }


    return(
        <div className={"main-content-div"} id={"OTP-div"}>
            <h1 className={"title"}>Enter the verification <br/> code to continue.</h1>
            <h4 className={"OTP-subtitle"}>We sent to <a href={`mailto:${email}`} rel={"noreferrer"} target={"_blank"}>{email} </a>. If you don't see it, check your spam.</h4>
            <OTPInput value={OTP} onChange={(OTP)=>{
                OTPverify(OTP);
                setOTP(OTP)
            }} autoFocus OTPLength={6} otpType="number" disabled={false} secure className={"OTP-input"}/>
            <div className={"resend-div"}>
                <p onClick={backSignin}>Back</p>
                {timer === 0
                    ? <p onClick={()=>{
                        setOTPNumber()
                        setTimer(10);
                    }}>Resend</p>
                    : <p className={"resend-timer"}>Resend 00:{timer!==10?0:null}{timer}</p>
                }
            </div>
        </div>
    );
}
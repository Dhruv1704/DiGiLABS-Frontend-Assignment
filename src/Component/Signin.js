export default function Signin(props) {

    const {setTimer, passwordHideShow, setOTPNumber} = props;
    const showOTP = ()=>{
        const credentials = localStorage.getItem("credentials")
        const data = JSON.parse(credentials)
        let k = false;
        data.forEach((element)=>{
            const email = document.getElementById("signin-email").value + document.getElementById("signin-select").value
            const password = document.getElementById("password1").value
            if(element.email===email && element.password===password){
                k=true;
            }
        })
        if(!k){
            alert("Invalid Email or Password.")
        }
        else {
            document.getElementById("signin-form").reset()
            document.getElementById("signin-div").style.cssText = `
            opacity:0;
            transform: scale(0);
        `
            document.getElementById("OTP-div").style.cssText = `
            opacity:1;
            transform: scale(1);
        `
            setOTPNumber()
            setTimer(10)
        }
    }

    return (
        <div className={"main-content-div"} id={"signin-div"}>
                <h1 className={"title"}>Welcome to <br/>Systempackage</h1>
                <form className={"signin-form"} id={"signin-form"}>
                    <input className={"signin-input"} id={"signin-email"} placeholder={"Email"}/>
                    <select className={"signin-select"} id={"signin-select"}>
                        <option value={"@heads.design"}>@heads.design</option>
                        <option value="" className={"option-for-space"} disabled>&nbsp;</option>
                        <option value={"@gmail.com"}>@gmail.com</option>
                        <option value="" className={"option-for-space"} disabled>&nbsp;</option>
                        <option value={"@outlook.com"}>@outlook.com</option>
                        <option value="" className={"option-for-space"} disabled>&nbsp;</option>
                    </select>
                    <br/>
                    <input className={"signin-input"} id="password1" placeholder={"Password"} type={"password"}/>
                    <i className="fa-solid fa-eye" id="eye1" onClick={()=>passwordHideShow(1)}></i>
                    <br/>
                    <button type={"button"} className={"signin-button"} onClick={showOTP}><span className={"signin-button-span"}>Next</span></button>
                    <br/>
                    <div className={"signin-forgot-div"}>
                        <p className={"signin-forgot"}>Forgot your password?</p>
                    </div>
                </form>
        </div>
    );
}


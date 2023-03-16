export default function Signup(props){

    const {passwordHideShow} = props;

    const signUp = ()=>{
        const email = document.getElementById("signup-email").value + document.getElementById("signup-select").value
        const password = document.getElementById("password2").value
        const confirmPassword = document.getElementById("password3").value
        if(password!=confirmPassword){
            alert("The password does not match")
        }
        else{
            let credentials = localStorage.getItem("credentials")
            if(credentials===null){
                localStorage.setItem("credentials",JSON.stringify([]))
                credentials = localStorage.getItem("credentials")
            }
            const data = JSON.parse(credentials)
            const obj = {
                email:email,
                password:password
            }
            data.push(obj)
            localStorage.setItem("credentials",JSON.stringify(data))
            document.getElementById("signup-form").reset()
            document.getElementById("signup-div").style.cssText = `
            opacity:0;
            transform: scale(0);
        `
            document.getElementById("signin-div").style.cssText = `
            opacity:1;
            transform: scale(1);
        `
        }
    }

    return(
        <div className={"main-content-div"} id={"signup-div"}>
            <h1 className={"title"}>Sign Up</h1>
            <form className={"signin-form"} id={"signup-form"}>
                <input className={"signin-input"} placeholder={"Email"} id={"signup-email"}/>
                <select className={"signin-select"} id={"signup-select"}>
                    <option value={"@heads.design"}>@heads.design</option>
                    <option value="" className={"option-for-space"} disabled>&nbsp;</option>
                    <option value={"@gmail.com"}>@gmail.com</option>
                    <option value="" className={"option-for-space"} disabled>&nbsp;</option>
                    <option value={"@outlook.com"}>@outlook.com</option>
                    <option value="" className={"option-for-space"} disabled>&nbsp;</option>
                </select>
                <br/>
                <input className={"signin-input"} id="password2" placeholder={"Enter Password"} type={"password"}/>
                <i className="fa-solid fa-eye" id="eye2" onClick={()=>passwordHideShow(2)}></i>
                <br/>
                <input className={"signin-input"} id="password3" placeholder={"Confirm Password"} type={"password"}/>
                <i className="fa-solid fa-eye" id="eye3" onClick={()=>passwordHideShow(3)}></i>
                <br/>
                <button type={"button"} className={"signin-button"} onClick={signUp}><span className={"signin-button-span"}>Sign Up</span></button>
            </form>
        </div>
    )
}
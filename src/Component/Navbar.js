import img from "../images/Logo.png"

export default function Navbar() {

    const showSignup = ()=>{
        document.getElementById("signin-div").style.cssText = `
            opacity:0;
            transform: scale(0);
        `
        document.getElementById("signup-div").style.cssText = `
            opacity:0;
            transform: scale(0);
        `
        document.getElementById("signup-div").style.cssText = `
            opacity:1;
            transform: scale(1);
        `
    }

    return (
        <div className={"navbar"} id={"navbar"}>
            <div>
                <img src={img} alt={"subtract icon"} className={"navbar-icon"}/>
            </div>
            <div className={"navbar-right"}>
                <p className={"navbar-p"}>Not member? <span className={"create-account"} onClick={showSignup}>Create Account</span></p>
            </div>
        </div>
    );
}
import img from "../images/Logo.png"

export default function Success(){
    return(
        <div id={"success-div"}>
            <img src={img}/>
            <h4 className={"success-p"}>Success!</h4>
        </div>
    )
}
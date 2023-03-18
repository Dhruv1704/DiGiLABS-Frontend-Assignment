export default function Success(props){

    const {admin} = props;

    return(
        <div id={"success-div"}>
            <img src={admin.image} alt={"Subtact-icon"} className={"icon"}/>
            <h4 className={"success-p"}>Success!</h4>
        </div>
    )
}
import {useNavigate} from "react-router-dom";

export default function Admin(props) {

    const navigate = useNavigate()
    const {setAdmin} = props
    const adminSubmit = (e) => {
        e.preventDefault()
        putAdmin().then(()=>console.log("Form submitted"))
        e.target.reset()
        navigate('/')
    }

    const putAdmin = async () => {
        const adminText = document.getElementById("Admin-text").value
        const adminImage =document.getElementById("Admin-upload").files[0]
        const formData = new FormData();
        formData.append("text", adminText)
        formData.append("testImage", adminImage)
        const response = await fetch("http://localhost:5000/admin", {
            method: 'PUT',
            body: formData
        })
        const json = response.json()
        const base64String = btoa(
            String.fromCharCode(...new Uint8Array(json.image.data.data))
        )
        const imageSrc = `data:image/*;base64,${base64String}`
        const newAdmin = {
            text: json.text,
            image: imageSrc
        }
        setAdmin(newAdmin)
    }


    return (
        <div className={"Admin-div"}>
            <h1 className={"title"}>Admin Page</h1>
            <form onSubmit={adminSubmit}>
                <input className={"signin-input"} placeholder={"Enter text"} id={"Admin-text"} required={true}/>
                <div className={"Admin-button-wrap"}>
                    <label className="Admin-button" htmlFor="Admin-upload">Upload File</label>
                    <input type={"file"} accept={"image/*"} id={"Admin-upload"} required={true}/>
                </div>
                <button type={"submit"} className={"signin-button"}>Submit</button>
            </form>
        </div>
    )
}
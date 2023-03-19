import {Link} from "react-router-dom";
import {useState} from "react";

export default function Admin(props) {

    const [base64, setBase64] = useState("");

    const {setAdmin} = props
    const adminSubmit = (e) => {
        e.preventDefault()
        putAdmin().then(()=>console.log("Form submitted"))
        e.target.reset()
    }

    const convertTobase64 = (e)=>{
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0])
        reader.onload = ()=>{
            console.log(reader.result)
            setBase64(reader.result)
        }
        reader.onerror = error=>{
            console.log({"error":error})
        }
    }

    const putAdmin = async () => {
        const adminText = document.getElementById("Admin-text").value
        // const adminImage = document.getElementById("Admin-upload").files[0]
        const response = await fetch("https://digilabs-backend.vercel.app/api/admin", {
            method: 'PUT',
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify({text:adminText, testImage: base64})
        })
        const json = await response.json()
        // const base64String = btoa(
        //     String.fromCharCode(...new Uint8Array(json.image.data.data))
        // )
        // const imageSrc = `data:image/*;base64,${base64String}`
        const newAdmin = {
            text: json.text,
            image: json.image
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
                    <input type={"file"} accept={"image/*"} id={"Admin-upload"} onChange={convertTobase64} required={true}/>
                </div>
                <button type={"submit"} className={"signin-button"}>Submit</button>
            </form>
            <Link className={"create-account navbar-p"} to={"/"}><p>Home Page&nbsp;</p></Link>
        </div>
    )
}
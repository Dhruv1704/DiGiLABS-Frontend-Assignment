import bannerImg from "../images/Image frame.png"

export default function Carousal(props) {

    const {classname} = props;
    let banner = 1;
    function bannerSlider(e) {
        const slides = document.getElementsByClassName("slides");
        Array.from(slides).forEach((element) => {
            element.style.cssText = `
            opacity: 0;
            transform: scale(0);
            `
        })
        console.log(e)
        const k = document.getElementById(e).value;
        const radio = document.getElementsByClassName("banner-radio")
        Array.from(radio).forEach((element)=>{
            element.style.opacity = 0.2;
        })
        document.getElementById(e).style.opacity = 1
        if(k!==1) document.getElementById("banner-1").style.opacity = 0.2
        else document.getElementById("banner-1").style.opacity = 1
        const slide = document.getElementById("slide-" + k);
        slide.style.cssText = `
            opacity: 1;
            transform: scale(1);
            `
    }

    const bannerBtn = (n)=>{
        banner += n;
        if(banner < 1) banner = 4
        if(banner > 4) banner = 1
        bannerSlider("banner-"+banner)
    }


    return (
        <div className={`carousal-div ${classname}`}>
            <div>
                <img src={bannerImg} className={"carousal-img"} alt={"carousal"}/>
            </div>
            <div>
                <div className={"banners"}>
                    <div className={"slides"} id={"slide-1"}>
                        <h3>Developer handoff improvements</h3>
                        <p>You'll now see a highlight around Symbols on the screen.</p>
                    </div>
                    <div className={"slides"} id={"slide-2"}>
                        <h3>Hi! I am Dhruv.</h3>
                        <p>I am a MERN stack developer.My hobbies are developing websites, cycling.</p>
                    </div>
                    <div className={"slides"} id={"slide-3"}>
                        <h3>Cloudnotes.</h3>
                        <p>This is my MERN stack project to store notes-<a href={"https://cloudnotes-1701.web.app/"} rel={"noreferrer"} target={"_blank"} className={"banner-link"}>Link</a></p>
                    </div>
                    <div className={"slides"} id={"slide-4"}>
                        <h3>News-Bulletin</h3>
                        <p>React project which displays news for multiple countries/categories-<a href={"https://news-bulletin-17.web.app/"} target={"_blank"} rel={"noreferrer"} className={"banner-link"}>Link</a></p>
                    </div>
                </div>
                <div className={"banner-share-radio-div"}>
                    <div className={'banner-radio-div'}>
                        <input type={"radio"} name={"radio-btn"} id={"banner-1"} value={1} className={"banner-radio"}
                               onClick={() => bannerSlider("banner-1")} defaultChecked/>
                        <input type={"radio"} name={"radio-btn"} id={"banner-2"} value={2} className={"banner-radio"}
                               onClick={() => bannerSlider("banner-2")}/>
                        <input type={"radio"} name={"radio-btn"} id={"banner-3"} value={3} className={"banner-radio"}
                               onClick={() => bannerSlider("banner-3")}/>
                        <input type={"radio"} name={"radio-btn"} id={"banner-4"} value={4} className={"banner-radio"}
                               onClick={() => bannerSlider("banner-4")}/>
                    </div>
                    <div className={"banner-share-div"}>
                        <p>Share</p>
                        <i className="fa-solid fa-share-from-square"></i>
                    </div>
                </div>
            </div>
            <button className={"banner-left"} onClick={()=>bannerBtn(-1)}>❮</button>
            <button className={"banner-right"} onClick={()=>bannerBtn(+1)}>❯</button>
        </div>
    )
}
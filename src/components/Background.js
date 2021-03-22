import "./Background.scss";

export default function Background(){
    return(
        <section className="background">
            <img className="background__image" src="./Background.png" alt="Background"/>
            <div className="background__overlayOne"></div>
            <div className="background__overlayTwo"></div>
        </section>
    )
}
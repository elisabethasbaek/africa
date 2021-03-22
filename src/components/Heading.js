import "./Heading.scss";

export default function Heading({ highlight, text }){
    return(
        <h1 className="heading">
            <span>{highlight}</span>
            {text}
        </h1>
    )
}
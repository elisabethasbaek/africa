import Heading from "./components/Heading";
import NumberBox from "./components/NumberBox";
import "./InNumbers.scss";

export default function InNumbers(){
    return(
        <article className="inNumbers">
            <Heading highlight="Our conference in numbers" />
            <div>
                <NumberBox text="Countries" number="12" />
                <NumberBox text="Cities" number="30" />
                <NumberBox text="Speakers" number="120" />
                <NumberBox text="Attendees" number="750+" />
            </div>
        </article>
    )
}
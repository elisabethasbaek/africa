import axios from "axios";
import {useEffect, useState} from "react";
import Heading from "./components/Heading";
import NumberBox from "./components/NumberBox";
import "./InNumbers.scss";

export default function InNumbers() {
	var [content, setContent] = useState([]);

	useEffect(
		function () {
			axios.get("./Numbers.json").then(function (response) {
				setContent(response.data);
			});
		},
		[setContent]
	);

	return (
		<article className="inNumbers">
			<Heading highlight="Our conference in numbers" />

			<div className="inNumbers__boxes">
				{content.items?.map(function (item) {
					return <NumberBox text={item.text} number={item.number} />;
				})}
			</div>
		</article>
	);
}

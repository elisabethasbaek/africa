import "./NumberBox.scss";

export default function NumberBox({text, number}) {
	return (
		<article className="numberBox">
			<p className="numberBox__text">{text}</p>
			<p className="numberBox__number">{number}</p>
		</article>
	);
}

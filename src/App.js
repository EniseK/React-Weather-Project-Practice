import "./App.css";
import Weather from "./weather";

function App() {
	return (
		<div className="App">
			<div className="container-fluid">
				<Weather />

				<br />

				<footer>
					<h4>
						This project was coded by{" "}
						<a
							href="https://enisekizilaslan.netlify.app/"
							target="_blank"
							rel="noreferrer"
						>
							Enise Kizilaslan
						</a>{" "}
						{""} and is open-sourced on {""}{" "}
						<a
							href="https://github.com/EniseK/React-Weather-Project-Practice"
							target="_blank"
							rel="noreferrer"
						>
							GitHub
						</a>
					</h4>
				</footer>
			</div>
		</div>
	);
}

export default App;

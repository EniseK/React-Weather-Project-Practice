import logo from "./logo.svg";
import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>Weather App</h1>
			</header>

			<footer>
				This project was coded by{" "}
				<a
					href="https://enisekizilaslan.netlify.app/"
					target="_blank"
					rel="noreferrer"
				>
					Enise Kizilaslan
				</a>{" "}
				{""} and is {""} <a>open-sourced on GitHub</a>
			</footer>
		</div>
	);
}

export default App;

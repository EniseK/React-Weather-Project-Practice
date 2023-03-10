import React from "react";
import "./weather.css";

export default function Weather() {
	return (
		<div className="weather">
			<form>
				<div className="row">
					<div className="col-9">
						<input
							type="search"
							placeholder="Enter a city.."
							className="form-control"
							autoFocus="on"
						/>
					</div>
					<div className="col-3">
						<input
							type="submit"
							value="search"
							className="btn btn-primary w-100"
						/>
					</div>
				</div>
			</form>

			<h1>New York</h1>
			<ul>
				<li>Wednesday 07:00</li>
				<li>Sunny</li>
			</ul>
			<div className="row">
				<div className="col-6">
					<img
						className="img-fluid"
						src="http://openweathermap.org/img/wn/01d@2x.png"
						alt="Sunny"
					/>
					<span className="temperature">6</span>
					<span className="unit">°C</span>
				</div>

				<div className="col-6">
					<ul>
						<li>Percipitation: 15%</li>
						<li>Humidity: 72%</li>
						<li>Wind: 13km/h</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

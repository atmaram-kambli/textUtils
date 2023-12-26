import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route
} from "react-router-dom";

function App() {
	const [mode, setMode] = useState("light");
	const [alert, setAlert] = useState(null);
	const showAlert = (message, type) => {
		setAlert({
			msg: message,
			type: type
		});
		setTimeout(() => {
			setAlert(null);
		}, 2000);
	}

	const toggleMode = () => {
		if(mode === "dark") {
			setMode("light");
			document.body.style.backgroundColor = "white";
			document.body.style.color = "black";
			showAlert("Light mode is enabled!","success");
		}
		else {
			setMode("dark");
			document.body.style.backgroundColor = "rgb(4 37 65)";
			document.body.style.color = "white";
			showAlert("Dark mode is enabled!","success");
		}
	}

	return (
		<>
			<Router>
				<Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
				<Alert alert={alert} />
				<div className="container my-3">
					<Routes>
						<Route exact path="/about" element={<About mode={mode} />} ></Route>
						<Route exact path="/" element={<TextForm heading="Enter your text to Analyze" mode={mode} showAlert={showAlert} />}></Route>
					</Routes>
				</div>
			</Router>
		</>
	);
}

export default App;

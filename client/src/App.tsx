import React, { useEffect, useRef } from "react";
import Whiteboard from "./components/Whiteboard";
import "./index.css";
import { connectWithSocketServer } from "./socketConn/socketConn";
import CursorOverlay from "./components/CursorOverlay";

function App() {
	const hasConnected = useRef(false);

	useEffect(() => {
		if (!hasConnected.current) {
			connectWithSocketServer();
			hasConnected.current = true;
		}
	}, []);

	return (
		<div className="App">
			<Whiteboard />
			<CursorOverlay />
		</div>
	);
}

export default App;

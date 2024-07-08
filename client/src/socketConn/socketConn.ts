import { Socket, io } from "socket.io-client";
import store from "../store";
import { setElements, updateElement } from "../components/Whiteboard/Whiteboard.slice";
import { Cursor, removeCursorPosition, updateCursorPosition } from "../components/CursorOverlay/CursorOverlay.slice";

let socket: Socket;

export const connectWithSocketServer = () => {
	if (!socket) {
		socket = io("http://localhost:3003");

		socket.on("connect", () => {
			console.log("connected to socket.io server");
		});

		socket.on("whiteboard-state", (elements) => {
			store.dispatch(setElements(elements));
		});

		socket.on("element-update", (elementData) => {
			store.dispatch(updateElement(elementData));
		});

		socket.on("whiteboard-clear", () => {
			store.dispatch(setElements([]));
		});

		socket.on("cursor-position", (cursorData) => {
			store.dispatch(updateCursorPosition(cursorData));
		})

		socket.on("user-disconnected", (disconnectedUserId) => {
			store.dispatch(removeCursorPosition(disconnectedUserId))
		})
	}
};

export const emitElementUpdate = (elementData: any) => {
	socket.emit("element-update", elementData);
};

export const emitClearWhiteboard = () => {
	socket.emit("whiteboard-clear");
};

export const emitCursorPosition = (cursorData: Cursor) => {
	socket.emit("cursor-position", cursorData);
}

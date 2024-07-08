import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import whiteboardSliceReducer from "../components/Whiteboard/Whiteboard.slice";
import cursorSliceReducer from "../components/CursorOverlay/CursorOverlay.slice";

export const store = configureStore({
	reducer: {
		whiteboard: whiteboardSliceReducer,
		cursor: cursorSliceReducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: ["whiteboard/setElements"],
				ignorePath: ["whiteboard.elements"],
			},
		}),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

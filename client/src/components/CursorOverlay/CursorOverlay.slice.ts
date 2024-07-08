import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Cursor {
  userId: string;
  x: number;
  y: number;
}

interface CursorState {
  cursors: Cursor[];
}

const initialState: CursorState = {
  cursors: []
};

const cursorSlice = createSlice({
	name: 'cursor',
	initialState,
	reducers: {
		updateCursorPosition: (state, action: PayloadAction<Cursor>) => {
			const { x, y, userId } = action.payload;
			const index = state.cursors.findIndex((c) => c.userId === userId);

			if (index === -1) {
				state.cursors.push({
					userId,
					x,
					y
				})
			} else {
				state.cursors[index] = {
					userId, x, y
				};
			}
		}
	}
})

export const { updateCursorPosition } = cursorSlice.actions;
export default cursorSlice.reducer;

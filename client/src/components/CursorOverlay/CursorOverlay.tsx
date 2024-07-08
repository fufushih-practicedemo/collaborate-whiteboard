import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store';
import cursor from "../../resources/icons/selection.svg";

const CursorOverlay = () => {
	const cursors = useSelector((state: RootState) => state?.cursor.cursors);
	return (
		<>
		{
			cursors.map((c: any) => (
				<img
					key={c.userId}
					className='cursor'
					style={{ position: 'absolute', left: c.x, top: c.y, width: "30px" }}
					src={cursor}
				/>
			))
		}
		</>
	)
}

export default CursorOverlay

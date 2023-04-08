import React, { useState } from 'react'

// Basic Items
import MyInput from '../BasicItems/Input/MyInput'
import MyButton from '../BasicItems/Button/MyButton'

// Icons
import iconEdit from '/public/edit.svg'
import iconDelete from '/public/delete.svg'
import iconSaveEdited from '/public/saveEdited.svg'

// React Icons
import { AiFillLock } from 'react-icons/ai'
import { AiFillUnlock } from 'react-icons/ai'

// CSS File
import './TodoItem.css'

const TodoItem = ({ onDelete, onLock, onEdit, onSave, item, inEditMode }) => {
	
	const [newValue, setNewValue] = useState('')

	return (
		<div className='todoItem' key={item.id}>
			<div className='lockButton'>
				<MyButton
					onClick={() => onLock(item.id)}
					children={
						item.isCompleted ? 
							<AiFillLock color={'red'} size={30} /> 
							:
							<AiFillUnlock color={'green'} size={30} />
					}
				/>
			</div>
			<div className='todoItem'>
				{
					inEditMode ? 
					<MyInput
						onChange={(e) => setNewValue(e.target.value)}
						value={newValue}
						onKeyPress={(e) => {if (e.key ==='Enter') {onSave(item.id, newValue)}}}
					/>
				:
					<div className='todoTitle'>
						<div className={item.isCompleted ? 'titleLocked' : null}>
							{item.title}
						</div>
					</div>
				}
			</div>
			<MyButton
				onClick={() => inEditMode ? onSave(item.id, newValue) : onEdit(item.id, setNewValue(item.title))}
				children={<img src={inEditMode ? iconSaveEdited : iconEdit} />}
			/>
			<MyButton
				onClick={() => onDelete(item.id)}
				children={<img src={iconDelete} />}
			/>
		</div>
	)
}

export default TodoItem

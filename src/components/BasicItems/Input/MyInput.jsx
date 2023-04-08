import React, { Children } from 'react'

// CSS File
import './MyInput.css'

const MyInput = ({value, children, onChange, onKeyPress}) => {
	return (
		<div>
			<input
			onKeyPress={onKeyPress}
			onChange={onChange}
			value={value}
			className='myInput'
			placeholder={children}/>
		</div>
	)
}

export default MyInput




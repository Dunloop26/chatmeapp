import style from '@Styles/Input.module.css'
import { useState, useEffect } from 'react'

export function Input({ label = "", type = "", placeholder = "", onValueChange = () => { }, value = "", errorMessage="" }) {
	const [innerValue, setValue] = useState(value)
	useEffect(() => {
		setValue(value)
	}, [value])
	const inputValueChange = function(e) {
		const { value: inputValue } = e.target;
		onValueChange(e);
		setValue(inputValue)
	}
	return (
		<div className={style.inputElement}>
			{(label.length > 0 && <label htmlFor="input">{label}</label>)}
			<input id="input" type={type} placeholder={placeholder} onChange={inputValueChange} value={innerValue} />
			{(errorMessage.length > 0 && <p>{errorMessage}</p>)}
		</div>
	)
}

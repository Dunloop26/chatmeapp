import style from '@Styles/Input.module.css'

export function Input({ label = "", type = "", placeholder = "", onValueChange = () => { }, value = "", errorMessage="" }) {
	return (
		<div className={style.inputElement}>
			{(label.length > 0 && <label htmlFor="input">{label}</label>)}
			<input id="input" type={type} placeholder={placeholder} onChange={onValueChange} value={value} />
			{(errorMessage.length > 0 && <p>{errorMessage}</p>)}
		</div>
	)
}

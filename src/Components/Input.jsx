export function Input({label = "", type = "", placeholder = ""}) {
	return (
		<div className="input-element">
			{(label.length > 0 && <label htmlFor="input">{label}</label>)}
			<input id="input" type={type} placeholder={placeholder} />
		</div>
	)
}

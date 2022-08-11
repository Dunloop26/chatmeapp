export function Input({ label = "", type = "", placeholder = "", onValueChange = () => { } }) {
	return (
		<div className="input-element">
			{(label.length > 0 && <label htmlFor="input">{label}</label>)}
			<input id="input" type={type} placeholder={placeholder} onChange={onValueChange} />
		</div>
	)
}

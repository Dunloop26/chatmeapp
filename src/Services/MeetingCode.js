export function generate() {
	return [...Array(6)].map(() => Math.floor(Math.random() * 16).toString(16)).join('')
}

export function validate(code) {
	return code.match(/[a-f0-9]{6}/i) != null
}

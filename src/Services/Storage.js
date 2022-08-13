export default {
	storeUserName: (name) => {
		localStorage.setItem("CURR_NAME", name)
	},
	getUserName: () => {
		return localStorage.getItem("CURR_NAME")
	},
}


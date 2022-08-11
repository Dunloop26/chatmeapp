import './App.css'
import { Dashboard } from './Layouts/Dashboard'
import GlobalContext from './Contexts/Global'
import { useEffect, useState } from 'react'

export function App() {
	const [name, setName] = useState(localStorage.getItem("CURR_USER") || "");
	let data = {
		currentUser: name
	}
	return (
		<GlobalContext.Provider value={data}>
			<Dashboard />
		</GlobalContext.Provider>
	)
}

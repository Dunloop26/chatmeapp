import './App.css'
import { Dashboard } from '@Pages/Dashboard'
import { Meeting } from '@Pages/Meeting'
import { Routes, Route } from 'react-router-dom'
import GlobalContext from '@Contexts/Global'
import { useEffect, useState } from 'react'

export function App() {
	const [name, setName] = useState(localStorage.getItem("CURR_USER") || "");
	let data = {
		currentUser: name
	}
	return (
		<GlobalContext.Provider value={data}>
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="meet/:id" element={<Meeting />} />
			</Routes>
		</GlobalContext.Provider>
	)
}

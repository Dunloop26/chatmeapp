import { useContext, useEffect, useState } from 'react'
import { Button } from '@Components/Button'
import { Input } from '@Components/Input'
import { Header } from '@Layouts/Header'
import storage from '@Services/Storage.js'
import GlobalContext from '@Contexts/Global'

export function JoinMeeting() {
	let tempName = "";
	const [name, setName] = useState("")
	const globalContext = useContext(GlobalContext)
	useEffect(() => {
		setName(globalContext.currentUser)
	}, [])
	const assignName = function() {
		setName(tempName)
		storage.storeUserName(tempName);
		globalContext.currentUser = tempName
	}
	const nameInputValueChange = function(e) {
		const { value } = e.target
		tempName = value
	}
	const welcomeMessage = function() {
		const solveName = () => {
			return name.length > 0 ? ` ${name}` : "";
		}
		return "Welcome" + solveName() + "!"
	}
	return (
		<div>
			<Header />
			<main>
				<h2>{welcomeMessage()}</h2>
				<section>
					<section className="button-group">
						<Input label="Nombre" placeholder="Ej.: Fulanito de tal" onValueChange={nameInputValueChange} />
						<Button text="Asignar" onClick={assignName} />
					</section>
					<section className="button-group">
						<Input label="Código de la reunión" placeholder="Ej.: ABC-123" />
						<Button text="Unirse" />
					</section>
				</section>
			</main>
			<footer> Copyright - James & Brian 2022 </footer>
		</div>
	)
}

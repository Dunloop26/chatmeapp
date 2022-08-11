import { useState } from 'react'
import { Button } from '../Components/Button'
import { Input } from '../Components/Input'

export function Dashboard() {
	const [name, setName] = useState("")
	let tempName = "";
	const assignName = function() {
		setName(tempName);
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
			<header>
				<h1>Dashboard</h1>
			</header>
			<main>
				<h2>{welcomeMessage()}</h2>
				<section>
					<section className="name-input">
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

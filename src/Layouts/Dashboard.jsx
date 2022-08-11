import { Button } from '../Components/Button'
import { Input } from '../Components/Input'

export function Dashboard() {
	return (
		<div>
			<header>
				<h1>Dashboard</h1>
			</header>
			<main>
				<h2>Welcome user</h2>
				<section>
					<section className="button-group">
						<Input label="Código de la reunión" placeholder="Ej.: ABC-123" />
						<Button text="Unirse" />
					</section>
					<section className="name-input">
						<Input label="Nombre" placeholder="Ingrese un nombre" />
					</section>
				</section>
			</main>
			<footer> Copyright - James & Brian 2022 </footer>
		</div>
	)
}

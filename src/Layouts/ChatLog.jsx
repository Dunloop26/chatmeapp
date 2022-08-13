import { Input } from "@Components/Input"
import { Button } from "@Components/Button"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"

export function ChatLog() {
	const { id } = useParams()
	return (
		<section>
			<h2>Reunión - {id}</h2>
			<section>
				<Input />
				<Button text="Enviar" />
			</section>
			<section>
				<Link to="/">
					<Button text="Abandonar reunión" />
				</Link>
			</section>
		</section>
	)
}

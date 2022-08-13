import { useContext } from "react"
import { Message } from "@Components/Message"
import GlobalContext from '@Contexts/Global'

export function MessageList({ messages = [] }) {
	const { currentUser } = useContext(GlobalContext)
	return (
		<section>
			{
				messages.length > 0
					? (messages.map(({ author, message }, index) => {
						return <Message key={index} message={message} author={author == currentUser ? "Yo" : author} />
					}))
					: <p>No hay mensajes que mostrar</p>
			}
		</section>
	)
}

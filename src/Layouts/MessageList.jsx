import { Message } from "@Components/Message"

export function MessageList({ messages = [] }) {
	return (
		<section>
			{
				messages.length > 0
					? (messages.map(({ author, message }, index) => {
						return <Message key={index} message={message} author={author} />
					}))
					: <p>No hay mensajes que mostrar</p>
			}
		</section>
	)
}

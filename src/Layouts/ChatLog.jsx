import { Input } from "@Components/Input"
import { Button } from "@Components/Button"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import { MessageList } from "@Layouts/MessageList"
import { useContext, useState } from "react"
import GlobalContext from "@Contexts/Global"

export function ChatLog() {
	const { id } = useParams()
	const [messages, setMessages] = useState([])
	const [tempMessage, setTempMessage] = useState([])
	const { currentUser } = useContext(GlobalContext)
	const onSendMessage = function() {
		setMessages((prevMessages) => {
			const messageCarrier = { author: currentUser, message: tempMessage }
			setTempMessage("")
			return [...prevMessages, messageCarrier]
		})
	}
	const onMessageValueChange = function(e) {
		const { value } = e.target
		setTempMessage(value)
	}
	return (
		<section>
			<h2>Reunión - {id}</h2>
			<section>
				<MessageList messages={messages} />
			</section>
			<section>
				<Input onValueChange={onMessageValueChange} value={tempMessage} />
				<Button text="Enviar" onClick={onSendMessage} />
			</section>
			<section>
				<Link to="/">
					<Button text="Abandonar reunión" />
				</Link>
			</section>
		</section>
	)
}

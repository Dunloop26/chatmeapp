import { Input } from "@Components/Input"
import { Button } from "@Components/Button"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import { MessageList } from "@Layouts/MessageList"
import { useContext, useState, useEffect } from "react"
import socketSrv from "@Services/Socket"
import GlobalContext from "@Contexts/Global"

export function ChatLog() {
	const { id } = useParams()
	const [messages, setMessages] = useState([])
	const [tempMessage, setTempMessage] = useState([])
	const { currentUser } = useContext(GlobalContext)
	useEffect(() => {
		const io = socketSrv.getSocket()
		io.on("chat:on_message", ({ author, message }) => {
			setMessages((prevMessages) => {
				return [...prevMessages, { author, message }]
			})
		})

		return () => {
			io.off("chat:on_message")
		}
	}, [])
	const onSendMessage = function() {
		const messageCarrier = { author: currentUser, message: tempMessage }
		setTempMessage("")
		const io = socketSrv.getSocket()
		io.emit("chat:send_message", messageCarrier)
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

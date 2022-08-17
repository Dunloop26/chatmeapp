import { ChatLog } from "@Layouts/ChatLog";
import { Header } from "@Layouts/Header";
import { useEffect } from "react";
import socketSrv from "@Services/Socket";

export function Meeting() {
	useEffect(() => {
		const io = socketSrv.getSocket();
		if (io.connected) {
			console.warn({id: io.id})
			console.count()
			io.emit("room:join", {roomId: "ABC123", username: "Mishue"})
		}

		io.on("chat:on_message", (data) => {
			console.warn("Just received a message", data)
		})

		return () => {
			io.off("room:join");
			io.off("chat:on_message");
		}
	}, [])
	return (
		<main>
			<Header title="Bienvenido a la reunión" />
			<ChatLog />
		</main>
	)
}

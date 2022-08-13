import { ChatLog } from "@Layouts/ChatLog";
import { Header } from "@Layouts/Header";

export function Meeting() {
	return (
		<main>
			<Header title="Bienvenido a la reunión" />
			<ChatLog />
		</main>
	)
}

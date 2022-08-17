import { io as IOServer } from "socket.io-client"
import { SOCKET_URL } from "@Config/socket"

let io = undefined;

export default {
	getSocket: () => {
		if (!io)
			io = buildIOInstance();
		return io;
	},
	isConnected: () => {
		return io && io.connected;
	},
	disconnectSocket: () => {
		io && io.disconnect();
	},
	connectSocket: () => {
		io && io.connect();
	}
}

function buildIOInstance() {
	return new IOServer(SOCKET_URL)
}

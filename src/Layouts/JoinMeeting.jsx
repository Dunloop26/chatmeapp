import { useContext, useEffect, useState } from 'react'
import { Button } from '@Components/Button'
import { Input } from '@Components/Input'
import { Header } from '@Layouts/Header'
import { useNavigate } from 'react-router-dom'
import storage from '@Services/Storage'
import { validate } from '@Services/MeetingCode'
import GlobalContext from '@Contexts/Global'

export function JoinMeeting() {
	let tempName = "";
	const [name, setName] = useState("")
	const [room, setRoom] = useState("")
	const globalContext = useContext(GlobalContext)
	const navigate = useNavigate();
	useEffect(() => {
		setName(globalContext.currentUser)
	}, [])
	const assignName = function() {
		setName(tempName)
		storage.storeUserName(tempName);
		globalContext.currentUser = tempName
	}
	const roomInputValueChange = function(e) {
		let { value: room } = e.target;
		if (room.length > 6) room = room.slice(0, 6)
		setRoom(room);
	}
	const isRoomCodeValid = function(room) {
		return validate(room)
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
	const getErrorMessage = function() {
		return "El código de la reunión no es válido, debe contener solo 6 caracteres y solo puede contener entre la A y la F, entre el 0 y el 9";
	}
	const joinRoom = function(e) {
		navigate(`/meet/${room}`)
	}
	return (
		<div>
			<Header title="Dashboard" />
			<main>
				<h2>{welcomeMessage()}</h2>
				<section>
					<section className="button-group">
						<Input label="Nombre" placeholder="Ej.: Fulanito de tal" onValueChange={nameInputValueChange} />
						<Button text="Asignar" onClick={assignName} />
					</section>
					<section className="button-group">
						<Input label="Código de la reunión" placeholder="Ej.: ABC-123" onValueChange={roomInputValueChange} value={room} errorMessage={room.length > 0 && !isRoomCodeValid(room) && getErrorMessage()} />
						<Button text="Unirse" disabled={!isRoomCodeValid(room)} onClick={joinRoom}/>
					</section>
				</section>
			</main>
			<footer> Copyright - James & Brian 2022 </footer>
		</div>
	)
}

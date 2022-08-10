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
						<input type="text" placeholder="Codigo de la reunión" />
						<button>Unirse</button>
					</section>
					<section className="name-input">
						<input type="text" />
					</section>
				</section>
			</main>
			<footer> Copyright - James & Brian 2022 </footer>
		</div>
	)
}

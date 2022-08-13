export function Message({author="", message=""}) {
	return (
	<article>
			<p>{author}:</p>
			<p>{message}</p>
	</article>
	)
}

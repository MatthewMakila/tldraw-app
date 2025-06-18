import { Tldraw } from 'tldraw'
import 'tldraw/tldraw.css'

const options = {
	maxPages: 3,
	animationMediumMs: 5000,
}

export default function CustomOpts() {
	return (
		<div className="tldraw__editor">
			<Tldraw persistenceKey="example" options={options} />
		</div>
	)
}
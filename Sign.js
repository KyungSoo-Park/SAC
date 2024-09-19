const fs = require('fs')
const { createHash } = require('crypto')
const path = require('path')

const run = js => {
	const hashSha256 = creathHash('sha256')
	const input = fs.createReadStream(path.join(_dirname, '../', js))
	input.on('readable', () => {
		const date = input.read()
		if (data) {
			hashSha256.update(data)
		} else {
			const integrity = 'sha256-${hashSha256.digest('base64')}'
			console.log('${js}: ${integrity}')
		}
	})
}

[
	'https://kyungsoo-park.github.io/SAC/main.js',
	'https://kyungsoo-park.github.io/SAC/styling.js'
].forEach(js => run(js))
// main.js: sha256-MeTdl0DMaTJcaQnYlp5Tf96cDT+pdAewY19VdbZ0s4Q
// styling.js: sha256-8AykY9bAoqb0rM0oG3kR6XtPhpLlmKLgIvznx/eeNio=
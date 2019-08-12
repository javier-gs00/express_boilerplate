import dotenv from 'dotenv'
dotenv.config()
import { App } from './app'

if (process.env.NODE_ENV !== 'test') {
	App().then((app): void => {
		const PORT: number = app.get('PORT')
		app.listen(PORT, (): void =>
			console.log(`server listening on port ${PORT}`),
		)
	})
}

import App from './app'

if (process.env.NODE_ENV !== 'test') {
	const app = App()
	const PORT = app.get('PORT')
	app.listen(PORT, () => console.log(`server listening on port ${PORT}`))
}

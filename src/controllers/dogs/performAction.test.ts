import request, { Response } from 'supertest'
import app from 'Src/app'
import '@babel/polyfill'

test('Controller salute', async (): Promise<void> => {
	const name = 'Bobby'
	const action = 'sit'
	const response: Response = await request(app)
		.post('/api/dogs/actions')
		.send({ name, action })

	expect(response.status).toBe(200)
	expect(response.text).toBe(`${name} will now ${action}`)
})

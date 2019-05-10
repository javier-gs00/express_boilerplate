import request, { Response } from 'supertest'
import app from 'Src/app'
import '@babel/polyfill'

test('Controller salute', async (): Promise<void> => {
	const name = 'Bobby'
	const response: Response = await request(app)
		.post('/api/dogs/salute')
		.send({ name })

	expect(response.status).toBe(200)
	expect(response.text).toBe(`Woof (${name} says hi)`)
})

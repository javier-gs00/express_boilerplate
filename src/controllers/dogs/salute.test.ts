import request, { Response } from 'supertest'
import { Express } from 'express'
import App from 'Src/app'
import '@babel/polyfill'

describe('Controller: Salute', (): void => {
	let app: Express

	beforeAll(
		async (): Promise<void> => {
			app = await App()
		},
	)

	test('Should salute with the given name', async (): Promise<void> => {
		const name = 'Bobby'
		const response: Response = await request(app)
			.post('/api/dogs/salute')
			.send({ name })

		expect(response.status).toBe(200)
		expect(response.text).toBe(`Woof (${name} says hi)`)
	})
})

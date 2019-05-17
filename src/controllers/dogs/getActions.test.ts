import request, { Response } from 'supertest'
import { Express } from 'express'
import App from 'Src/app'
import '@babel/polyfill'

describe('Controller: Get Actions', (): void => {
	let app: Express

	beforeAll(
		async (): Promise<void> => {
			app = await App()
		},
	)

	test('Should return the list of actions', async (): Promise<void> => {
		const response: Response = await request(app).get('/api/dogs/actions')
		expect(response.status).toBe(200)
		expect(response.text).toBe('Available actions are: sit, bark, salute, stand, jump, roll, crawl.')
	})
})

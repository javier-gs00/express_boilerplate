import 'core-js/stable'
import 'regenerator-runtime/runtime'

import request, { Response } from 'supertest'
import { Express } from 'express'
import { App } from 'Src/app'

describe('Controller: Perform Action', (): void => {
	let app: Express

	beforeAll(
		async (): Promise<void> => {
			app = await App()
		},
	)

	test('Should perform the requested action with the given name', async (): Promise<void> => {
		const name = 'Bobby'
		const action = 'sit'
		const response: Response = await request(app)
			.post('/api/dogs/actions')
			.send({ name, action })

		expect(response.status).toBe(200)
		expect(response.text).toBe(`${name} will now ${action}`)
	})
})

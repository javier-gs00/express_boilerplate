import { Express } from 'express'
import request from 'supertest'
import { bootstrapRestServer } from '../../src/cmd/server/rest'

describe.only('REST: Actions', () => {
	let app: Express

	beforeAll(async () => {
		app = await bootstrapRestServer()
	})

	describe('GET: /api/actions', () => {
		it('on success: should return a list of actions', async () => {
			const response = await request(app).get('/api/actions')
			console.log(response.body)
			const itemsMatcher = {
				items: expect.arrayContaining([
					expect.objectContaining({
						id: expect.any(Number),
						name: expect.any(String),
					}),
				]),
			}
			expect(response.status).toBe(200)
			expect(response.body.count).toBeGreaterThanOrEqual(0)
			expect(response.body.items).toMatchObject(itemsMatcher.items)
		})
	})
})

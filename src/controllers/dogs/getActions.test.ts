import request from 'supertest'
import app from 'Src/app'
import '@babel/polyfill'

test('Controller getActions', async () => {
	const response = await request(app).get('/api/dogs/actions')
	expect(response.status).toBe(200)
	expect(response.text).toBe('Available actions are: sit, bark, salute, stand, jump, roll, crawl.')
})

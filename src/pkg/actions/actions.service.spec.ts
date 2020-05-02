import { ActionsService } from './actions.service'
import { ActionsRepository } from '../storage/memory/actions.repository'
import { ActionModel } from './actions.model'

describe('ActionsService', () => {
	let actionsService: ActionsService

	beforeEach(() => {
		const actionsRepository = new ActionsRepository()
		actionsService = new ActionsService(actionsRepository)
	})

	it('Should be defined', () => {
		expect(actionsService).toBeDefined()
	})

	describe('getAll', () => {
		it('On success: should return a list of actions', () => {
			const response = actionsService.getAll()

			const objectMatcher: ActionModel = {
				id: expect.any(Number),
				name: expect.any(String),
			}

			expect(response).toBeTruthy()
			expect(response).toHaveProperty('length')
			expect(response.length).toBeGreaterThan(0)
			expect(response[0]).toMatchObject(objectMatcher)
		})
	})
})

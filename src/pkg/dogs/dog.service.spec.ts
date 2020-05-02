import { DogsService } from './dog.service'
import { DogsRepository } from '../storage/memory/dog.repository'
import { ActionsRepository } from '../storage/memory/actions.repository'
import { DogModel } from './dog.model'

describe('DogsService', () => {
	let dogsService: DogsService

	beforeEach(() => {
		const actionsRepository = new ActionsRepository()
		const dogsRepository = new DogsRepository()
		dogsService = new DogsService(actionsRepository, dogsRepository)
	})

	it('should be defined', () => {
		expect(dogsService).toBeDefined()
	})

	describe('getAll', () => {
		it('On success: should return a list of dogs', () => {
			const response = dogsService.getAll()

			const objectMatcher: DogModel = {
				id: expect.any(Number),
				name: expect.any(String),
				breed: expect.any(String),
				age: expect.any(Number),
				actionIds: expect.arrayContaining([expect.any(Number)]),
			}

			expect(response).toBeTruthy()
			expect(response).toHaveProperty('length')
			expect(response.length).toBeGreaterThan(0)
			expect(response[0]).toMatchObject(objectMatcher)
		})
	})
})

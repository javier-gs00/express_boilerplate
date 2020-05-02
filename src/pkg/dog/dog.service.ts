import { ActionsRepository } from 'Src/pkg/storage/memory/actions.repository'
import { DogsRepository } from 'Src/pkg/storage/memory/dog.repository'
import { ActionModel } from '../actions/actions.model'
import { DogModel } from './dog.model'

export class DogsService {
	constructor(
		private readonly actionsRepository: ActionsRepository,
		private readonly dogsRepository: DogsRepository,
	) {}

	private makeDog(data: any): DogModel {
		return {
			id: data.id,
			name: data.name,
			breed: data.breed,
			age: data.age,
			actionIds: data.actionIds,
		}
	}

	public getAll(): DogModel[] {
		const dogs = this.dogsRepository.findAll()
		return dogs.map((d) => this.makeDog(d))
	}

	public getActionsByDog(id: number): ActionModel[] | null {
		const dog = this.dogsRepository.findById(id)
		if (!dog) {
			return null
		}
		const actions = this.actionsRepository.findAll()
		const response = actions.filter((a) => dog.actionIds.includes(a.id))
		return response
	}
}

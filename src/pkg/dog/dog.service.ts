import { DogRepository } from 'Src/pkg/storage/memory/dog.repository'
import { DogModel } from './dog.model'

export class DogService {
	constructor(private readonly dogRepository: DogRepository) {}

	private makeDog(data: any): DogModel {
		return {
			id: data.id,
			name: data.name,
			breed: data.breed,
			age: data.age,
			actions: data.actions.map((a: { name: string }) => a.name),
		}
	}

	public getAll(): DogModel[] {
		const dogs = this.dogRepository.findAll()
		return dogs.map((d) => this.makeDog(d))
	}

	// public getActionsByDog() {}

	// public getDogAction() {}
}

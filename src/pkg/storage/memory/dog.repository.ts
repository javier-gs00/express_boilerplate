interface DogEntity {
	id: number
	name: string
	breed: string
	age: number
	actionIds: number[]
}

const dogs: DogEntity[] = [
	{
		id: 1,
		name: 'Stormy',
		breed: 'German Sheperd',
		age: 6,
		actionIds: [2, 3],
	},
	{
		id: 2,
		name: 'Stormy',
		breed: 'Bernesse Mountain Dog',
		age: 9,
		actionIds: [1, 2, 3, 4, 5, 6],
	},
]

type FindAllResponse = Array<DogEntity>
type FindByIdResponse = DogEntity

export class DogsRepository {
	public findAll(): FindAllResponse {
		return dogs
	}

	public findById(id: number): FindByIdResponse | null {
		const dog = dogs.find((d) => d.id === id)
		if (!dog) {
			return null
		}
		return dog
	}
}

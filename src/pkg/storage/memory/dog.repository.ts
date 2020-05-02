interface ActionEntity {
	id: number
	name: string
}

interface DogEntity {
	id: number
	name: string
	breed: string
	age: number
	actionIds: number[]
}

type FindAllResponse = Array<DogEntity & { actions: ActionEntity[] }>
type FindByIdResponse = DogEntity & { actions: ActionEntity[] }

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

const actions: ActionEntity[] = [
	{ id: 1, name: 'sit' },
	{ id: 2, name: 'bark' },
	{ id: 3, name: 'salute' },
	{ id: 4, name: 'stand' },
	{ id: 5, name: 'jump' },
	{ id: 6, name: 'roll' },
	{ id: 7, name: 'crawl' },
]

export class DogRepository {
	public findAll(): FindAllResponse {
		const response = dogs.map((dog) => {
			const dogActions: ActionEntity[] = []
			for (const actionId of dog.actionIds) {
				const action = actions.find((a) => a.id === actionId)
				if (!action) {
					continue
				}
				dogActions.push(action)
			}
			return {
				...dog,
				actions: dogActions,
			}
		})
		return response
	}

	public findById(id: number): FindByIdResponse | null {
		const dog = dogs.find((d) => d.id === id)
		if (!dog) {
			return null
		}
		const dogActions: ActionEntity[] = []
		for (const actionId of dog.actionIds) {
			const action = actions.find((a) => a.id === actionId)
			if (!action) {
				continue
			}
			dogActions.push(action)
		}
		return {
			...dog,
			actions: dogActions,
		}
	}
}

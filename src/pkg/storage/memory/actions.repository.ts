interface ActionEntity {
	id: number
	name: string
}

const actions: ActionEntity[] = [
	{ id: 1, name: 'sit' },
	{ id: 2, name: 'bark' },
	{ id: 3, name: 'salute' },
	{ id: 4, name: 'stand' },
	{ id: 5, name: 'jump' },
	{ id: 6, name: 'roll' },
	{ id: 7, name: 'crawl' },
]

type FindAllResponse = Array<ActionEntity>
type FindByIdResponse = ActionEntity

export class ActionsRepository {
	findAll(): FindAllResponse {
		return actions
	}

	findById(id: number): FindByIdResponse | null {
		const action = actions.find((a) => a.id === id)
		if (!action) {
			return null
		}
		return action
	}
}

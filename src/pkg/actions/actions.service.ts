import { ActionsRepository } from 'Src/pkg/storage/memory/actions.repository'
import { ActionModel } from './actions.model'

export class ActionsService {
	constructor(private readonly actionsRepository: ActionsRepository) {}

	getAll(): ActionModel[] {
		return this.actionsRepository.findAll()
	}
}

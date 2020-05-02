import { Express } from 'express'
import { DogsRepository } from 'Src/pkg/storage/memory/dog.repository'
import { DogsService } from 'Src/pkg/dogs/dog.service'
import { createRestServer } from 'Src/pkg/http/rest'
import { ActionsRepository } from 'Src/pkg/storage/memory/actions.repository'
import { ActionsService } from 'Src/pkg/actions/actions.service'

export async function bootstrapRestServer(): Promise<Express> {
	const actionsRepository = new ActionsRepository()
	const dogsRepository = new DogsRepository()
	const actionsService = new ActionsService(actionsRepository)
	const dogService = new DogsService(actionsRepository, dogsRepository)

	const server = createRestServer(actionsService, dogService)
	return server
}

bootstrapRestServer()
	.then((server) =>
		server.listen(3000, () => {
			console.log('server listening on port: 3000')
		}),
	)
	.catch((error) => console.log(error))

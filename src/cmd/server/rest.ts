import { DogsRepository } from 'Src/pkg/storage/memory/dog.repository'
import { DogsService } from 'Src/pkg/dogs/dog.service'
import { createRestServer } from 'Src/pkg/http/rest'
import { ActionsRepository } from 'Src/pkg/storage/memory/actions.repository'
import { ActionsService } from 'Src/pkg/actions/actions.service'

function bootstrap() {
	const actionsRepository = new ActionsRepository()
	const dogsRepository = new DogsRepository()
	const actionsService = new ActionsService(actionsRepository)
	const dogService = new DogsService(actionsRepository, dogsRepository)

	const server = createRestServer(actionsService, dogService)
	server.listen(3000, () => {
		console.log('server listening on port: 3000')
	})
}

bootstrap()

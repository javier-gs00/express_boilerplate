import { DogsRepository } from 'Src/pkg/storage/memory/dog.repository'
import { DogsService } from 'Src/pkg/dog/dog.service'
import { createRestServer } from 'Src/pkg/http/rest'
import { ActionsRepository } from 'Src/pkg/storage/memory/actions.repository'

function bootstrap() {
	const actionsRepository = new ActionsRepository()
	const dogsRepository = new DogsRepository()
	const dogService = new DogsService(actionsRepository, dogsRepository)

	const server = createRestServer(dogService)
	server.listen(3000, () => {
		console.log('server listening on port: 3000')
	})
}

bootstrap()

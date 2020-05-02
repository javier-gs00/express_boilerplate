import { DogRepository } from 'Src/pkg/storage/memory/dog.repository'
import { DogService } from 'Src/pkg/dog/dog.service'
import { createRestServer } from 'Src/pkg/http/rest'

function bootstrap() {
	const dogRepository = new DogRepository()
	const dogService = new DogService(dogRepository)

	const server = createRestServer(dogService)
	server.listen(3000, () => {
		console.log('server listening on port: 3000')
	})
}

bootstrap()

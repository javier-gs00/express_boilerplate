import { Router, Request, Response } from 'express'

import { DogService } from 'Src/pkg/dog/dog.service'

function getAllDogsHandler(dogService: DogService) {
	return (req: Request, res: Response) => {
		const dogs = dogService.getAll()

		return res.json({
			count: dogs.length,
			items: dogs,
		})
	}
}

export function createDogsHandler(
	router: Router,
	dogService: DogService,
): void {
	router.get('/api/dogs', getAllDogsHandler(dogService))
	// router.get('/api/dogs/:dogId/actions', dogService.getActionsByDog())
	// router.get('/api/dogs/:dogId/actions/:actionId', dogService.getDogAction())
}

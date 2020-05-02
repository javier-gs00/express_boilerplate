import { Router, Request, Response } from 'express'

import { DogsService } from 'Src/pkg/dog/dog.service'

function getAllDogsHandler(dogsService: DogsService) {
	return (req: Request, res: Response) => {
		const dogs = dogsService.getAll()

		return res.json({
			count: dogs.length,
			items: dogs,
		})
	}
}

function getActionsByDog(dogsService: DogsService) {
	return (req: Request, res: Response) => {
		const params = req.params as { dogId: string }
		if (params.dogId) {
			return res.status(400).json({
				error: 'BAD REQUEST',
				message: 'Missing dog ID in params',
			})
		}
		const actions = dogsService.getActionsByDog(parseInt(params.dogId, 10))
		if (!actions) {
			return res.status(404).json({
				error: 'NOT FOUND',
				message: 'The dog with the specified id does not exist',
			})
		}
		return res.json({
			data: actions,
		})
	}
}

export function createDogsHandler(
	router: Router,
	dogsService: DogsService,
): void {
	router.get('/api/dogs', getAllDogsHandler(dogsService))
	router.get('/api/dogs/:dogId/actions', getActionsByDog(dogsService))
}

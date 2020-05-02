import { Router, Request, Response } from 'express'

import { ActionsService } from 'Src/pkg/actions/actions.service'

function getAllActionsHandler(actionsService: ActionsService) {
	return (req: Request, res: Response) => {
		const actions = actionsService.getAll()

		return res.json({
			count: actions.length,
			items: actions,
		})
	}
}

export function createActionsHandler(
	router: Router,
	actionsService: ActionsService,
): void {
	router.get('/api/actions', getAllActionsHandler(actionsService))
}

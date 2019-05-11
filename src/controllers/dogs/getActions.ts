import { Request, Response } from 'express'
import Dog from 'Src/models/dogs'
import { logInstance } from 'Src/utils'

const logger = logInstance()

export function getActions(req: Request, res: Response): Response {
	const { name } = req.body

	const dog = new Dog(name)

	logger.log({
		level: 'info',
		message: 'Hello distributed log files',
	})

	return res.status(200).send(dog.getActions())
}

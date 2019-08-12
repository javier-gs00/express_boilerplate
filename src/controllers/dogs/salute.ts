import { Request, Response } from 'express'
import Dog from 'Src/models/dogs'
import { logger } from 'Src/utils'

export function salute(req: Request, res: Response): Response {
	const { name } = req.body

	logger.info(`Requesting ${name} to salute`)

	try {
		const dog = new Dog(name)
		const text = dog.salute()

		return res.status(200).send(text)
	} catch (err) {
		logger.error(err)
		return res.status(500).send(err)
	}
}

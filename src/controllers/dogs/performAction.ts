import { Request, Response } from 'express'
import Dog from 'Src/models/dogs'

export function performAction(req: Request, res: Response): Response {
	const { name, action } = req.body

	const dog = new Dog(name)

	return res.status(200).send(dog.performAction(action))
}

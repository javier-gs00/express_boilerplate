import Dog from 'Src/models/dogs'

export function salute(req: any, res: any, next: any) {
	const { name } = req.body

	const dog = new Dog(name)

	res.status(200).send(dog.salute())
}

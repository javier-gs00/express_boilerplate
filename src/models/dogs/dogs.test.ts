import Dog from './index'

test('Class Dog :: salute', (): void => {
	const name = 'Bobby'
	const dog = new Dog(name)
	expect(dog.salute()).toBe(`Woof (${name} says hi)`)
})

test('Class Dog :: perform action', (): void => {
	const name = 'Bobby'
	const action = 'sit'
	const dog = new Dog(name)
	expect(dog.performAction(action)).toBe(`${name} will now ${action}`)
})

test('Class Dog :: available actions', (): void => {
	const dog = new Dog('Bobby')
	expect(dog.actions).toEqual([
		'sit',
		'bark',
		'salute',
		'stand',
		'jump',
		'roll',
		'crawl',
	])
})

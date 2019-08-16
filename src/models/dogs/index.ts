export default class Dog {
	private name: string
	private breed: string
	private age: number
	public actions: string[]

	public constructor(name: string, breed?: string, age?: number) {
		this.name = name || 'Rin Tin Tin'
		this.breed = breed || 'German Sheperd'
		this.age = age || 8
		this.actions = ['sit', 'bark', 'salute', 'stand', 'jump', 'roll', 'crawl'] // eslint-disable-line
	}

	public salute(): string {
		return `Woof (${this.name} says hi)`
	}

	public performAction(action: string): string {
		if (!this.actions.includes(action))
			return `${this.name} can't perform ${action}`

		return `${this.name} will now ${action}`
	}

	public getActions(): string {
		return `Available actions are: ${this.actions.join(', ')}.`
	}
}

import { ActionModel } from '../actions/actions.model'

export interface DogModel {
	id: number
	name: string
	breed: string
	age: number
	actionIds: number[]
	actions?: ActionModel[]
}

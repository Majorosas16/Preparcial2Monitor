import { Actions } from '../types/store';
import { Task } from '../types/task';

export const reducer = (currentAction: any, currentState: any) => {

	const { action, payload } = currentAction;

	switch (action) {
		case Actions.ADD_TASK: // "ADD_TASK"
			return {
				...currentState, // el estado actual
				tasks: [...currentState.tasks, payload], //no se sobreescribe la variable si no que se agrega (es como un push)
			};

		case Actions.REMOVE_TASK:
			return {
				...currentState,
				tasks: currentState.tasks.filter((task: Task) => task.id !== payload), //compara el id que le llegó de actions con la tarea que ya está en el appState 
			};

		case Actions.TOGGLE_TASK:
			return {
				...currentState,
				tasks: currentState.tasks.map((task: Task) => {
					if (task.id === payload) {
						return {
							...task,
							state: !task.state,
						};
					}
					return task;
				})
			};

		default:
			return currentState;
	}
};

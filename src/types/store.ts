export type AppState = {
	tasks: []
};

export type Observer = { render: () => void } & HTMLElement;

//Tipar las acciones principales que hay
export enum Actions {
	'ADD_TASK' = 'ADD_TASK',
	'REMOVE_TASK' = 'REMOVE_TASK',
	'TOGGLE_TASK' = 'TOGGLE_TASK'
}



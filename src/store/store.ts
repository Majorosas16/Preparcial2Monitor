import { reducer } from './reducer';
import { AppState, Observer } from '../types/store';
import storage, { PersistanceKeys } from '../utils/storage';

//EL APPSTATE ES: un objeto que tiene elemntos que se van a necesitar en la pagina. AQUI ABAJO, INITALAPASTATE. A medida que baya navegano va a ir guardando, cosas que son repetitivas, valores que se necesitan.
export let emptyState: AppState = {
	tasks: []
};

//El estado global, appState
export let appState = storage.get<AppState>({
	key: PersistanceKeys.STORE,
	defaultValue: emptyState,
});

// lo de arriba es lo mismo que esto
// string. Funcione
// export let appState = storage.get('TASKS', initialAppState)

let observers: Observer[] = [];

const persistStore = (state: AppState) =>
	storage.set({ key: PersistanceKeys.STORE, value: state });

const notifyObservers = () => {
	observers.forEach((o) => o.render());
};

//Crear el dispatch
export const dispatch = (action: any) => {
	const clone = JSON.parse(JSON.stringify(appState));
	const newState = reducer(action, clone);
	appState = newState;

	persistStore(newState);
	notifyObservers()
};

//Agregar los observadores para los interesados, los suscritos
export const addObserver = (ref: any) => {
	observers = [...observers, ref];
};

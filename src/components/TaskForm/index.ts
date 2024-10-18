import { addTask } from "../../store/actions";
import { addObserver, appState, dispatch } from "../../store/store";
import { Task } from "../../types/task";

class TaskForm extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
        addObserver(this)
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) this.shadowRoot.innerHTML = `
        <h2>PreParcial 2</h2>
         <form class="task-form">
            <input type="text" id="text-input" placeholder="Nombre de tarea" required />
            <button type="submit" id="add-btn">Agregar</button>
         </form>
        `;

        const formElement = this.shadowRoot?.querySelector('.task-form') //Con el query selector se trae la referencia del form y la guarda en formElement.

        formElement?.addEventListener("submit", (e) => {
            e.preventDefault() //paras qque al enviarse no se refresque la página.
            
            const inputValue = this.shadowRoot?.querySelector("#text-input") as HTMLInputElement
        
            const newTask: Task = {
                id: new Date().getTime(),
                title: inputValue.value,
                state: false
            }

            dispatch(addTask(newTask))            
            
        })

		
		}
	
}

customElements.define('task-form', TaskForm);
export default TaskForm;

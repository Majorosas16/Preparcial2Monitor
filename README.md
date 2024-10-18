Keep in mind Majo

Set-ExecutionPolicy -Scope CurrentUser unrestricted

Código del preparcial Nikol: https://github.com/Majorosas16/Preparcial2

EN este repo esta el codigo del repo del monitor: https://github.com/ASunart/PreParcial_2 (el original)

Lab 05: https://github.com/Majorosas16/Lab05

Lab 04: https://github.com/Majorosas16/Lab04Algo 

Código de como pasar de un lado a otro ciertos componentes:

  // Creamos los elementos de las tareas
  this.createTaskItem();

  // Seleccionamos los contenedores de tareas pendientes y completadas
  const pendingTaskContainer = this.shadowRoot.querySelector('.pending-task-list');
  const completedTaskContainer = this.shadowRoot.querySelector('.completed-task-list');

  // Iteramos sobre las tareas y las añadimos a sus respectivos contenedores
  this.taskitems.forEach((taskItem) => {
    if (taskItem.getAttribute(AttributeTaskItem.state) === 'pending') {
      pendingTaskContainer?.appendChild(taskItem);
    } else if (taskItem.getAttribute(AttributeTaskItem.state) === 'completed') {
      completedTaskContainer?.appendChild(taskItem);
    }
  });
}

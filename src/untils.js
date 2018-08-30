const localStorageAPI = {
  saveTask(tasks) {
    window.localStorage.setItem('tasks', JSON.stringify(tasks));
  },

  getTask() {
    let tasks = window.localStorage.getItem('tasks');
    if (tasks) {
      return JSON.parse(window.localStorage.getItem('tasks'));
    }
    return [];
  }
}

export default localStorageAPI;

class DynamicFormService {
  getDynamicForm = () => {
    return fetch('/data/form-data.json').then((res) => res.json());
  }
}

export default new DynamicFormService();

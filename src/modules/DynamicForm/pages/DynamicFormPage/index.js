import React, {useEffect, useState} from 'react';
import Form from "../../components/Form";
import DynamicFormService from "../../services/DynamicFormService";
import {Loading, ApiErrors} from '../../../../shared'

const DynamicFormPage = () => {
  const [formView, setFormView] = useState([]);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    DynamicFormService.getDynamicForm().then(
      ({view, data}) => {
        setTimeout(() => {
          setFormView(Object.entries(view));
          setFormData({...data});
          setLoading(false);
        }, 500)
      },
      (error) => {
        setFormView([]);
        setFormData({});
        setError(String(error));
        setLoading(false);
      })
  }, []);

  const handleFormSubmit = (key, state) => {
    console.log(key, state);
  }

  return (
    <section>
      <div className="container">
        <Loading loading={loading}>
          <ApiErrors error={error}>
            {formView
              .map(([key, {title, children}]) => (
                <Form
                  key={key}
                  id={key}
                  title={title}
                  content={children}
                  data={formData[key]}
                  formSubmit={(state) => handleFormSubmit(key, state)}/>
              ))}
          </ApiErrors>
        </Loading>
      </div>
    </section>
  );
}

export default DynamicFormPage;

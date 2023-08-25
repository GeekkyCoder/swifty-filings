import { createContext, useState } from "react";

const FormContext = createContext();

const defaultFormData = {
  firstname: "",
  lastname: "",
  phone: "",
  email: "",
  businessname: "",
  city: "",
  address1: "",
  address2: "",
  dateofbirth: "",
  github: "",
  twitter: "",
  facebook: "",
  ordername: "",
  ordertype: "",
  ratings: "",
  comment: "",
};

function FormContextProvider({ children }) {
  const [form, setForm] = useState(defaultFormData);

  function formChangeHandler(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  return (
    <FormContext.Provider value={{ formChangeHandler,form }}>
      {children}
    </FormContext.Provider>
  );
}

export { FormContext, FormContextProvider };

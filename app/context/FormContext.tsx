//usng this Code Connect formReducer(Brain) to app 

"use client";

import { createContext, useReducer, useContext } from "react";
import { formReducer, initialState } from "./formReducer";

const FormContext = createContext<any>(null);

export const FormProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => useContext(FormContext);
